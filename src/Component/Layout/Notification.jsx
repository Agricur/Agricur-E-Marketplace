import React, { useState } from 'react';
const Notification = () => {
    const [notifications, setNotifications] = useState([
        {
          id: 1,
          message: 'New order received!',
          type: 'success',
        },
        {
          id: 2,
          message: 'Payment processed successfully.',
          type: 'info',
        },
        {
          id: 3,
          message: 'Item out for delivery.',
          type: 'warning',
        },
        {
          id: 4,
          message: 'Your review is live.',
          type: 'success',
        },
        
      ]);
    
      const closeNotification = (id) => {
        setNotifications(notifications.filter((notif) => notif.id !== id));
      };
  return (
    <div>
        <div className="rounded-lg shadow-md z-50 fixed top-20 right-4 max-w-300  bg-white shadow-10 p-4">
        <h1 className="text-2xl font-semibold text-green-500 mb-4">Notifications</h1>
        {notifications.map((notification) => (
            <div
            key={notification.id}
            className={`bg-${notification.type}-100 p-4 rounded-md mb-4 flex justify-between items-center border-solid border-2 border-green-500 bg-[#d9eada]  border-l-4 border-${notification.type}-500`}
            >
            <p className={`text-${notification.type}-600`}>{notification.message}</p>
            <button
                onClick={() => closeNotification(notification.id)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Notification