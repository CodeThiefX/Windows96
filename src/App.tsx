import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { DesktopIcon } from "./components/DesktopIcon";
import { WindowFrame } from "./components/WindowFrame";
import { Taskbar } from "./components/Taskbar";
import { Preloader } from "./components/Preloader";
import { SocialLinks } from "./components/SocialLinks";
import { Tokenomics } from "./components/Tokenomics";
import { Whitepaper } from "./components/Whitepaper";
import { Roadmap } from "./components/Roadmap";

const desktopIcons = [
  { id: "computer", icon: "/assets/computer.png", label: "My Computer" },
  { id: "whitepaper", icon: "/assets/whitepaper.png", label: "Whitepaper" },
  { id: "tokenomics", icon: "/assets/tokenomics.png", label: "Tokenomics" },
  { id: "roadmap", icon: "/assets/mail.png", label: "Roadmap" },
  { id: "socials", icon: "/assets/explorer.png", label: "Socials" },
];

function App() {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [showWhitepaper, setShowWhitepaper] = useState(false);
  const [showTokenomics, setShowTokenomics] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [showComputer, setShowComputer] = useState(false);

  const handleIconClick = (iconId: string) => {
    setSelectedIcon(iconId === selectedIcon ? null : iconId);
    if (iconId === "socials") {
      setShowSocialLinks(true);
    }
    if (iconId === "whitepaper") {
      setShowWhitepaper(true);
    }
    if (iconId === "tokenomics") {
      setShowTokenomics(true);
    }
    if (iconId === "roadmap") {
      setShowRoadmap(true);
    }
    if (iconId === "computer") {
      setShowComputer(true);
    }
  };

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div
      className="h-screen w-screen overflow-hidden background"
      onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains("bg-[#008080]")) {
          setSelectedIcon(null);
          setShowStartMenu(false);
        }
      }}
    >
      {/* Desktop Icons */}
      <div className="p-2 grid grid-cols-1 gap-4">
        {desktopIcons.map((item) => (
          <DesktopIcon
            key={item.id}
            Icon={item.icon}
            label={item.label}
            isSelected={selectedIcon === item.id}
            onClick={() => handleIconClick(item.id)}
          />
        ))}
      </div>

      {/* Welcome Prompt */}
      {showPrompt && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <WindowFrame
            title="Welcome"
            Icon={AlertCircle}
            onClose={() => setShowPrompt(false)}
            className="w-80"
          >
            <div className="p-4 bg-[#c0c0c0]">
              <p className="text-sm mb-4">
                Welcome to Windows 96! Click the Start button to begin.
              </p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowPrompt(false)}
                  className="px-4 py-1 text-sm button-default bg-[#c0c0c0] 
                           active:button-active"
                >
                  OK
                </button>
              </div>
            </div>
          </WindowFrame>
        </div>
      )}

      {/* Social Links Window */}
      {showSocialLinks && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <SocialLinks onClose={() => setShowSocialLinks(false)} />
        </div>
      )}

      {showWhitepaper && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <Whitepaper onClose={() => setShowWhitepaper(false)} />
        </div>
      )}

      {showTokenomics && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <Tokenomics onClose={() => setShowTokenomics(false)} />
        </div>
      )}

      {showRoadmap && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <Roadmap onClose={() => setShowRoadmap(false)} />
        </div>
      )}

      {showComputer && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <WindowFrame
            title="My Computer"
            Icon={AlertCircle}
            onClose={() => setShowComputer(false)}
            className="w-96"
          >
            <div className="p-4 bg-[#c0c0c0]">
              <p className="text-sm mb-4">WE ARE JUST BETTER</p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowComputer(false)}
                  className="px-4 py-1 text-sm button-default bg-[#c0c0c0] 
                           active:button-active"
                >
                  Close
                </button>
              </div>
            </div>
          </WindowFrame>
        </div>
      )}

      {/* Start Menu */}
      {showStartMenu && (
        <div className="absolute bottom-10 left-0 w-64 bg-[#c0c0c0] window-border">
          <div className="p-2 border-b border-[#808080]">
            <div className="flex items-center gap-2">
              <img
                src="/assets/logo.webp"
                width={24}
                height={24}
                alt="Windows 96 Logo"
              />
              <span className="text-sm font-bold">$START</span>
            </div>
          </div>
          <div className="p-1">
            {[
              {
                id: "computer",
                label: "My Computer",
                Icon: "/assets/computer.png",
              },
              {
                id: "whitepaper",
                label: "Whitepaper",
                Icon: "/assets/whitepaper.png",
              },
              {
                id: "tokenomics",
                label: "Tokenomics",
                Icon: "/assets/tokenomics.png",
              },
              { id: "roadmap", label: "Roadmap", Icon: "/assets/mail.png" },
              { id: "socials", label: "Socials", Icon: "/assets/explorer.png" },
            ].map((item, index) => (
              <div
                key={index}
                id={item.id}
                className="px-4 py-1 text-sm flex items-center gap-2 
                    hover:bg-[#000080] hover:text-white cursor-pointer"
                onClick={() => handleIconClick(item.id)}
              >
                <img src={item.Icon} alt={item.label} width={16} height={16} />
                <span>{item.label}</span>
              </div>
            ))}
            <div className="my-1 border-t border-[#808080] border-b border-b-white" />
            <div
              className="px-4 py-1 text-sm flex items-center gap-2 
                    hover:bg-[#000080] hover:text-white cursor-pointer"
              onClick={() => window.close()}
            >
              <img
                src="/assets/power-off.png"
                alt="Power Off"
                width={16}
                height={16}
              />
              <span>Shut Down...</span>
            </div>
          </div>
        </div>
      )}

      <Taskbar
        onStartClick={() => setShowStartMenu(!showStartMenu)}
        showStartMenu={showStartMenu}
      />
    </div>
  );
}

export default App;
