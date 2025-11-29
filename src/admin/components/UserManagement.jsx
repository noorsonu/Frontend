import React, { useState, useEffect } from 'react'
import { adminService } from '../services/adminService'

const UserManagement = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const data = await adminService.getAllUsers()
      // Handle different response structures and sort by registration date (most recent first)
      const usersData = data.data || data || []
      const sortedUsers = usersData.sort((a, b) => 
        new Date(b.createdAt || b.registrationDate) - new Date(a.createdAt || a.registrationDate)
      )
      setUsers(sortedUsers)
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleBlockUser = async (userId) => {
    try {
      await adminService.blockUser(userId)
      // Refresh users list to get updated data from server
      await fetchUsers()
      setMessage({ type: 'success', text: 'User blocked successfully!' })
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error blocking user:', error)
      setMessage({ type: 'error', text: 'Failed to block user' })
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    }
  }

  const handleUnblockUser = async (userId) => {
    try {
      await adminService.unblockUser(userId)
      // Refresh users list to get updated data from server
      await fetchUsers()
      setMessage({ type: 'success', text: 'User unblocked successfully!' })
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error unblocking user:', error)
      setMessage({ type: 'error', text: 'Failed to unblock user' })
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    }
  }

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await adminService.deleteUser(userId)
        fetchUsers() // Refresh list
        setMessage({ type: 'success', text: 'User deleted successfully!' })
        setTimeout(() => setMessage({ type: '', text: '' }), 3000)
      } catch (error) {
        console.error('Error deleting user:', error)
        setMessage({ type: 'error', text: 'Failed to delete user' })
        setTimeout(() => setMessage({ type: '', text: '' }), 3000)
      }
    }
  }

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {message.text && (
        <div className={`p-3 rounded-lg text-sm ${
          message.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
        }`}>
          {message.text}
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-white">User Management</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
          />
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  User
                </th>
                <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Email
                </th>
                <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Mobile
                </th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-700">
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                        {user.name?.charAt(0) || 'U'}
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <div className="text-xs sm:text-sm font-medium text-white truncate max-w-[120px] sm:max-w-none">{user.name || 'Unknown'}</div>
                        <div className="text-xs text-gray-400 sm:hidden truncate max-w-[120px]">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">{user.email}</div>
                  </td>
                  <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">{user.phoneNumber || 'Not provided'}</div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.blocked ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {user.blocked ? 'Blocked' : 'Active'}
                    </span>
                  </td>
                  <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium">
                    <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
                      {user.blocked ? (
                        <button
                          onClick={() => handleUnblockUser(user.id)}
                          className="text-green-600 hover:text-green-900 px-2 sm:px-3 py-1 bg-green-100 rounded-md cursor-pointer text-xs"
                        >
                          Unblock
                        </button>
                      ) : (
                        <button
                          onClick={() => handleBlockUser(user.id)}
                          className="text-yellow-600 hover:text-yellow-900 px-2 sm:px-3 py-1 bg-yellow-100 rounded-md cursor-pointer text-xs"
                        >
                          Block
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-600 hover:text-red-900 px-2 sm:px-3 py-1 bg-red-100 rounded-md cursor-pointer text-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg">No users found</div>
        </div>
      )}
    </div>
  )
}

export default UserManagement