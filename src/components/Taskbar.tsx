import React, { useState, useEffect } from "react";

interface TaskbarProps {
  onStartClick: () => void;
  showStartMenu: boolean;
}

export function Taskbar({ onStartClick, showStartMenu }: TaskbarProps) {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes.toString().padStart(2, "0");
      setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#c0c0c0] window-border">
      <div className="flex items-center h-full px-1 gap-1">
        <button
          onClick={onStartClick}
          className={`h-8 px-2 flex items-center gap-2 ${
            showStartMenu ? "taskbar-button-active" : "taskbar-button"
          } bg-[#c0c0c0]`}
        >
          <img src="/assets/logo.webp" alt="Windows 96" className="w-6 h-6" />
          <span className="text-sm font-bold">Start</span>
        </button>

        <div className="border-l-2 border-[#808080] border-r-2 border-r-white h-8 mx-1" />

        {/* System Tray */}
        <div className="ml-auto flex items-center gap-2 px-2 h-8 taskbar-button bg-[#c0c0c0]">
          <span className="text-sm">{currentTime}</span>
        </div>
      </div>
    </div>
  );
}
