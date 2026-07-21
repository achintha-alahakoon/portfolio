import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { useRef, useState, useEffect } from "react";

const paragraphs = [
  {
    label: "01 - About",
    text: "I am an IT graduate currently working as a Software Engineer Intern at Fintechnology Asia Pacific Lanka (Pvt) Ltd (FINAP). My experience includes developing and maintaining cloud-based enterprise applications while contributing to scalable software solutions used in real-world business environments.",
    accent: "from-cyan-400 to-sky-500",
    tag: "Software Engineering",
  },
  {
    label: "02 - Expertise",
    text: "I specialize in full-stack development using React, ASP.NET Core, C#, Spring Boot, SQL Server, and MySQL. I also have experience with REST API development, Microsoft Azure, Azure DevOps, and Agile software delivery.",
    accent: "from-violet-400 to-purple-500",
    tag: "Full-Stack Development",
  },
  {
    label: "03 - Passion",
    text: "Passionate about building scalable, reliable, and cloud-native applications, I enjoy learning modern technologies, solving complex technical challenges, and collaborating with teams to deliver high-quality software products.",
    accent: "from-emerald-400 to-teal-500",
    tag: "Cloud & Innovation",
  },
];

const skills = [
  "React",
  "ASP.NET Core",
  "C#",
  "Java",
  "Spring Boot",
  "SQL Server",
  "Microsoft Azure",
  "Azure DevOps",
  "REST APIs",
  "TypeScript",
];

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={className}
    >
      {/* Glare overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.12) 0%, transparent 65%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

function FloatingOrb({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
      animate={{ y: [0, -30, 0], scale: [1, 1.08, 1] }}
      transition={{
        duration: 7 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function RevealMask({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function CounterStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-white tabular-nums">
        {count}
        <span className="text-cyan-400">{suffix}</span>
      </div>
      <div className="text-xs text-slate-400 mt-1 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <SectionWrapper id="about">
      <div
        ref={containerRef}
        className="relative max-w-5xl mx-auto px-4 overflow-visible"
      >
        {/* Ambient background orbs */}
        <FloatingOrb className="w-96 h-96 bg-cyan-500 -top-32 -left-48" />
        <FloatingOrb className="w-80 h-80 bg-violet-600 top-1/2 -right-40" />
        <FloatingOrb className="w-64 h-64 bg-emerald-500 bottom-0 left-1/3" />

        {/* ── HEADING ── */}
        <div className="text-center mb-20 relative z-10">
          <motion.p
            className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4 font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Who I Am
          </motion.p>

          <RevealMask>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
          </RevealMask>

          {/* Animated underline */}
          <motion.div
            className="mx-auto mt-5 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "200px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* ── STATS ROW ── */}
        <motion.div
          className="relative z-10 grid grid-cols-3 gap-6 mb-16 py-8 px-6 rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CounterStat value={1} suffix="+" label="Years Experience" />
          <CounterStat value={10} suffix="+" label="Technologies" />
          <CounterStat value={1} suffix="+" label="Core Domains" />
        </motion.div>

        {/* ── PARAGRAPH CARDS ── */}
        <div className="relative z-10 space-y-6 mb-16">
          {paragraphs.map((p, i) => (
            <TiltCard
              key={i}
              className="group relative rounded-2xl cursor-default"
            >
              <motion.div
                className="relative rounded-2xl border border-slate-700/60 bg-slate-900/50 backdrop-blur-sm p-7 md:p-9 overflow-hidden"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Gradient accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b ${p.accent}`}
                />

                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="flex-shrink-0 w-36 text-sm text-slate-400">
                    <span
                      className={`text-xs font-bold bg-gradient-to-r ${p.accent} bg-clip-text text-transparent uppercase tracking-widest`}
                    >
                      {p.label}
                    </span>
                    <div
                      className={`mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] px-2.5 py-1 rounded-full border bg-gradient-to-r ${p.accent} text-transparent bg-clip-text border-slate-600`}
                    >
                      {p.tag}
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-base md:text-lg flex-1">
                    {p.text}
                  </p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* ── SKILL PILLS ── */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="text-center text-xs uppercase tracking-[0.3em] text-slate-500 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Core Technologies
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                className="relative px-4 py-2 rounded-full text-sm font-medium text-slate-200 border border-slate-600/60 bg-slate-800/60 backdrop-blur-sm cursor-default select-none overflow-hidden group"
                initial={{ opacity: 0, scale: 0.7, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.1, borderColor: "rgba(34,211,238,0.6)" }}
              >
                {/* Shimmer sweep */}
                <motion.span
                  className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.5 }}
                />
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ── BOTTOM FADE DIVIDER ── */}
        <div className="relative z-10 mt-20 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
      </div>
    </SectionWrapper>
  );
}
