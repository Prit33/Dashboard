import React from "react";

function NotificationPanel() {
  const notifications = [
    { id: 1, message: "Sent a message", time: "12 minutes ago" },
    {
      id: 2,
      message: "Received the site",
      time: "10 minutes ago",
    },
    {
      id: 3,
      message: "Job accepted",
      time: "22 minutes ago",
    },
    { id: 1, message: "Sent a message", time: "12 minutes ago" },
    {
      id: 2,
      message: "Received the site",
      time: "10 minutes ago",
    },
    {
      id: 3,
      message: "Job accepted",
      time: "22 minutes ago",
    },
    { id: 1, message: "Sent a message", time: "12 minutes ago" },
    {
      id: 2,
      message: "Received the site",
      time: "10 minutes ago",
    },
  ];
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gray-800 bg-opacity-50">
      <div className="absolute inset-y-0 right-0 max-w-sm w-72  bg-white rounded-l-md">
        {/* Notification header */}
        <div className="p-4 bg-slate-800">
          <h2 className="text-lg text-white font-semibold p-1.5">
            Notifications
            
          </h2>
        </div>
        {/* Notification list */}
        <div>
          {notifications.map((notification) => (
            <div key={notification.id}>
              <div className="p-4 flex items-center border-b border-gray-200 px-6 ">
                <div className="flex-shrink-0 mr-2">
                  <img
                    className="w-10 rounded-full align-middle border-none shadow-lg ml-2"
                    src="https://edug.in/panel/head_admin/School/school_head/first_photo/DEMO59167.jpg"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">
                    {notification.message}
                  </p>
                  <p className="text-xs font-extralight text-gray-400">
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationPanel;
