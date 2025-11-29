import apiService from '../../services/api'

class AdminService {
  // Dashboard Stats
  async getDashboardStats() {
    return apiService.get('/api/admin/dashboard/stats')
  }

  async getRecentUsers() {
    return apiService.get('/api/admin/users')
  }

  async getRecentPosts() {
    return apiService.get('/api/admin/posts')
  }

  // User Management
  async getAllUsers() {
    return apiService.get('/api/admin/users')
  }

  async getUserDetails(userId) {
    return apiService.get(`/api/admin/users/${userId}`)
  }

  async updateUser(userId, userData) {
    return apiService.put(`/api/admin/users/${userId}`, userData)
  }

  async deleteUser(userId) {
    return apiService.delete(`/api/admin/users/${userId}`)
  }

  async blockUser(userId) {
    return apiService.put(`/api/admin/users/${userId}/block`, {})
  }

  async unblockUser(userId) {
    return apiService.put(`/api/admin/users/${userId}/unblock`, {})
  }

  // Post Management
  async getAllPosts() {
    return apiService.get('/api/admin/posts')
  }

  async getPostDetails(postId) {
    return apiService.get(`/api/admin/posts/${postId}`)
  }

  async createPost(postData) {
    const formData = new FormData()
    formData.append('title', postData.title)
    formData.append('content', postData.content)
    if (postData.image) {
      formData.append('image', postData.image)
    }
    
    return apiService.uploadFile('/api/admin/posts', formData)
  }

  async updatePost(postId, postData) {
    const formData = new FormData()
    if (postData.title) formData.append('title', postData.title)
    if (postData.content) formData.append('content', postData.content)
    if (postData.image) formData.append('image', postData.image)
    
    return apiService.request(`/api/admin/posts/${postId}`, {
      method: 'PUT',
      body: formData,
      headers: {}
    })
  }

  async deletePost(postId) {
    return apiService.forceDelete(`/api/admin/posts/${postId}`)
  }

  // Comment Management
  async getAllComments() {
    return apiService.get('/api/admin/comments')
  }

  async getCommentDetails(commentId) {
    return apiService.get(`/api/admin/comments/${commentId}`)
  }

  async deleteComment(commentId) {
    return apiService.delete(`/api/admin/comments/${commentId}`)
  }

  async approveComment(commentId) {
    return apiService.put(`/api/admin/comments/${commentId}/approve`)
  }

  async rejectComment(commentId) {
    return apiService.put(`/api/admin/comments/${commentId}/reject`)
  }

  // System Management
  async getSystemInfo() {
    return apiService.get('/api/admin/system/info')
  }

  async getSystemLogs() {
    return apiService.get('/api/admin/system/logs')
  }

  async clearCache() {
    return apiService.post('/api/admin/system/cache/clear')
  }

  // Reports and Analytics
  async getUsersReport() {
    return apiService.get('/api/admin/reports/users')
  }

  async getPostsReport() {
    return apiService.get('/api/admin/reports/posts')
  }

  async getActivityReport() {
    return apiService.get('/api/admin/reports/activity')
  }

  // Bulk Operations
  async bulkDeleteUsers(userIds) {
    return apiService.post('/api/admin/users/bulk-delete', { userIds })
  }

  async bulkDeletePosts(postIds) {
    return apiService.post('/api/admin/posts/bulk-delete', { postIds })
  }

  async bulkDeleteComments(commentIds) {
    return apiService.post('/api/admin/comments/bulk-delete', { commentIds })
  }

  // Settings Management
  async getSettings() {
    return apiService.get('/api/admin/settings')
  }

  async updateSettings(settings) {
    return apiService.put('/api/admin/settings', settings)
  }

  // User Role Management
  async getUserRoles() {
    return apiService.get('/api/admin/roles')
  }

  async assignRole(userId, roleId) {
    return apiService.put(`/api/admin/users/${userId}/role`, { roleId })
  }

  async removeRole(userId, roleId) {
    return apiService.delete(`/api/admin/users/${userId}/role/${roleId}`)
  }
}

export const adminService = new AdminService()