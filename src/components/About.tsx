'use client';

import { motion } from 'framer-motion';
import { Download, GraduationCap, MapPin, BookOpen, Target } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '@/data/profile';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <SectionHeading title="About Me" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed font-inter">
            I am a Computer Science student at Namal University, Mianwali, deeply passionate about building practical software solutions. 
            My primary interests lie at the intersection of Software Engineering, Artificial Intelligence, Machine Learning, and Web Development. 
            I enjoy tackling complex problems and turning ideas into clean, user-focused applications.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed font-inter">
            As I progress in my career, I am focused on applying modern DevOps practices and learning scalable architectures. I am actively seeking opportunities to collaborate on innovative projects and bring value through my technical skills.
          </motion.p>
          
          <motion.div variants={itemVariants} className="pt-4">
            <a 
              href="/cv/Anam_Fatima_CV.png" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-sm font-medium"
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {[
            { icon: <GraduationCap size={24} className="text-blue-600" />, label: "Education", value: "BS Computer Science" },
            { icon: <MapPin size={24} className="text-blue-600" />, label: "University", value: "Namal University, Mianwali" },
            { icon: <BookOpen size={24} className="text-blue-600" />, label: "Current Status", value: "4th Year" },
            { icon: <Target size={24} className="text-blue-600" />, label: "Focus Areas", value: "Software Engineering, AI/ML, Web Development, DevOps" }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-sm font-medium text-slate-500 mb-1">{item.label}</h3>
              <p className="font-semibold text-slate-900 leading-snug">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
}
