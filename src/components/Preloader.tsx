import React, { useEffect, useState } from 'react';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#008080] flex items-center justify-center">
      <div className="bg-[#c0c0c0] p-4 window-border w-80">
        <div className="text-center mb-4">
          <h2 className="text-sm font-bold mb-2">Windows 96</h2>
          <p className="text-xs">Loading your desktop environment...</p>
        </div>
        <div className="h-4 bg-white window-border-inset">
          <div 
            className="h-full bg-[#000080] transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}