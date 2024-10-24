import { Globe } from "lucide-react";
import { WindowFrame } from "./WindowFrame";

interface SocialLinksProps {
  onClose: () => void;
}

const socialLinks = [
  {
    id: "telegram",
    icon: "/assets/telegram.png",
    label: "Telegram",
    url: "https://t.me",
  },
  {
    id: "twitter",
    icon: "/assets/twitter.png",
    label: "Twitter",
    url: "https://twitter.com",
  },
];

export function SocialLinks({ onClose }: SocialLinksProps) {
  return (
    <WindowFrame
      title="Socials"
      Icon={Globe}
      onClose={onClose}
      className="w-64"
    >
      <div className="grid grid-cols-2 gap-4 p-4">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group cursor-pointer"
          >
            <div
              className="w-12 h-12 flex items-center justify-center 
                          bg-[#c0c0c0] hover:border-2 border-[#dfdfdf]
                          group-hover:border-dotted"
            >
              <img src={link.icon} alt={link.label} width={24} height={24} />
            </div>
            <span className="mt-1 text-xs">{link.label}</span>
          </a>
        ))}
      </div>
    </WindowFrame>
  );
}
