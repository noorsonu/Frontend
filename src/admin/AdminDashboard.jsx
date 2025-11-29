import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import authService from '../services/authService'
import DashboardHome from './components/DashboardHome'
import UserManagement from './components/UserManagement'
import PostManagement from './components/PostManagement'
import CommentManagement from './components/CommentManagement'
import { adminService } from './services/adminService'

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [stats, setStats] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    navigate('/')
  }

  const handleHome = () => {
    navigate('/')
  }

  useEffect(() => {
    fetchDashboardStats()
  }, [])

  const fetchDashboardStats = async () => {
    try {
      const data = await adminService.getDashboardStats()
      setStats(data)
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: '📊' },
    { name: 'Users', path: '/admin/users', icon: '👥' },
    { name: 'Posts', path: '/admin/posts', icon: '📝' },
    { name: 'Comments', path: '/admin/comments', icon: '💬' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white w-64 sm:w-72 lg:w-80 xl:w-64 space-y-4 sm:space-y-6 py-4 sm:py-7 px-2 sm:px-3 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-20 border-r border-gray-700`}>
        <div className="text-center px-2">
          <h1 className="text-xl sm:text-2xl font-bold">Admin Panel</h1>
        </div>

        <nav className="space-y-1 sm:space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${location.pathname === item.path
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="text-lg sm:text-xl">{item.icon}</span>
              <span className="truncate">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-gray-800 shadow-sm border-b border-gray-700">
          <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-300 focus:outline-none focus:text-white md:hidden p-1"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h2 className="text-lg sm:text-xl font-semibold text-white ml-2 sm:ml-4 md:ml-0 truncate">
                {menuItems.find(item => item.path === location.pathname)?.name || 'Dashboard'}
              </h2>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
              <button
                onClick={handleHome}
                className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md sm:rounded-lg transition-colors cursor-pointer text-xs sm:text-sm"
                title="Go to Home"
              >
                <span className="text-sm sm:text-lg">🏠</span>
                <span className="hidden sm:inline">Home</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white rounded-md sm:rounded-lg transition-colors cursor-pointer text-xs sm:text-sm"
                title="Logout"
              >
                <span className="text-sm sm:text-lg">🚪</span>
                <span className="hidden sm:inline">Logout</span>
              </button>
              
              <div className="text-xs sm:text-sm text-gray-300 hidden lg:block">
                Welcome, Admin
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-3 sm:p-4 lg:p-6">
          <Routes>
            <Route path="/" element={<DashboardHome stats={stats} />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/posts" element={<PostManagement />} />
            <Route path="/comments" element={<CommentManagement />} />
          </Routes>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default AdminDashboard