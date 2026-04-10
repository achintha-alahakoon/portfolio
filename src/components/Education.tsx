import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon, AwardIcon } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const educationTabs = [
  {
    id: 'degrees',
    label: 'Degrees & Education',
    icon: GraduationCapIcon,
    count: 2
  },
  {
    id: 'certifications',
    label: 'Certifications',
    icon: AwardIcon,
    count: 2
  }
];

const degreesData = [
  {
    title: 'B.Sc. (Hons) in Information Technology',
    institution: 'University of Kelaniya',
    gpa: '3.34',
    research: 'AI-Driven Fraud Detection in the Market Research Surveys: Identifying Fake Submissions Using Behavioral and Data Patterns'
  },
  {
    title: 'G.C.E. Advanced Level',
    institution: 'Eheliyagoda Central College',
    stream: 'Maths Stream',
    result: 'Successfully completed G.C.E. Advanced Level in the Mathematics stream with results of 2 B passes and 1 C pass in Combined Mathematics, Physics, and Chemistry',
    research: null
  }
];

const certificationsData = [
  {
    title: 'Certificate of Introduction to Generative AI',
    institution: 'Commonwealth AI Academy',
    type: 'AI & Machine Learning'
  },
  {
    title: 'Certificate of Python and Data Science',
    institution: 'PyData Sri Lanka, in collaboration with the Department of Statistics, University of Colombo',
    type: 'Programming & Data Science'
  }
];

export function Education() {
  const [activeTab, setActiveTab] = useState('degrees');
  return (
    <SectionWrapper
      id="education"
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
          
          Education
        </motion.h2>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
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
            duration: 0.6,
            delay: 0.2
          }}>
          
          {educationTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 ${isActive ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'}`}>
                
                <Icon size={16} />
                <span className="font-medium text-sm">{tab.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                  
                  {tab.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Degrees & Education Content */}
        {activeTab === 'degrees' && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}>
            
            {degreesData.map((degree, index) => (
              <motion.div
                key={degree.title}
                className="glass glass-hover rounded-3xl p-8 md:p-12 mb-10"
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
                  delay: 0.2 + index * 0.2
                }}>
                
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                    <GraduationCapIcon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-2">
                      {degree.title}
                    </h3>
                    <p className="text-cyan-400 font-medium text-lg mb-2">
                      {degree.institution}
                    </p>
                    {degree.gpa && (
                      <p className="text-slate-400">GPA: {degree.gpa}</p>
                    )}
                    {degree.stream && (
                      <p className="text-slate-400">Stream: {degree.stream}</p>
                    )}
                    {degree.result && (
                      <p className="text-slate-400 mt-4">{degree.result}</p>
                    )}
                  </div>
                </div>

                {degree.research && (
                  <div className="border-t border-slate-700/50 pt-6 mt-6">
                    <h4 className="text-xl font-semibold text-slate-200 mb-3">
                      Final Year Research
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      {degree.research}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Certifications Content */}
        {activeTab === 'certifications' && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}>
            
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="glass glass-hover rounded-3xl p-8 md:p-12 mb-10"
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
                  delay: 0.2 + index * 0.2
                }}>
                
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                    <AwardIcon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-400 font-medium text-lg mb-2">
                      {cert.institution}
                    </p>
                    <p className="text-slate-400">{cert.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </SectionWrapper>);

}