import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { techCategories, allTech } from './techStackData';

export function TechStack() {
  return (
    <SectionWrapper id="tech-stack">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}>
          
          Tech Stack
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                className={`bg-[#0a0a14] border border-slate-800/60 rounded-3xl p-6 hover:border-cyan-500/30 transition-colors ${category.className}`}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((item) =>
                  <div
                    key={item.name}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-slate-800 rounded-full text-sm text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default">
                    
                      {item.isImage ? (
                        <img src={item.icon} alt={item.name} className="w-4 h-4" />
                      ) : (
                        <span className="text-base opacity-80">{item.icon}</span>
                      )}
                      {item.name}
                    </div>
                  )}
                </div>
              </motion.div>);

          })}
        </div>

        {/* Infinite Marquee */}
        <motion.div
          className="relative flex overflow-x-hidden group py-4"
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}>
          
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent z-10" />

          <div className="animate-marquee flex whitespace-nowrap gap-4 items-center">
            {/* Double the items to create a seamless loop */}
            {[...allTech, ...allTech, ...allTech].map((item, i) =>
            <div
              key={`${item.name}-${i}`}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900/50 border border-slate-800/50 rounded-2xl text-slate-400 font-medium">
              
                {item.isImage ? (
                  <img src={item.icon} alt={item.name} className="w-5 h-5" />
                ) : (
                  <span className="text-xl">{item.icon}</span>
                )}
                {item.name}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>);

}