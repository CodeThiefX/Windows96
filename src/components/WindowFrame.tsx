import React from 'react';
import { LucideIcon } from 'lucide-react';
import { X, Minus, Square } from 'lucide-react';

interface WindowFrameProps {
  title: string;
  Icon: LucideIcon;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export function WindowFrame({ title, Icon, onClose, children, className = '' }: WindowFrameProps) {
  return (
    <div className={`bg-[#c0c0c0] window-border ${className}`}>
      <div className="bg-[#000080] px-2 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-white" strokeWidth={1.5} />
          <span className="text-white text-sm font-bold">{title}</span>
        </div>
        <div className="flex gap-1">
          <button className="w-4 h-4 button-default bg-[#c0c0c0] flex items-center justify-center">
            <Minus className="w-3 h-3" strokeWidth={1.5} />
          </button>
          <button className="w-4 h-4 button-default bg-[#c0c0c0] flex items-center justify-center">
            <Square className="w-3 h-3" strokeWidth={1.5} />
          </button>
          <button 
            onClick={onClose}
            className="w-4 h-4 button-default bg-[#c0c0c0] flex items-center justify-center 
                     active:button-active"
          >
            <X className="w-3 h-3" strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <div className="bg-[#c0c0c0] p-1">
        {children}
      </div>
    </div>
  );
}