import React from 'react';
import { MessageCircle, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { WindowFrame } from './WindowFrame';

interface SocialLinksProps {
  onClose: () => void;
}

const socialLinks = [
  {
    id: 'telegram',
    icon: MessageCircle,
    label: 'Telegram',
    url: 'https://t.me/yourusername'
  },
  {
    id: 'github',
    icon: Github,
    label: 'GitHub',
    url: 'https://github.com/yourusername'
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername'
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    url: 'mailto:your@email.com'
  }
];

export function SocialLinks({ onClose }: SocialLinksProps) {
  return (
    <WindowFrame 
      title="My Social Links" 
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
            <div className="w-12 h-12 flex items-center justify-center 
                          bg-[#c0c0c0] border-2 border-[#dfdfdf]
                          group-hover:border-dotted">
              <link.icon className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <span className="mt-1 text-xs">{link.label}</span>
          </a>
        ))}
      </div>
    </WindowFrame>
  );
}