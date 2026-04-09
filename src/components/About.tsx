import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
export function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
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
          
          About Me
        </motion.h2>

        <motion.div
          className="glass glass-hover rounded-3xl p-8 md:p-12 space-y-6"
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
            delay: 0.2
          }}>
          
          <p className="text-lg text-slate-300 leading-relaxed">
            I am an IT graduate currently working as an Application Support
            Engineer at Fintechnology Asia Pacific Lanka (Pvt) Ltd (FINAP), with a strong foundation in software systems, database
            management, and troubleshooting. I enjoy solving real-world problems
            by analyzing system behavior, identifying issues, and ensuring
            applications run smoothly.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            In addition to support, I have experience in full-stack development
            using technologies such as Java, Spring Boot, C#, React, Next.js, and modern
            JavaScript frameworks. I have also worked with REST APIs, cloud
            deployments, and database systems.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            My interest in Artificial Intelligence led me to complete a research
            project focused on fraud detection using machine learning
            techniques. I enjoy combining analytical thinking with engineering
            to build efficient and intelligent systems.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>);

}