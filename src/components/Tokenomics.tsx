import { Globe } from "lucide-react";
import { WindowFrame } from "./WindowFrame";

interface TokenomicsProps {
  onClose: () => void;
}

export function Tokenomics({ onClose }: TokenomicsProps) {
  return (
    <WindowFrame
      title="Tokenomics"
      Icon={Globe}
      onClose={onClose}
      className="w-64"
    >
      <div className="grid grid-cols-2 gap-4 p-4">
        <p>Tokenomics</p>
      </div>
    </WindowFrame>
  );
}
