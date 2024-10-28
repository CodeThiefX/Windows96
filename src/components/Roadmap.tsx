import { Globe } from "lucide-react";
import { WindowFrame } from "./WindowFrame";

interface TokenomicsProps {
  onClose: () => void;
}

export function Roadmap({ onClose }: TokenomicsProps) {
  return (
    <WindowFrame
      title="Roadmap"
      Icon={Globe}
      onClose={onClose}
      className="w-64"
    >
      <div className="grid grid-cols-1 gap-4 p-4">
        {/* <h1 className="font-bold text-xl">Roadmap</h1> */}
        <div className="space-y-2">
          <div>
            <h2 className="font-semibold">Phase 1:</h2>
            <p>Token Launch and Platform Beta Release</p>
          </div>
          <div>
            <h2 className="font-semibold">Phase 2:</h2>
            <p>Alpha Testing with Community</p>
          </div>
          <div>
            <h2 className="font-semibold">Phase 3:</h2>
            <p>Full Launch of Insight Rewards System</p>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
