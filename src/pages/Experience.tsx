// import { motion } from 'framer-motion';
// import { BriefcaseIcon } from 'lucide-react';
// import { SectionWrapper } from '../components/SectionWrapper';

// const experiences = [
// {
//   title: 'Application Support Engineer Intern',
//   company: 'Fintechnology Asia Pacific Lanka (Pvt) Ltd (FINAP)',
//   description:
//   'Supporting enterprise applications by monitoring system performance, troubleshooting production issues, and ensuring data accuracy using SQL and API analysis. Collaborating with teams to maintain reliable system operations.'
// },
// {
//   title: 'Software Engineer Intern',
//   company: 'SLT Mobitel',
//   description:
//   'Developed full-stack applications using React and Spring Boot, built REST APIs, and worked with databases to support enterprise-level solutions.'
// },
// {
//   title: 'Production Supervisor',
//   company: 'Royal Ceramics Lanka PLC',
//   description:
//   'Managed production operations, optimized workflows, and ensured quality control in a fast-paced manufacturing environment.'
// }];

// export function Experience() {

//   return (
//     <SectionWrapper
//       id="experience"
//       className="bg-gradient-to-b from-transparent to-slate-900/20">

//       <div className="max-w-4xl mx-auto">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
//           initial={{
//             opacity: 0,
//             y: 20
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0
//           }}
//           viewport={{
//             once: true
//           }}
//           transition={{
//             duration: 0.6
//           }}>
          
//           Experience
//         </motion.h2>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 hidden md:block" />

//           <div className="space-y-12">
//             {experiences.map((exp, index) =>
//             <motion.div
//               key={exp.title}
//               className="relative"
//               initial={{
//                 opacity: 0,
//                 x: -30
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0
//               }}
//               viewport={{
//                 once: true
//               }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.2
//               }}>
              
//                 {/* Timeline dot */}
//                 <div className="absolute left-6 top-6 w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-900 hidden md:block" />

//                 <div className="md:ml-20 glass glass-hover rounded-3xl p-8">
//                   <div className="flex items-start gap-4 mb-4">
//                     <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
//                       <BriefcaseIcon className="w-6 h-6 text-cyan-400" />
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-semibold text-slate-100 mb-1">
//                         {exp.title}
//                       </h3>
//                       <p className="text-cyan-400 font-medium">{exp.company}</p>
//                     </div>
//                   </div>
//                   <p className="text-slate-400 leading-relaxed">
//                     {exp.description}
//                   </p>
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>);

// }




import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';
import { SectionWrapper } from '../components/SectionWrapper';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Application Support Engineer Intern',
    company: 'Fintechnology Asia Pacific Lanka (Pvt) Ltd (FINAP)',
    description:
      'Supporting enterprise applications by monitoring system performance, troubleshooting production issues, and ensuring data accuracy using SQL and API analysis. Collaborating with teams to maintain reliable system operations.',
    number: '01',
    accent: 'from-cyan-400 to-sky-500',
    glow: 'rgba(34,211,238,0.12)',
    border: 'rgba(34,211,238,0.25)',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    iconBorder: 'border-cyan-500/20',
    dotColor: 'bg-cyan-400',
    dotGlow: 'shadow-cyan-400/60',
    tags: ['SQL', 'API Analysis', 'System Monitoring'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'SLT Mobitel',
    description:
      'Developed full-stack applications using React and Spring Boot, built REST APIs, and worked with databases to support enterprise-level solutions.',
    number: '02',
    accent: 'from-violet-400 to-purple-500',
    glow: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.25)',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    iconBorder: 'border-violet-500/20',
    dotColor: 'bg-violet-400',
    dotGlow: 'shadow-violet-400/60',
    tags: ['React', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Production Supervisor',
    company: 'Royal Ceramics Lanka PLC',
    description:
      'Managed production operations, optimized workflows, and ensured quality control in a fast-paced manufacturing environment.',
    number: '03',
    accent: 'from-emerald-400 to-teal-500',
    glow: 'rgba(52,211,153,0.12)',
    border: 'rgba(52,211,153,0.25)',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    iconBorder: 'border-emerald-500/20',
    dotColor: 'bg-emerald-400',
    dotGlow: 'shadow-emerald-400/60',
    tags: ['Operations', 'Quality Control', 'Leadership'],
  },
];

function TiltCard({ children, glow, border }: { children: React.ReactNode; glow: string; border: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });
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
    x.set(0); y.set(0); shadowOpacity.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 900 }}
      className="relative group"
    >
      <motion.div className="absolute -inset-2 rounded-3xl blur-xl pointer-events-none" style={{ background: glow, opacity: shadowOpacity }} />
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.08) 0%, transparent 60%)` }}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500"
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

function AnimatedTimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <div ref={ref} className="absolute left-8 top-0 bottom-0 hidden md:block">
      {/* Track */}
      <div className="absolute inset-0 w-px bg-slate-800 left-0" />
      {/* Animated fill */}
      <motion.div
        className="absolute top-0 left-0 w-px bg-gradient-to-b from-cyan-400 via-violet-400 to-emerald-400 origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
}

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-gradient-to-b from-transparent to-slate-900/20">
      <div className="max-w-4xl mx-auto relative">

        {/* ── HEADING ── */}
        <div className="text-center mb-20 relative z-10">
          <motion.p
            className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4 font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Career Journey
          </motion.p>
          <RevealMask>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white">
              Experi
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                ence
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

        {/* ── TIMELINE ── */}
        <div className="relative">
          <AnimatedTimelineLine />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="relative"
                initial={{ opacity: 0, x: -40, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 top-8 hidden md:flex items-center justify-center z-10">
                  {/* Pulse rings */}
                  <motion.div
                    className={`absolute w-8 h-8 rounded-full ${exp.dotColor} opacity-20`}
                    animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: index * 0.6 }}
                  />
                  <motion.div
                    className={`absolute w-5 h-5 rounded-full ${exp.dotColor} opacity-30`}
                    animate={{ scale: [1, 1.7], opacity: [0.4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: index * 0.6 + 0.3 }}
                  />
                  {/* Core dot */}
                  <div className={`w-3.5 h-3.5 rounded-full ${exp.dotColor} shadow-lg ${exp.dotGlow} border-2 border-slate-900`} />
                </div>

                {/* Card */}
                <div className="md:ml-20">
                  <TiltCard glow={exp.glow} border={exp.border}>
                    <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-sm p-7 md:p-9 overflow-hidden">

                      {/* Faded watermark number */}
                      <span className={`absolute -top-3 -right-1 text-[7rem] font-black leading-none pointer-events-none select-none bg-gradient-to-b ${exp.accent} bg-clip-text text-transparent opacity-[0.06]`}>
                        {exp.number}
                      </span>

                      {/* Accent bar */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b ${exp.accent}`} />

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                        <div className={`p-3 ${exp.iconBg} rounded-xl border ${exp.iconBorder} self-start relative flex-shrink-0`}>
                          <motion.div
                            className={`absolute inset-0 rounded-xl border ${exp.iconBorder}`}
                            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: index * 0.5 }}
                          />
                          <BriefcaseIcon className={`w-5 h-5 ${exp.iconColor}`} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3 flex-wrap">
                            <div>
                              <h3 className="text-xl font-bold text-slate-100 leading-tight mb-1">
                                {exp.title}
                              </h3>
                              <p className={`text-sm font-semibold bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent`}>
                                {exp.company}
                              </p>
                            </div>
                            <span className={`text-xs font-bold bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent uppercase tracking-widest mt-1`}>
                              {exp.number}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Accent line */}
                      <motion.div
                        className={`h-px bg-gradient-to-r ${exp.accent} mb-5 rounded-full`}
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: '3rem', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      />

                      <p className="text-slate-400 leading-relaxed text-[0.95rem] mb-5">
                        {exp.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <motion.span
                            key={tag}
                            className="px-3 py-1 text-xs font-semibold rounded-full border border-slate-700/60 bg-slate-800/60 text-slate-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.06 + 0.4 }}
                            whileHover={{ scale: 1.08 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM DIVIDER ── */}
        <div className="relative z-10 mt-20 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
      </div>
    </SectionWrapper>
  );
}