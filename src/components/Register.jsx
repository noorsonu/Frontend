import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Notification from './Notification'
import { authService } from '../services'

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phoneNumber: '', password: '', confirmPassword: '' })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [notification, setNotification] = useState({ message: '', type: '' })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess('')
        
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match')
            setLoading(false)
            return
        }
        
        // Validate form data
        if (!formData.name.trim() || !formData.email.trim() || !formData.phoneNumber.trim() || !formData.password.trim()) {
            setError('All fields are required')
            setLoading(false)
            return
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long')
            setLoading(false)
            return
        }

        try {
            const userData = {
                name: formData.name.trim(),
                email: formData.email.trim().toLowerCase(),
                phoneNumber: formData.phoneNumber.trim(),
                password: formData.password
            }
            
            console.log('Sending registration data:', userData)
            const response = await authService.register(userData)
            const successMsg = response.message || 'User registered successfully'
            setNotification({ message: successMsg, type: 'success' })
            setTimeout(() => navigate('/login'), 2000)
        } catch (error) {
            console.error('Registration error:', error)
            let errorMsg = 'Registration failed. Please try again.'
            
            if (error.message.includes('400')) {
                errorMsg = 'Invalid data provided. Please check all fields.'
            } else if (error.message.includes('email')) {
                errorMsg = 'Email already exists or invalid email format.'
            } else if (error.message.includes('phone')) {
                errorMsg = 'Phone number already exists or invalid format.'
            } else {
                errorMsg = error.message || errorMsg
            }
            
            setNotification({ message: errorMsg, type: 'error' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Navbar />
            <Notification 
                message={notification.message}
                type={notification.type}
                onClose={() => setNotification({ message: '', type: '' })}
            />
            <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 min-h-screen flex box-border justify-center items-center overflow-hidden">
                {/* Animated Islamic Patterns */}
                <div className="absolute inset-0 opacity-10 ">
                    {/* Rotating Stars */}
                    <div className="absolute top-20 left-20 w-16 h-16 border-2 border-emerald-400 animate-spin" style={{ animationDuration: '20s' }}>
                        <div className="absolute inset-2 border border-emerald-300 rotate-45"></div>
                        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-emerald-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                    </div>

                    {/* Pulsing Geometric Shapes */}
                    <div className="absolute top-40 right-32 w-20 h-20 border-2 border-teal-400 rotate-45 animate-pulse">
                        <div className="absolute inset-3 border border-teal-300 rotate-45"></div>
                    </div>

                    {/* Floating Cross Pattern */}
                    <div className="absolute bottom-32 left-32 w-12 h-12 border border-cyan-400 animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-cyan-400 transform -translate-y-1/2"></div>
                        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-cyan-400 transform -translate-x-1/2"></div>
                    </div>

                    {/* Rotating Octagon */}
                    <div className="absolute top-60 right-60 w-14 h-14 border-2 border-blue-400 animate-spin" style={{ animationDuration: '15s', clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}></div>

                    {/* Moving Diamonds */}
                    <div className="absolute bottom-20 right-20 w-10 h-10 border border-purple-400 rotate-45 animate-ping" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute top-32 left-1/2 w-8 h-8 border border-indigo-400 rotate-45 animate-pulse"></div>
                </div>

                {/* Gradient Overlays */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="relative z-10 bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center shadow-2xl">
                    <div className="md:w-1/2 px-8">
                        <h2 className="font-bold text-3xl text-[#002D74]">Register here</h2>

                        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                        {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input 
                                className="p-2 mt-8 rounded-xl border" 
                                type="text" 
                                name="name" 
                                placeholder="Enter your name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                            <input 
                                className="p-2 rounded-xl border" 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                            <input 
                                className="p-2 rounded-xl border" 
                                type="tel" 
                                name="phoneNumber" 
                                placeholder="Phone Number" 
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required 
                            />
                            <div className="relative">
                                <input 
                                    className="p-2 rounded-xl border w-full" 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Password" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    required 
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" id="togglePassword"
                                    className=" bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z">
                                    </path>
                                    <path
                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z">
                                    </path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                                    id="mama" viewBox="0 0 16 16">
                                    <path
                                        d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z">
                                    </path>
                                    <path
                                        d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z">
                                    </path>
                                </svg>
                            </div>
                            <div className="relative">
                                <input 
                                    className="p-2 rounded-xl border w-full" 
                                    type="password" 
                                    name="confirmPassword" 
                                    id="confirmPassword" 
                                    placeholder="Confirm Password" 
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required 
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" id="toggleConfirmPassword"
                                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z">
                                    </path>
                                    <path
                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z">
                                    </path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                                    id="confirmMama" viewBox="0 0 16 16">
                                    <path
                                        d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z">
                                    </path>
                                    <path
                                        d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z">
                                    </path>
                                </svg>
                            </div>
                            <button 
                                className="bg-[#002D74] cursor-pointer text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium disabled:opacity-50" 
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Registering...' : 'Register'}
                            </button>
                        </form>

                        <div className="mt-4 text-sm flex justify-between items-center container-mr">
                            <p className="mr-3 md:mr-0 ">If you have an account..</p>
                            <Link to="/login" className="cursor-pointer text-white bg-[#002D74] hover:bg-[#206ab1] rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300 text-center">Login</Link>
                        </div>
                    </div>
                    <div className="md:block hidden w-1/2">
                        <img className="rounded-2xl max-h-[1600px] " src="/LoginImg.jpg" alt="No image found" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register