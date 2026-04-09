import React from 'react';
import { LinkedinIcon, GithubIcon, MailIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function Footer() {
  const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string) =>
  {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <footer className="bg-[#05050a] border-t border-slate-800/50 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-1">
              Achintha Alahakoon
              <span className="text-cyan-500 text-3xl leading-none">.</span>
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Building intelligent digital experiences with an emphasis on usability,
              performance, and meaningful impact.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider mb-6 uppercase">
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScroll(e, '#home')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleScroll(e, '#projects')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  
                  About
                </a>
              </li>
              <li>
                <a
                  href="#tech-stack"
                  onClick={(e) => handleScroll(e, '#tech-stack')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#tech-stack"
                  onClick={(e) => handleScroll(e, '#tech-stack')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#tech-stack"
                  onClick={(e) => handleScroll(e, '#tech-stack')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider mb-6 uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:achinthaalahakoon68@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  
                  achinthaalahakoon68@gmail.com
                </a>
              </li>
              <li className="text-slate-400 text-sm">Sri Lanka</li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider mb-6 uppercase">
              Social Media
            </h4>
            <p className="text-slate-400 text-sm mb-6">
              Follow me for the latest updates on my projects and process.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.linkedin.com/in/achintha-alahakoon-153621243"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all bg-slate-900/50"
                whileHover={{
                  scale: 1.1
                }}
                whileTap={{
                  scale: 0.95
                }}
                aria-label="LinkedIn">
                
                <LinkedinIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://github.com/achintha-alahakoon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all bg-slate-900/50"
                whileHover={{
                  scale: 1.1
                }}
                whileTap={{
                  scale: 0.95
                }}
                aria-label="GitHub">
                
                <GithubIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="mailto:achinthaalahakoon68@gmail.com"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all bg-slate-900/50"
                whileHover={{
                  scale: 1.1
                }}
                whileTap={{
                  scale: 0.95
                }}
                aria-label="Email">
                
                <MailIcon className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Achintha Alahakoon. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>);

}