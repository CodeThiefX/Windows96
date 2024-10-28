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
        {/* <h1 className="font-bold col-span-2">Tokenomics</h1> */}
        <div className="col-span-1 font-bold">Token name:</div>
        <div className="col-span-1">$START</div>
        <div className="col-span-1 font-bold">Total supply:</div>
        <div className="col-span-1">1 billion</div>
      </div>
    </WindowFrame>
  );
}
