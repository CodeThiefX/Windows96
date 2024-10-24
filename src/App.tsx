import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { DesktopIcon } from "./components/DesktopIcon";
import { WindowFrame } from "./components/WindowFrame";
import { Taskbar } from "./components/Taskbar";
import { Preloader } from "./components/Preloader";
import { SocialLinks } from "./components/SocialLinks";

const desktopIcons = [
  { id: "computer", icon: "/assets/computer.png", label: "My Computer" },
  { id: "bin", icon: "/assets/bin.png", label: "Recycle Bin" },
  { id: "documents", icon: "/assets/file.png", label: "My Documents" },
  { id: "internet", icon: "/assets/explorer.png", label: "Socials" },
  { id: "inbox", icon: "/assets/mail.png", label: "Inbox" },
];

function App() {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const handleIconClick = (iconId: string) => {
    setSelectedIcon(iconId === selectedIcon ? null : iconId);
    if (iconId === "internet") {
      setShowSocialLinks(true);
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
              <span className="text-sm font-bold">Windows 96</span>
            </div>
          </div>
          <div className="p-1">
            {[
              { label: "Programs", Icon: "/assets/program.png" },
              { label: "Documents", Icon: "/assets/file.png" },
              { label: "Settings", Icon: "/assets/settings.png" },
              { label: "Find", Icon: "/assets/find.png" },
              { label: "Help", Icon: "/assets/help.png" },
              { label: "Run...", Icon: "/assets/run.png" },
            ].map((item, index) => (
              <div
                key={index}
                className="px-4 py-1 text-sm flex items-center gap-2 
                            hover:bg-[#000080] hover:text-white cursor-pointer"
              >
                <img src={item.Icon} alt={item.label} width={16} height={16} />
                <span>{item.label}</span>
              </div>
            ))}
            <div className="my-1 border-t border-[#808080] border-b border-b-white" />
            <div
              className="px-4 py-1 text-sm flex items-center gap-2 
                          hover:bg-[#000080] hover:text-white cursor-pointer"
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
