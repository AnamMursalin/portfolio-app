'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <SectionHeading title="Professional Journey" />
      
      <div className="relative border-l border-slate-200 ml-3 md:ml-0 md:border-l-0 space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative md:flex gap-8 items-start group"
          >
            {/* Timeline connector for md+ screens */}
            <div className="hidden md:flex flex-col items-center mt-1">
              <div className="w-4 h-4 rounded-full bg-blue-100 border-[3px] border-blue-600 z-10 group-hover:scale-125 transition-transform" />
              <div className="w-px h-full bg-slate-200 absolute top-5 bottom-[-2rem]" />
            </div>

            {/* Mobile connector */}
            <div className="md:hidden absolute -left-[1.2rem] top-6 w-3 h-3 rounded-full bg-blue-100 border-2 border-blue-600" />

            <div className="flex-1 bg-white border-l-4 border-l-blue-600 border-y border-r border-slate-200 rounded-r-2xl rounded-l-md p-6 shadow-sm hover:shadow-md transition-shadow ml-6 md:ml-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="font-bold text-xl text-slate-900">{exp.company}</h3>
                  <div className="flex items-center gap-2 text-blue-600 font-medium mt-1">
                    <Briefcase size={16} />
                    <span>{exp.role}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="italic text-slate-500 mb-4">{exp.description}</p>
              
              <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600 mb-6 font-inter">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
