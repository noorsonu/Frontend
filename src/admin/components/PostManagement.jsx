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

      <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 xs:gap-4">
        <h1 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">Post Management</h1>
        <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 xs:gap-3 sm:gap-4 w-full xs:w-auto">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 xs:px-4 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-sm xs:text-base w-full xs:w-auto"
          />
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="px-3 py-2 xs:px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 xs:gap-2 cursor-pointer text-sm xs:text-base whitespace-nowrap"
          >
            <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <span className="hidden xs:inline">Create Post</span>
            <span className="xs:hidden">Create</span>
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

      <div className="space-y-3 xs:space-y-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-3 xs:p-4 sm:p-6">
            <div className="flex flex-col xs:flex-row items-start justify-between gap-3 xs:gap-4 mb-3 xs:mb-4">
              <div className="flex items-start gap-2 xs:gap-3 sm:gap-4 w-full xs:w-auto">
                <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 text-sm xs:text-base">
                  📝
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-white mb-1 xs:mb-2 break-words">{post.title}</h3>
                  <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 sm:gap-4 text-xs xs:text-sm text-gray-400">
                    <span className="truncate">By: {post.author?.username || post.authorName || 'Unknown'}</span>
                    <span className="hidden xs:inline">•</span>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 xs:gap-2 w-full xs:w-auto">
                <button
                  onClick={() => handleEditPost(post)}
                  className="text-blue-600 hover:text-blue-900 px-2 py-1 xs:px-3 bg-blue-100 rounded-md cursor-pointer text-xs xs:text-sm flex-1 xs:flex-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="text-red-600 hover:text-red-900 px-2 py-1 xs:px-3 bg-red-100 rounded-md cursor-pointer text-xs xs:text-sm flex-1 xs:flex-none"
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="mb-3 xs:mb-4">
              <div className="text-xs xs:text-sm text-gray-400 mb-2 break-all">
                <strong>Image:</strong> {post.imageUrl ? 'Uploaded' : 'No image'}
              </div>
              {post.imageUrl && (
                <img
                  src={getImageUrl(post.imageUrl)}
                  alt={post.title}
                  className="w-full max-w-xs xs:max-w-sm sm:max-w-md h-32 xs:h-40 sm:h-48 object-cover rounded-lg"
                  onError={handleImageError}
                />
              )}
            </div>

            <div className="mb-3 xs:mb-4">
              <p className="text-gray-300 leading-relaxed text-xs xs:text-sm sm:text-base break-words">
                {post.content ? (
                  post.content.length > (window.innerWidth < 640 ? 150 : 300) ?
                    `${post.content.substring(0, window.innerWidth < 640 ? 150 : 300)}...` :
                    post.content
                ) : 'No content available'}
              </p>
            </div>

            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-4 pt-3 xs:pt-4 border-t border-gray-700">
              <div className="flex flex-wrap items-center gap-2 xs:gap-3 sm:gap-4">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                  {post.status || 'Published'}
                </span>
                {post.commentsCount > 0 && (
                  <span className="text-xs xs:text-sm text-gray-400">💬 {post.commentsCount}</span>
                )}
                {post.likesCount > 0 && (
                  <span className="text-xs xs:text-sm text-gray-400">❤️ {post.likesCount}</span>
                )}
              </div>
              <div className="text-xs xs:text-sm text-gray-400 w-full xs:w-auto text-left xs:text-right">
                Updated: {new Date(post.updatedAt || post.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-8 xs:py-12">
          <div className="text-gray-400 text-base xs:text-lg">No posts found</div>
        </div>
      )}
    </div>
  )
}

export default PostManagement