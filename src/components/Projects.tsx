import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GithubIcon,
  LayoutGridIcon,
  GlobeIcon,
  BrainCircuitIcon,
  ChevronLeftIcon,
  ChevronRightIcon } from
'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import gpacalculatorImage from '../assets/images/gpacalculator.jpg';


const projects = [
{
  title: 'AI Fraud Detection System',
  description:
  'Developed a machine learning-based system to detect fraudulent survey responses using behavioral and data patterns.',
  tags: ['Machine Learning', 'Python', 'Data Analysis'],
  category: 'AI & Data',
  badge: 'MACHINE LEARNING',
  image:
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000',
  githubLink: 'https://github.com/achintha-alahakoon/Fraud-Detection.git'
},
{
  title: 'Product Information System',
  description:
  'Built a full-stack system using React and Spring Boot with role-based access control and cloud deployment.',
  tags: ['React', 'Spring Boot', 'Cloud'],
  category: 'Web Apps',
  badge: 'FULL-STACK WEB APP',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
  githubLink: 'https://bitbucket.org/sltmobiteljava7/product-info/src/main/'
},
{
  title: 'Incident Management System',
  description:
  'Created a web application to manage and track incidents with real-time notifications and analytics.',
  tags: ['Web Development', 'Real-Time', 'Analytics'],
  category: 'Web Apps',
  badge: 'WEB APPLICATION',
  image:
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000',
  githubLink: 'https://github.com/achintha-alahakoon/Incident-Management-System.git'
},
{
  title: 'Student Management System',
  description:
  'Developed a web-based platform to manage student records and academic data efficiently.',
  tags: ['Full-Stack', 'Database', 'Web Development'],
  category: 'Web Apps',
  badge: 'MANAGEMENT PLATFORM',
  image:
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000',
  githubLink: 'https://github.com/achintha-alahakoon/student-and-class-management-system.git'
},
{
  title: "Interns Management System",
  description:
  "Designed a web application to manage intern data, including profiles, applications, and performance tracking.",
  tags: ['Web Development', 'Database', 'Full-Stack'],
  category: 'Web Apps',
  badge: 'MANAGEMENT SYSTEM',
  image:
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000',
  githubLink: 'https://github.com/achintha-alahakoon/slt-internships-frontend.git'
},
{
  title: 'Data Annotation Project - Robotic Arm Automation',
  description:
  "Contributed to data annotation for robotic arm waste sorting, ensuring high-quality labeled datasets to improve model accuracy and reliability overall.",
  tags: ['Data Annotation', 'Robotics', 'Machine Learning'],
  category: 'AI & Data',
  badge: 'DATA ANNOTATION',
  image:
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
  githubLink: 'https://github.com/yourusername/data-annotation-project'
},
{
  title: 'GPA Calculator',
  description:
  'Created a GPA calculator using JavaScript and HTML, allowing users to easily calculate their academic performance.',
  tags: ['JavaScript', 'HTML', 'CSS'],
  category: 'Web Apps',
  badge: 'WEB APPLICATION',
  image: gpacalculatorImage,
  githubLink: 'https://github.com/achintha-alahakoon/GPA-Calculator.git'
}];

const tabs = [
{
  id: 'All',
  label: 'All Projects',
  icon: LayoutGridIcon,
  count: projects.length
},
{
  id: 'Web Apps',
  label: 'Web Apps',
  icon: GlobeIcon,
  count: projects.filter((p) => p.category === 'Web Apps').length
},
{
  id: 'AI & Data',
  label: 'AI & Data',
  icon: BrainCircuitIcon,
  count: projects.filter((p) => p.category === 'AI & Data').length
}];

export function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;

  const filteredProjects = projects.filter(
    (project) => activeTab === 'All' || project.category === activeTab
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const visibleProjects = filteredProjects.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= filteredProjects.length ? 0 : prev + itemsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(0, filteredProjects.length - itemsPerPage)
        : prev - itemsPerPage
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };
  return (
    <SectionWrapper
      id="projects"
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
          
          Projects
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
          
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentIndex(0);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 ${isActive ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'}`}>
                
                <Icon size={16} />
                <span className="font-medium text-sm">{tab.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                  
                  {tab.count}
                </span>
              </button>);

          })}
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          className="relative"
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
            delay: 0.3
          }}>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Projects Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              key={currentIndex}>
              
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, idx) =>
                <motion.div
                  key={project.title}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    x: -20
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    x: 20
                  }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1
                  }}
                  className="bg-[#0a0a14] rounded-2xl overflow-hidden border border-slate-800/60 flex flex-col group hover:border-cyan-500/30 transition-colors">
                  
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] to-transparent z-10 opacity-80" />
                      <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-full text-[10px] font-bold text-cyan-400 border border-cyan-500/30 tracking-wider">
                        {project.badge}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col relative z-20 -mt-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) =>
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/50 rounded-full text-xs text-slate-300">
                        
                            {tag}
                          </span>
                      )}
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-slate-100">
                        {project.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-800 hover:border-slate-700 text-sm font-medium">
                      
                        <GithubIcon size={16} /> View on GitHub
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 p-3 rounded-full border border-slate-700/60 bg-slate-900/40 hover:bg-slate-800/80 text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:border-cyan-500/50 z-20"
              aria-label="Previous projects">
              
              <ChevronLeftIcon size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 p-3 rounded-full border border-slate-700/60 bg-slate-900/40 hover:bg-slate-800/80 text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:border-cyan-500/50 z-20"
              aria-label="Next projects">
              
              <ChevronRightIcon size={24} />
            </button>
          </div>

          {totalPages > 1 && (
            <motion.div
              className="flex justify-center gap-2 mt-12"
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
                delay: 0.5
              }}>
              
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <motion.button
                  key={pageIndex}
                  onClick={() => goToPage(pageIndex)}
                  className={`transition-all duration-300 rounded-full ${
                    Math.floor(currentIndex / itemsPerPage) === pageIndex
                      ? 'bg-cyan-500 h-3 w-8'
                      : 'bg-slate-700 h-2.5 w-2.5 hover:bg-slate-600'
                  }`}
                  whileHover={{
                    scale: 1.2
                  }}
                  aria-label={`Go to page ${pageIndex + 1}`}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </SectionWrapper>);

}