import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ThreeBackground } from './ThreeBackground';
const titles = [
'Software Engineer',
'Application Support Engineer',
'AI Enthusiast'];

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = titles[currentTitleIndex];
        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          if (currentText === '') {
            setIsDeleting(false);
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex]);
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <ThreeBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.4
            }}>
            
            Hi, I'm Achintha Alahakoon
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-8 font-mono h-10 flex items-center justify-center lg:justify-start"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.6
            }}>
              <span className="text-cyan-400 mr-2 animate-pulse">&lt;</span>
            
            {currentText}
            <span className="text-cyan-400 ml-2 animate-pulse">/&gt;</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.8
            }}>
            
            I build and support reliable, scalable systems while exploring
            intelligent solutions through AI and modern web technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 1
            }}>
            
            <motion.button
              onClick={() => handleScroll('#projects')}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/50 transition-all"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)'
              }}
              whileTap={{
                scale: 0.95
              }}>
              
              View My Work
            </motion.button>

            <motion.button
              onClick={() => handleScroll('#contact')}
              className="px-8 py-4 glass glass-hover rounded-full font-semibold text-lg border-2 border-cyan-500/30"
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}>
              
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.3
          }}>
          
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-30 blur-xl animate-pulse" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
              <img
                src="/pp.png"
                alt="Achintha Alahakoon"
                className="w-full h-full object-cover object-top" />
              
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse'
        }}>
        
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>);

}