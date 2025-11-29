import React, { useState, useEffect } from 'react'
import { adminService } from '../services/adminService'
import { API_BASE_URL } from '../../services/api'

const CommentManagement = () => {
  const [commentsByPost, setCommentsByPost] = useState({})
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [message, setMessage] = useState({ type: '', text: '' })
  const [expandedPosts, setExpandedPosts] = useState({})
  const [expandedComments, setExpandedComments] = useState({})
  const [hiddenComments, setHiddenComments] = useState({})

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      setLoading(true)
      console.log('Fetching posts and comments...')
      
      // Fetch posts first
      const postsResponse = await fetch(`${API_BASE_URL}/api/posts`)
      const postsData = await postsResponse.json()
      console.log('Posts received:', postsData)
      
      if (Array.isArray(postsData) && postsData.length > 0) {
        const commentsByPostId = {}
        
        // Fetch comments for each post
        for (const post of postsData) {
          try {
            const commentsResponse = await fetch(`${API_BASE_URL}/api/posts/${post.id}/comments`)
            if (commentsResponse.ok) {
              const postComments = await commentsResponse.json()
              if (postComments.length > 0) {
                commentsByPostId[post.id] = postComments.map(comment => ({
                  ...comment,
                  authorName: comment.authorName || 'Anonymous',
                  userPhone: 'Not provided',
                  userEmail: 'Not provided',
                  postTitle: post.title
                }))
              }
            }
          } catch (err) {
            console.log(`No comments for post ${post.id}`)
          }
        }
        
        console.log('Comments by post:', commentsByPostId)
        
        // Sort posts by creation date (newest posts first)
        const sortedPosts = postsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        
        setCommentsByPost(commentsByPostId)
        setPosts(sortedPosts)
      } else {
        setCommentsByPost({})
        setPosts([])
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      setCommentsByPost({})
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteComment = async (commentId) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      try {
        await fetch(`${API_BASE_URL}/api/admin/comments/${commentId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        })
        fetchComments() // Refresh all comments
        setMessage({ type: 'success', text: 'Comment deleted successfully!' })
        setTimeout(() => setMessage({ type: '', text: '' }), 3000)
      } catch (error) {
        console.error('Error deleting comment:', error)
        setMessage({ type: 'error', text: 'Failed to delete comment' })
        setTimeout(() => setMessage({ type: '', text: '' }), 3000)
      }
    }
  }

  const togglePostExpansion = (postId) => {
    setExpandedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }))
  }

  const toggleCommentExpansion = (commentId) => {
    setExpandedComments(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }))
  }

  const toggleCommentVisibility = (commentId) => {
    setHiddenComments(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }))
  }

  const countAllComments = (comments) => {
    return comments.reduce((total, comment) => {
      return total + 1 + (comment.replies ? countAllComments(comment.replies) : 0)
    }, 0)
  }

  const getPostCommentCount = (postId) => {
    const postComments = commentsByPost[postId] || []
    return postComments.length
  }

  const filteredPosts = posts.filter(post => {
    const postComments = commentsByPost[post.id] || []
    const hasMatchingComment = postComments.some(comment =>
      comment.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.authorName?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return post.title?.toLowerCase().includes(searchTerm.toLowerCase()) || hasMatchingComment
  })

  const CommentItem = ({ comment, depth = 0 }) => {
    const hasReplies = comment.replies && comment.replies.length > 0
    const isHidden = hiddenComments[comment.id] || false
    const isTopLevel = depth === 0
    const totalRepliesCount = hasReplies ? countAllComments(comment.replies) : 0

    const getIndentStyle = (depth) => {
      if (depth === 0) return ''
      if (depth <= 3) return `ml-${Math.min(depth * 4, 12)} border-l-2 border-gray-600 pl-3`
      return 'ml-8 border-l border-gray-500 pl-2'
    }

    const getAvatarSize = (depth) => {
      if (depth <= 1) return 'w-8 h-8 text-sm'
      if (depth <= 3) return 'w-6 h-6 text-xs'
      return 'w-5 h-5 text-xs'
    }

    return (
      <div className={getIndentStyle(depth)}>
        <div className={`bg-gray-${depth > 3 ? '600' : '700'} rounded-lg p-${depth > 3 ? '2' : '3'} mb-2 border border-gray-${depth > 3 ? '500' : '600'}`}>
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-start space-x-2">
              <div className={`${getAvatarSize(depth)} bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                {(comment.authorName || 'U')[0].toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col text-sm text-gray-400 mb-1">
                  <div className="flex items-center space-x-2 flex-wrap">
                    <span className="font-medium text-gray-300 text-xs">{comment.authorName || 'Unknown'}</span>
                    <span className="text-xs">•</span>
                    <span className="text-xs">{new Date(comment.createdAt).toLocaleDateString()}</span>
                    {comment.replyToUser && (
                      <span className="text-blue-400 text-xs">→ {comment.replyToUser}</span>
                    )}
                  </div>
                  {depth <= 2 && (
                    <div className="flex items-center space-x-2 text-xs">
                      <span>📧 {comment.userEmail}</span>
                      <span>•</span>
                      <span>📱 {comment.userPhone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 flex-shrink-0">
              {hasReplies && isTopLevel && (
                <button
                  onClick={() => toggleCommentVisibility(comment.id)}
                  className="text-xs text-blue-400 hover:text-blue-300 px-1 py-1 rounded"
                >
                  {isHidden ? `View ${totalRepliesCount} ${totalRepliesCount === 1 ? 'reply' : 'replies'}` : 'Hide'}
                </button>
              )}
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className="text-red-400 hover:text-red-600 px-1 py-1 bg-red-900/20 rounded text-xs"
              >
                Del
              </button>
            </div>
          </div>

          <p className={`text-gray-300 ${depth > 3 ? 'text-xs' : 'text-sm'} ml-${depth > 3 ? '7' : '10'} break-words`}>{comment.content}</p>
        </div>

        {/* Recursive replies rendering - Show all replies when not hidden */}
        {hasReplies && !isHidden && (
          <div className="space-y-1">
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

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
        <h1 className="text-2xl font-bold text-white">Comment Management</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search comments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
          />
        </div>
      </div>

      <div className="space-y-6">
        {filteredPosts.map((post) => {
          const postComments = commentsByPost[post.id] || []
          const totalComments = getPostCommentCount(post.id)
          const isExpanded = expandedPosts[post.id]

          return (
            <div key={post.id} className="bg-gray-800 rounded-lg shadow-md border border-gray-700">
              {/* Post Header */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      📝
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                      <p className="text-sm text-gray-400">{new Date(post.createdAt).toLocaleDateString()} at {new Date(post.createdAt).toLocaleTimeString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-400">
                      {totalComments} total comments
                    </span>
                    <button
                      onClick={() => togglePostExpansion(post.id)}
                      className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-sm"
                    >
                      {isExpanded ? 'Hide Comments' : 'View Comments'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              {isExpanded && (
                <div className="p-4">
                  {postComments.length === 0 ? (
                    <p className="text-gray-400 text-center py-4">No comments on this post yet.</p>
                  ) : (
                    <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                      {postComments.map((comment) => (
                        <div key={comment.id} className="bg-gray-700 rounded-lg p-3 mb-2 border border-gray-600">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-start space-x-2">
                              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 text-sm">
                                {(comment.authorName || 'U')[0].toUpperCase()}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-col text-sm text-gray-400 mb-1">
                                  <div className="flex items-center space-x-2 flex-wrap">
                                    <span className="font-medium text-gray-300 text-xs">{comment.authorName || 'Unknown'}</span>
                                    <span className="text-xs">•</span>
                                    <span className="text-xs">{new Date(comment.createdAt).toLocaleDateString()}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => handleDeleteComment(comment.id)}
                              className="text-red-400 hover:text-red-600 px-2 py-1 bg-red-900/20 rounded text-xs"
                            >
                              Delete
                            </button>
                          </div>
                          <p className="text-gray-300 text-sm ml-10 break-words">{comment.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg">No comments found</div>
        </div>
      )}
    </div>
  )
}

export default CommentManagement