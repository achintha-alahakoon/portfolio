import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
const navLinks = [
{
  name: 'Home',
  href: '#home'
},
{
  name: 'About',
  href: '#about'
},
{
  name: 'Services',
  href: '#services'
},
{
  name: 'Tech Stack',
  href: '#tech-stack'
},
{
  name: 'Experience',
  href: '#experience'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Education',
  href: '#education'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is HTMLElement => el !== null);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const currentSection = sectionElements.reduce((closest, section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - 120);
        return distance < closest.distance
          ? { id: section.id, distance }
          : closest;
      }, { id: sectionElements[0]?.id ?? 'home', distance: Infinity });

      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string) =>
  {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveSection(href.replace('#', ''));
      setIsMobileMenuOpen(false);
    }
  };
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5
      }}>
      
      <div className="max-w-8xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          onClick={(e) => handleNavClick(e, '#home')}
          whileHover={{
            scale: 1.05
          }}>
          
          Achintha Alahakoon
          <span className="text-cyan-500 text-3xl leading-none align-middle ml-1">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <motion.a
                key={link.name}
                href={link.href}
                className={`transition-colors relative group ${isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-cyan-400'}`}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{
                  opacity: 0,
                  y: -20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: index * 0.1
                }}>
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </motion.a>
            );
          })}
        </div>

        {/* Social Icons and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            
            <motion.a
              href="https://www.linkedin.com/in/achintha-alahakoon-153621243"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/achintha-alahakoon"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon size={24} />
            </motion.a>
            <motion.a
              href="mailto:achintha@example.com"
              whileHover={{ scale: 1.1 }}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <MailIcon size={24} />
            </motion.a>
          </div>
          
          <button
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">
            
            {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <motion.div
        className="md:hidden glass mt-4 mx-6 rounded-2xl overflow-hidden"
        initial={{
          opacity: 0,
          height: 0
        }}
        animate={{
          opacity: 1,
          height: 'auto'
        }}
        exit={{
          opacity: 0,
          height: 0
        }}>
        
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-2 ${isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-cyan-400'}`}
                  onClick={(e) => handleNavClick(e, link.href)}>
                  {link.name}
                </a>
              );
            })}
          </div>
        </motion.div>
      }
    </motion.nav>);

}