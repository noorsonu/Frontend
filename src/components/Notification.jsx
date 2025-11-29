import React, { useEffect } from 'react'

const Notification = ({ message, type, onClose, duration = 3000 }) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose()
            }, duration)
            return () => clearTimeout(timer)
        }
    }, [message, onClose, duration])

    if (!message) return null

    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500'
    const icon = type === 'success' ? '✓' : '✕'

    return (
        <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-[9999] flex items-center gap-2 animate-slide-in`}>
            <span className="text-lg font-bold">{icon}</span>
            <span>{message}</span>
            <button
                onClick={onClose}
                className="ml-2 text-white hover:text-gray-200 font-bold text-lg"
            >
                ×
            </button>
        </div>
    )
}

export default Notification