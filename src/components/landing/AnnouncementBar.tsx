"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the announcement bar on component mount
    setIsVisible(true);

    // Set a timer to hide it after 20 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 20000);

    // Clear the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50 
        bg-blue-600 text-white px-4 py-3
        flex items-center justify-between
        transform transition-transform duration-500 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <p className="text-center flex-grow font-medium">
        🛡️ New: Enhanced threat detection features now available! Schedule a
        demo today.
      </p>
      <button
        onClick={handleDismiss}
        className="ml-4 p-1 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close announcement"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default AnnouncementBar;
