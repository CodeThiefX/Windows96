import { Globe } from "lucide-react";
import { WindowFrame } from "./WindowFrame";

interface WhitepaperProps {
  onClose: () => void;
}

export function Whitepaper({ onClose }: WhitepaperProps) {
  return (
    <WindowFrame
      title="Whitepaper"
      Icon={Globe}
      onClose={onClose}
      className="w-64"
    >
      <div className="grid grid-cols-2 gap-4 p-4">
        <p>Whitepaper</p>
      </div>
    </WindowFrame>
  );
}
