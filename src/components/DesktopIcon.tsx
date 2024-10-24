import { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  Icon: LucideIcon;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export function DesktopIcon({ Icon, label, isSelected, onClick }: DesktopIconProps) {
  return (
    <div 
      className="flex flex-col items-center group cursor-pointer w-20"
      onClick={onClick}
    >
      <div className={`w-12 h-12 flex items-center justify-center 
                    ${isSelected ? 'bg-[#000080] border-[#0000ff]' : 'bg-[#c0c0c0] border-[#dfdfdf]'} 
                    border-2 hover:border-dotted`}>
        <Icon 
          className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-black'}`}
          strokeWidth={1.5} 
        />
      </div>
      <span className={`mt-1 text-xs px-1 
                     ${isSelected ? 'text-white bg-[#000080]' : 'text-white bg-transparent'}`}>
        {label}
      </span>
    </div>
  );
}