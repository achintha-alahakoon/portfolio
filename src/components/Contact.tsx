import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <SectionWrapper id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
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
          
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-center text-slate-400 text-lg mb-12 max-w-2xl mx-auto"
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
            duration: 0.6,
            delay: 0.2
          }}>
          
          I'm always open to discussing new opportunities, collaborations, or
          innovative ideas. Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            className="glass glass-hover rounded-3xl p-8 space-y-6"
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
              delay: 0.3
            }}>
            
            <h3 className="text-2xl font-semibold mb-6 text-slate-100">
              Contact Details
            </h3>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <MailIcon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <a
                  href="mailto:achinthaalahakoon68@gmail.com"
                  className="text-slate-300 hover:text-cyan-400 transition-colors">
                  
                  achinthaalahakoon68@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <PhoneIcon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <p className="text-slate-300">070 3212590</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-700/50">
              <p className="text-sm text-slate-500 mb-4">Connect with me</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 hover:bg-cyan-500/20 transition-all"
                  whileHover={{
                    scale: 1.1
                  }}
                  whileTap={{
                    scale: 0.95
                  }}>
                  
                  <LinkedinIcon className="w-6 h-6 text-cyan-400" />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 hover:bg-cyan-500/20 transition-all"
                  whileHover={{
                    scale: 1.1
                  }}
                  whileTap={{
                    scale: 0.95
                  }}>
                  
                  <GithubIcon className="w-6 h-6 text-cyan-400" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass glass-hover rounded-3xl p-8"
            initial={{
              opacity: 0,
              x: 30
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
              delay: 0.3
            }}>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2">
                  
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  required />
                
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2">
                  
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  required />
                
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  required />
                
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/30 transition-all"
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}>
                
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>);

}