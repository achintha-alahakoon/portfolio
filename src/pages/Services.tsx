import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MonitorIcon, ServerIcon, CodeIcon, DatabaseIcon } from 'lucide-react';
import { SectionWrapper } from '../components/SectionWrapper';
import { useRef } from 'react';

const services = [
  {
    icon: CodeIcon,
    number: '01',
    title: 'Full-Stack Development',
    description:
      'Building scalable and responsive web applications using React, ASP.NET Core, Spring Boot, and modern development practices.',
    accent: 'from-cyan-400 to-sky-500',
    glow: 'rgba(34,211,238,0.15)',
    border: 'rgba(34,211,238,0.25)',
    iconBg: 'bg-cyan-500/10',
    iconBorder: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
    tag: 'Frontend & Backend',
  },
  {
    icon: ServerIcon,
    number: '02',
    title: 'Backend & API Development',
    description:
      'Developing secure REST APIs and backend services using ASP.NET Core, Spring Boot, C#, and Java.',
    accent: 'from-violet-400 to-purple-500',
    glow: 'rgba(167,139,250,0.15)',
    border: 'rgba(167,139,250,0.25)',
    iconBg: 'bg-violet-500/10',
    iconBorder: 'border-violet-500/20',
    iconColor: 'text-violet-400',
    tag: 'APIs & Services',
  },
  {
    icon: MonitorIcon,
    number: '03',
    title: 'Cloud & DevOps',
    description:
      'Deploying, maintaining, and supporting enterprise applications using Microsoft Azure, Azure DevOps, and CI/CD workflows.',
    accent: 'from-emerald-400 to-teal-500',
    glow: 'rgba(52,211,153,0.15)',
    border: 'rgba(52,211,153,0.25)',
    iconBg: 'bg-emerald-500/10',
    iconBorder: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
    tag: 'Azure & CI/CD',
  },
  {
    icon: DatabaseIcon,
    number: '04',
    title: 'Database Solutions',
    description:
      'Designing, optimizing, and managing relational databases with SQL Server and MySQL for enterprise applications.',
    accent: 'from-rose-400 to-pink-500',
    glow: 'rgba(251,113,133,0.15)',
    border: 'rgba(251,113,133,0.25)',
    iconBg: 'bg-rose-500/10',
    iconBorder: 'border-rose-500/20',
    iconColor: 'text-rose-400',
    tag: 'SQL & Data',
  },
];

function TiltCard({
  children,
  glow,
  border,
}: {
  children: React.ReactNode;
  glow: string;
  border: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 300, damping: 30 });
  const glareX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);
  const shadowOpacity = useSpring(0, { stiffness: 300, damping: 30 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    shadowOpacity.set(1);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
    shadowOpacity.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 900,
      }}
      className="relative group h-full"
    >
      {/* Glow shadow */}
      <motion.div
        className="absolute -inset-2 rounded-3xl blur-xl pointer-events-none"
        style={{ background: glow, opacity: shadowOpacity }}
      />

      {/* Glare */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.10) 0%, transparent 60%)`,
        }}
      />

      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${border}` }}
      />

      {children}
    </motion.div>
  );
}

function RevealMask({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '110%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Services() {
  return (
    <SectionWrapper id="services" className="bg-gradient-to-b from-transparent to-slate-900/20">
      <div className="max-w-7xl mx-auto relative">

        {/* ── HEADING ── */}
        <div className="text-center mb-20 relative z-10">
          <motion.p
            className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4 font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Services
          </motion.p>

          <RevealMask>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white">
              What I{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Do
              </span>
            </h2>
          </RevealMask>

          <motion.div
            className="mx-auto mt-5 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '200px', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          />
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <TiltCard glow={service.glow} border={service.border}>
                  <div className="relative h-full rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-sm p-8 overflow-hidden">

                    {/* Large faded number watermark */}
                    <span
                      className={`absolute -top-4 -right-2 text-[7rem] font-black leading-none pointer-events-none select-none bg-gradient-to-b ${service.accent} bg-clip-text text-transparent opacity-[0.06]`}
                    >
                      {service.number}
                    </span>

                    {/* Top row: icon + number label */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 ${service.iconBg} rounded-2xl border ${service.iconBorder} relative`}>
                        {/* Icon pulse ring */}
                        <motion.div
                          className={`absolute inset-0 rounded-2xl border ${service.iconBorder}`}
                          animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: index * 0.5 }}
                        />
                        <Icon className={`w-7 h-7 ${service.iconColor}`} />
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <span className={`text-xs font-bold bg-gradient-to-r ${service.accent} bg-clip-text text-transparent uppercase tracking-widest`}>
                          {service.number}
                        </span>
                        <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-slate-600/60 bg-slate-800/60 ${service.iconColor}`}>
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    {/* Gradient accent line */}
                    <motion.div
                      className={`h-px bg-gradient-to-r ${service.accent} mb-6 rounded-full`}
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: '3rem', opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.12 + 0.3 }}
                    />

                    <h3 className="text-xl font-bold text-slate-100 mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-[0.95rem]">
                      {service.description}
                    </p>

                    {/* Bottom hover reveal arrow */}
                    <motion.div
                      className={`mt-6 flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.accent} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      <span>Learn more</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* ── BOTTOM DIVIDER ── */}
        <div className="relative z-10 mt-20 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
      </div>
    </SectionWrapper>
  );
}