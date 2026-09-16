'use client';

import { motion } from 'framer-motion';
import { MapPin, Heart, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { volunteering } from '@/data/volunteering';

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <SectionHeading title="Volunteering & Leadership" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {volunteering.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border-l-4 border-l-blue-600 border-y border-r border-slate-200 rounded-r-2xl rounded-l-md p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-blue-100 opacity-50">
              <Heart size={64} fill="currentColor" />
            </div>

            <div className="relative z-10">
              <h3 className="font-bold text-xl text-slate-900 mb-1">{item.organization}</h3>
              <p className="text-blue-600 font-medium mb-3">{item.role}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>
                {item.duration && (
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{item.duration}</span>
                  </div>
                )}
              </div>
              
              <p className="italic text-slate-500 mb-4">{item.description}</p>
              
              <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600 font-inter">
                {item.contributions.map((contribution, i) => (
                  <li key={i}>{contribution}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
