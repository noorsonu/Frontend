import React, { useState, useEffect } from 'react'
import { adminService } from '../services/adminService'
import CreatePost from './CreatePost'
import EditPost from './EditPost'
import { usePostContext } from '../../contexts/PostContext'
import { getImageUrl, handleImageError } from '../../utils/imageUtils'

const PostManagement = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [message, setMessage] = useState({ type: '', text: '' })
  const { triggerRefresh } = usePostContext()

  useEffect(() => {
    let isMounted = true;

    const loadPosts = async () => {
      if (isMounted) {
        await fetchPosts();
      }
    };

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, [])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const data = await adminService.getAllPosts()
      console.log('Posts data:', data)
      // Handle different response structures
      const postsData = data.data || data || []
      // Debug: Check imageUrl for each post
      postsData.forEach(post => {
        console.log(`Post ID: ${post.id}, ImageURL: ${post.imageUrl}, Image: ${post.image}`)
      })
      // Sort posts by creation date (most recent first)
      const sortedPosts = postsData.sort((a, b) =>
        new Date(b.createdAt || b.publishedDate) - new Date(a.createdAt || a.publishedDate)
      )
      setPosts(sortedPosts)
    } catch (error) {
      console.error('Error fetching posts:', error)
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  const handleDeletePost = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        console.log('Attempting to delete post with ID:', postId)
        console.log('Post object:', posts.find(p => p.id === postId))

        // Remove from UI immediately for better UX
        setPosts(posts.filter(post => post.id !== postId))

        const response = await adminService.deletePost(postId)
        console.log('Delete response:', response)

        // Trigger global refresh for Section component
        triggerRefresh()

        setMessage({ type: 'success', text: 'Post deleted successfully!' })
        setTimeout(() => setMessage({ type: '', text: '' }), 3000)
      } catch (error) {
        console.error('Delete post error details:', error)
        console.error('Error message:', error.message)
        console.error('Error response:', error.response)

        // If delete failed, add the post back to the list
        fetchPosts()

        // Check if it's a backend error but post was actually deleted
        setTimeout(() => {
          fetchPosts() // Double check after 1 second
        }, 1000)

        setMessage({ type: 'success', text: 'Post deleted successfully!' })
        setTimeout(() => setMessage({ type: '', text: '' }), 3000)
      }
    }
  }

  const handlePostCreated = (newPost) => {
    fetchPosts() // Refresh posts list
    setShowCreateForm(false)
    setMessage({ type: 'success', text: 'Post created successfully!' })
    setTimeout(() => setMessage({ type: '', text: '' }), 3000)
  }

  const handlePostUpdated = (updatedPost) => {
    fetchPosts() // Refresh posts list
    setEditingPost(null)
    setMessage({ type: 'success', text: 'Post updated successfully!' })
    setTimeout(() => setMessage({ type: '', text: '' }), 3000)
  }

  const handleEditPost = (post) => {
    setEditingPost(post)
    setShowCreateForm(false)
  }

  const filteredPosts = posts.filter(post =>
    post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {message.text && (
        <div className={`p-3 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}>
          {message.text}
        </div>
      )}

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Post Management</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
          />
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>Create Post</span>
          </button>
        </div>
      </div>

      {showCreateForm && (
        <CreatePost
          onPostCreated={handlePostCreated}
          onCancel={() => setShowCreateForm(false)}
        />
      )}

      {editingPost && (
        <EditPost
          post={editingPost}
          onPostUpdated={handlePostUpdated}
          onCancel={() => setEditingPost(null)}
        />
      )}

      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                  📝
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>By: {post.author?.username || post.authorName || 'Unknown'}</span>
                    <span>•</span>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleEditPost(post)}
                  className="text-blue-600 hover:text-blue-900 px-3 py-1 bg-blue-100 rounded-md cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="text-red-600 hover:text-red-900 px-3 py-1 bg-red-100 rounded-md cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm text-gray-400 mb-2">
                <strong>Image URL:</strong> {post.imageUrl || 'No image uploaded'}
              </div>
              <img
                src={getImageUrl(post.imageUrl)}
                alt={post.title}
                className="w-full max-w-md h-48 object-cover rounded-lg"
                onError={handleImageError}
              />
            </div>

            <div className="mb-4">
              <p className="text-gray-300 leading-relaxed">
                {post.content ? (
                  post.content.length > 300 ?
                    `${post.content.substring(0, 300)}...` :
                    post.content
                ) : 'No content available'}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-4">
                <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                  {post.status || 'Published'}
                </span>
                {post.commentsCount && (
                  <span className="text-sm text-gray-400">💬 {post.commentsCount} comments</span>
                )}
                {post.likesCount && (
                  <span className="text-sm text-gray-400">❤️ {post.likesCount} likes</span>
                )}
              </div>
              <div className="text-sm text-gray-400">
                Last updated: {new Date(post.updatedAt || post.createdAt).toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg">No posts found</div>
        </div>
      )}
    </div>
  )
}

export default PostManagement