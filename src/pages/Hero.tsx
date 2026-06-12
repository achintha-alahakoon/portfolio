import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ThreeBackground } from '../components/ThreeBackground';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon, GraduationCapIcon } from 'lucide-react';

const titles = ['Software Engineer', 'Application Support Engineer', 'AI Enthusiast'];

const socials = [
  { icon: GithubIcon, href: 'https://github.com/achintha-alahakoon', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/achintha-alahakoon-153621243', label: 'LinkedIn' },
  { icon: MailIcon, href: 'mailto:achinthaalahakoon68@gmail.com', label: 'Email' },
];

function RevealMask({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function ProfileImage() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 25 });

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 800 }}
      className="relative flex-shrink-0"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Spinning conic border */}
      <motion.div
        className="absolute -inset-1.5 rounded-full"
        style={{ background: 'conic-gradient(from 0deg, #22d3ee, #818cf8, #a855f7, #22d3ee)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Glow pulse */}
      <motion.div
        className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-500/30 via-violet-500/20 to-purple-600/30 blur-2xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Image */}
      <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-88 lg:h-88 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl z-10">
        <img src="/pp.png" alt="Achintha Alahakoon" className="w-full h-full object-cover object-top" />
        {/* Overlay sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-violet-500/10" />
      </div>

      {/* Floating badge — role */}
      <motion.div
        className="absolute -top-2 -right-6 z-20 px-3 py-1.5 rounded-full bg-slate-800/90 border border-cyan-500/30 backdrop-blur-md shadow-xl text-xs font-semibold text-cyan-400"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <span className="inline-flex items-center gap-1 text-cyan-400">
          <GraduationCapIcon className="w-4 h-4 text-emerald-400" />IT Graduate
        </span>
        
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) setTimeout(() => setIsDeleting(true), 1500);
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 45 : 95);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex]);

  const handleScroll = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeBackground />

      {/* Ambient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

        {/* ── TEXT CONTENT ── */}
        <div className="flex-1 text-center lg:text-left">

          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-8 text-sm text-cyan-400 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Welcome to my portfolio
          </motion.div>

          {/* Name */}
          <div className="mb-4">
            <RevealMask delay={0.3}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
                Hi, I'm
              </h1>
            </RevealMask>
            <RevealMask delay={0.45}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Achintha Alahakoon
              </h1>
            </RevealMask>
          </div>

          {/* Animated underline */}
          <motion.div
            className="mx-auto lg:mx-0 mb-8 h-px bg-gradient-to-r from-cyan-400 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '260px', opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9, ease: 'easeOut' }}
          />

          {/* Typewriter */}
          <motion.div
            className="flex items-center justify-center lg:justify-start gap-2 mb-8 h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="text-cyan-400 font-mono text-2xl">&lt;</span>
            <span className="text-xl md:text-2xl font-mono text-slate-200 min-w-0">
              {currentText}
            </span>
            <motion.span
              className="inline-block w-0.5 h-7 bg-cyan-400 rounded-full"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            <span className="text-cyan-400 font-mono text-2xl">/&gt;</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            I build and support reliable, scalable systems while exploring
            intelligent solutions through AI and modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <motion.button
              onClick={() => handleScroll('#projects')}
              className="relative px-8 py-3.5 rounded-full font-semibold text-white overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full" />
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative flex items-center gap-2">
                View My Work
                <ArrowDownIcon size={16} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.button>

            <motion.button
              onClick={() => handleScroll('#contact')}
              className="relative px-8 py-3.5 rounded-full font-semibold text-slate-200 border border-slate-600/60 bg-slate-800/50 backdrop-blur-sm hover:border-slate-500 hover:text-white transition-all duration-300 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              {/* Shimmer */}
              <motion.span
                className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative">Contact Me</span>
            </motion.button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="flex items-center gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <span className="text-xs text-slate-500 uppercase tracking-widest">Find me on</span>
            <div className="h-px w-8 bg-slate-700" />
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full border border-slate-700/60 bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── PROFILE IMAGE ── */}
        <ProfileImage />
      </div>
    </section>
  );
}