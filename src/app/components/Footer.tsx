import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-neutral-900 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
          <a href="#home" className="text-2xl font-bold tracking-tighter">ALEX.</a>
          <p className="text-neutral-500 text-sm max-w-xs">
            Designing and developing digital products with purpose and passion.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-neutral-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <div className="text-neutral-500 text-sm">
          © {currentYear} Mạnh Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
