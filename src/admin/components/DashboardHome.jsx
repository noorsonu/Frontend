import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminService } from '../services/adminService'
import { API_BASE_URL } from '../../services/api'

const DashboardHome = ({ stats }) => {
  const [recentUsers, setRecentUsers] = useState([])
  const [recentComments, setRecentComments] = useState([])
  const [postsWithComments, setPostsWithComments] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const defaultStats = {
    totalUsers: 0,
    totalPosts: 0,
    totalComments: 0,
    activeUsers: 0
  }

  const currentStats = stats || defaultStats
  console.log('Current stats:', currentStats)

  useEffect(() => {
    let isMounted = true;
    let intervalId;
    
    const loadData = async () => {
      if (isMounted) {
        await fetchRecentData();
      }
    };
    
    // Initial load
    loadData();
    
    // Auto-refresh every 5 seconds
    intervalId = setInterval(() => {
      if (isMounted) {
        loadData();
      }
    }, 5000);
    
    return () => {
      isMounted = false;
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [])



  const fetchRecentData = async (forceRefresh = false) => {
    try {
      if (forceRefresh) {
        setLoading(true)
      }
      
      console.log('=== FETCHING DASHBOARD DATA ===')
      
      // Fetch users with timestamp to avoid cache
      const usersUrl = `/api/admin/users?t=${Date.now()}`
      console.log('Fetching users from:', usersUrl)
      const usersResponse = await fetch(`${API_BASE_URL}${usersUrl}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      })
      const usersData = await usersResponse.json()
      console.log('Raw Users Response:', usersData)
      
      // Fetch all posts and their comments
      console.log('Fetching posts for comments...')
      const postsResponse = await fetch(`${API_BASE_URL}/api/posts?t=${Date.now()}`)
      const postsData = await postsResponse.json()
      
      let allComments = []
      if (Array.isArray(postsData)) {
        for (const post of postsData) {
          try {
            const commentsResponse = await fetch(`${API_BASE_URL}/api/posts/${post.id}/comments`)
            if (commentsResponse.ok) {
              const postComments = await commentsResponse.json()
              const enrichedComments = postComments.map(comment => ({
                ...comment,
                postTitle: post.title,
                postId: post.id,
                userName: comment.authorName || 'Anonymous'
              }))
              allComments = [...allComments, ...enrichedComments]
            }
          } catch (err) {
            console.log(`No comments for post ${post.id}`)
          }
        }
      }
      
      console.log('All comments collected:', allComments)
      
      // Set users data
      if (Array.isArray(usersData)) {
        const sortedUsers = usersData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        setRecentUsers(sortedUsers)
        console.log('✅ Set users count:', sortedUsers.length)
      } else {
        console.log('❌ Users data is not array:', typeof usersData, usersData)
        setRecentUsers([])
      }
      
      // Set comments data
      if (allComments.length > 0) {
        // Sort comments by creation date (newest first)
        const sortedComments = allComments.sort((a, b) => {
          const dateA = new Date(a.createdAt)
          const dateB = new Date(b.createdAt)
          return dateB - dateA
        })
        console.log('Sorted comments (newest first):', sortedComments.slice(0, 3))
        setRecentComments(sortedComments)
        console.log('✅ Set comments count:', sortedComments.length)
      } else {
        console.log('❌ No comments found')
        setRecentComments([])
      }
      
    } catch (error) {
      console.error('❌ Error fetching recent data:', error)
      setRecentUsers([])
      setRecentComments([])
    } finally {
      setLoading(false)
    }
  }

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInMinutes = Math.floor((now - date) / (1000 * 60))
    
    if (diffInMinutes < 1) return 'Just now'
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`
    return `${Math.floor(diffInMinutes / 1440)} days ago`
  }

  const statCards = [
    {
      title: 'Total Users',
      value: currentStats.totalUsers,
      icon: '👥',
      color: 'bg-blue-500'
    },
    {
      title: 'Total Posts',
      value: currentStats.totalPosts,
      icon: '📝',
      color: 'bg-green-500'
    },
    {
      title: 'Total Comments',
      value: currentStats.totalComments,
      icon: '💬',
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => fetchRecentData(true)}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm cursor-pointer"
          >
            🔄 Refresh
          </button>
          <div className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((card, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">{card.title}</p>
                <p className="text-3xl font-bold text-white">{card.value}</p>
              </div>
              <div className={`${card.color} p-3 rounded-full text-white text-2xl`}>
                {card.icon}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Users</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {loading ? (
              <div className="text-gray-400 text-center py-4">Loading...</div>
            ) : recentUsers && recentUsers.length > 0 ? (
              recentUsers.slice(0, 6).map((user, index) => (
                <div key={user.id || index} className="flex items-start space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                    {user.name ? user.name.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : 'U')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{user.name || 'Unknown User'}</p>
                    <p className="text-xs text-gray-300 truncate">{user.email || 'No email'}</p>
                    {user.phoneNumber && (
                      <p className="text-xs text-gray-300">📱 {user.phoneNumber}</p>
                    )}
                    <p className="text-xs text-gray-400">Joined: {user.createdAt ? formatTimeAgo(user.createdAt) : 'Unknown'}</p>
                  </div>
                  <div className="text-xs text-gray-400 flex-shrink-0">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-400 text-center py-4">
                No recent users (Found: {recentUsers ? recentUsers.length : 0})
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Comments</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {loading ? (
              <div className="text-gray-400 text-center py-4">Loading...</div>
            ) : recentComments && recentComments.length > 0 ? (
              recentComments.slice(0, 6).map((comment, index) => (
                <div key={comment.id || index} className="flex items-start space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                    {comment.userName ? comment.userName.charAt(0).toUpperCase() : '💬'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{comment.content || 'No content'}</p>
                    <p className="text-xs text-gray-300 truncate">By: {comment.userName || 'Anonymous'}</p>
                    <p className="text-xs text-gray-300">Post: {comment.postTitle || 'Unknown Post'}</p>
                    <p className="text-xs text-gray-400">Posted: {comment.createdAt ? formatTimeAgo(comment.createdAt) : 'Unknown'}</p>
                  </div>
                  <div className="text-xs text-gray-400 flex-shrink-0">
                    {comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : 'N/A'}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-400 text-center py-4">
                No recent comments (Found: {recentComments ? recentComments.length : 0})
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <button 
            onClick={() => navigate('/admin/users')}
            className="flex flex-col items-center p-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            <span className="text-2xl mb-2">👥</span>
            <span className="text-sm font-medium text-white">Manage Users</span>
          </button>
          <button 
            onClick={() => navigate('/admin/posts')}
            className="flex flex-col items-center p-4 bg-green-600 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
          >
            <span className="text-2xl mb-2">📝</span>
            <span className="text-sm font-medium text-white">View Posts</span>
          </button>
          <button 
            onClick={() => navigate('/admin/comments')}
            className="flex flex-col items-center p-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer"
          >
            <span className="text-2xl mb-2">💬</span>
            <span className="text-sm font-medium text-white">Comments</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome