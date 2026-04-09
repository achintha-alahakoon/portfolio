import React from 'react';
import { motion } from 'framer-motion';
import { MonitorIcon, ServerIcon, CodeIcon, BrainIcon } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
const services = [
{
  icon: CodeIcon,
  title: 'Full-Stack Development',
  description:
  'Developing responsive and user-friendly web applications using Next.js, React and modern frontend tools.'
},
{
  icon: MonitorIcon,
  title: 'Application Support',
  description:
  'Monitoring, troubleshooting, and maintaining enterprise applications to ensure high performance and reliability.'
},
{
  icon: ServerIcon,
  title: 'Backend Development',
  description:
  'Building scalable backend systems and REST APIs using C#, Spring Boot and Node.js.'
},
{
  icon: BrainIcon,
  title: 'AI & Data Solutions',
  description:
  'Applying machine learning techniques to analyze data and build intelligent solutions.'
}];

export function Services() {
  return (
    <SectionWrapper
      id="services"
      className="bg-gradient-to-b from-transparent to-slate-900/20">
      
      <div className="max-w-7xl mx-auto">
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
          
          What I Do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="glass glass-hover rounded-3xl p-8"
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}>
                
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-slate-100">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </SectionWrapper>);

}