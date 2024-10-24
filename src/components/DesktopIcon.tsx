interface DesktopIconProps {
  Icon: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export function DesktopIcon({
  Icon,
  label,
  isSelected,
  onClick,
}: DesktopIconProps) {
  return (
    <div
      className="flex flex-col items-center group cursor-pointer w-24"
      onClick={onClick}
    >
      <div
        className={`w-12 h-12 flex items-center justify-center 
            ${isSelected ? "bg-[#000080] border-[#0000ff] border-2" : ""} 
             hover:border-dotted hover:border-2`}
      >
        <img src={Icon} alt={label} width={24} height={24} />
      </div>
      <span
        className={`mt-1 text-xs px-1 
                     ${
                       isSelected
                         ? "text-white bg-[#000080]"
                         : "text-white bg-transparent"
                     }`}
      >
        {label}
      </span>
    </div>
  );
}
