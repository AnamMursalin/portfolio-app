"use client";

import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Anam Fatima</h3>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Computer Science Student · Software Engineering · AI/ML · Web Development
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Quick Links</h4>
            <ul className="space-y-3">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    onClick={(e) => scrollToSection(e, link)}
                    className="text-slate-400 hover:text-white capitalize transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Connect</h4>
            <div className="space-y-4">
              <a 
                href="https://github.com/AnamMursalin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                  <GitHubIcon className="w-4 h-4" />
                </div>
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/anam-fatima-8032772b1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                  <LinkedInIcon className="w-4 h-4" />
                </div>
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:anam985fatima@gmail.com" 
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© 2026 Anam Fatima. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
