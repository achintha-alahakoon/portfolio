import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';
import { SectionWrapper } from '../components/SectionWrapper';

const experiences = [
{
  title: 'Application Support Engineer Intern',
  company: 'Fintechnology Asia Pacific Lanka (Pvt) Ltd (FINAP)',
  description:
  'Supporting enterprise applications by monitoring system performance, troubleshooting production issues, and ensuring data accuracy using SQL and API analysis. Collaborating with teams to maintain reliable system operations.'
},
{
  title: 'Software Engineer Intern',
  company: 'SLT Mobitel',
  description:
  'Developed full-stack applications using React and Spring Boot, built REST APIs, and worked with databases to support enterprise-level solutions.'
},
{
  title: 'Production Supervisor',
  company: 'Royal Ceramics Lanka PLC',
  description:
  'Managed production operations, optimized workflows, and ensured quality control in a fast-paced manufacturing environment.'
}];

export function Experience() {

  return (
    <SectionWrapper
      id="experience"
      className="bg-gradient-to-b from-transparent to-slate-900/20">

      <div className="max-w-4xl mx-auto">
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
          
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) =>
            <motion.div
              key={exp.title}
              className="relative"
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2
              }}>
              
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-900 hidden md:block" />

                <div className="md:ml-20 glass glass-hover rounded-3xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                      <BriefcaseIcon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-100 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>);

}