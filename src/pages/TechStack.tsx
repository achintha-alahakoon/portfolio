import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { techCategories, allTech } from "./techStackData";
import { useRef } from "react";

const categoryAccents: Record<
  string,
  {
    accent: string;
    glow: string;
    border: string;
    iconColor: string;
    iconBg: string;
    iconBorder: string;
  }
> = {
  languages: {
    accent: "from-cyan-400 to-sky-500",
    glow: "rgba(34,211,238,0.10)",
    border: "rgba(34,211,238,0.22)",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/20",
  },
  frontend: {
    accent: "from-violet-400 to-purple-500",
    glow: "rgba(167,139,250,0.10)",
    border: "rgba(167,139,250,0.22)",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    iconBorder: "border-violet-500/20",
  },
  backend: {
    accent: "from-emerald-400 to-teal-500",
    glow: "rgba(52,211,153,0.10)",
    border: "rgba(52,211,153,0.22)",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-500/20",
  },
  devops: {
    accent: "from-orange-400 to-amber-500",
    glow: "rgba(251,146,60,0.10)",
    border: "rgba(251,146,60,0.22)",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
    iconBorder: "border-orange-500/20",
  },
  database: {
    accent: "from-rose-400 to-pink-500",
    glow: "rgba(251,113,133,0.10)",
    border: "rgba(251,113,133,0.22)",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    iconBorder: "border-rose-500/20",
  },
};

function TiltCard({
  children,
  glow,
  border,
  className = "",
}: {
  children: React.ReactNode;
  glow: string;
  border: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
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
        transformStyle: "preserve-3d",
        transformPerspective: 900,
      }}
      className={`relative group ${className}`}
    >
      <motion.div
        className="absolute -inset-2 rounded-3xl blur-xl pointer-events-none"
        style={{ background: glow, opacity: shadowOpacity }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.08) 0%, transparent 60%)`,
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{ boxShadow: `inset 0 0 0 1px ${border}` }}
      />
      {children}
    </motion.div>
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

export function TechStack() {
  return (
    <SectionWrapper id="tech-stack">
      <div className="max-w-6xl mx-auto relative">
        {/* ── HEADING ── */}
        <div className="text-center mb-20 relative z-10">
          <motion.p
            className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4 font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tools & Technologies
          </motion.p>
          <RevealMask>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white">
              Tech{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
          </RevealMask>
          <motion.div
            className="mx-auto mt-5 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "200px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mb-16 relative z-10">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            const theme =
              categoryAccents[category.id] ?? categoryAccents.languages;

            return (
              <motion.div
                key={category.id}
                className={category.className}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TiltCard
                  glow={theme.glow}
                  border={theme.border}
                  className="h-full"
                >
                  <div className="relative h-full rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-sm p-6 overflow-hidden">
                    {/* Faded category title watermark */}
                    <span
                      className={`absolute -bottom-3 -right-2 text-[5rem] font-black leading-none pointer-events-none select-none bg-gradient-to-b ${theme.accent} bg-clip-text text-transparent opacity-[0.05]`}
                    >
                      {category.title.split(" ")[0]}
                    </span>

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`relative p-2.5 ${theme.iconBg} rounded-xl border ${theme.iconBorder}`}
                      >
                        <motion.div
                          className={`absolute inset-0 rounded-xl border ${theme.iconBorder}`}
                          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: index * 0.4,
                          }}
                        />
                        <Icon className={`w-5 h-5 ${theme.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-100 leading-tight">
                          {category.title}
                        </h3>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-widest bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}
                        >
                          {category.items.length} tools
                        </span>
                      </div>
                    </div>

                    {/* Accent line */}
                    <motion.div
                      className={`h-px bg-gradient-to-r ${theme.accent} mb-5 rounded-full`}
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: "2.5rem", opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    />

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, i) => (
                        <motion.div
                          key={item.name}
                          className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/70 border border-slate-700/60 rounded-full text-xs text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200 cursor-default group/pill relative overflow-hidden"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.35,
                            delay: index * 0.05 + i * 0.04,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          whileHover={{ scale: 1.08 }}
                        >
                          {/* Shimmer */}
                          <motion.span
                            className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover/pill:opacity-100"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "200%" }}
                            transition={{ duration: 0.45 }}
                          />
                          {item.isImage ? (
                            <img
                              src={item.icon as string}
                              alt={item.name}
                              className="w-3.5 h-3.5 object-contain flex-shrink-0"
                            />
                          ) : (
                            <span className="text-xs font-bold opacity-70 flex-shrink-0">
                              {item.icon}
                            </span>
                          )}
                          <span className="font-medium">{item.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* ── INFINITE MARQUEE ── */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Label */}
          <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-500 mb-6">
            All Technologies
          </p>

          <div className="relative flex overflow-x-hidden group py-2">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

            <div
              className="animate-marquee flex whitespace-nowrap gap-3 items-center group-hover:[animation-play-state:paused]"
              style={{
                animation: "marquee 45s linear infinite",
              }}
            >
              {[...allTech, ...allTech, ...allTech].map((item, i) => (
                <motion.div
                  key={`${item.name}-${i}`}
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/60 border border-slate-700/50 rounded-xl text-slate-400 text-sm font-medium hover:text-white hover:border-slate-500 transition-all duration-200 cursor-default flex-shrink-0"
                  whileHover={{ scale: 1.06, y: -2 }}
                >
                  {item.isImage ? (
                    <img
                      src={item.icon as string}
                      alt={item.name}
                      className="w-4 h-4 object-contain"
                    />
                  ) : (
                    <span className="text-sm font-bold opacity-60">
                      {item.icon}
                    </span>
                  )}
                  {item.name}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── BOTTOM DIVIDER ── */}
        <div className="relative z-10 mt-16 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
      </div>
    </SectionWrapper>
  );
}
