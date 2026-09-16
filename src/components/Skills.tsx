'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skills } from '@/data/skills';
import { ProficiencyLevel } from '@/lib/types';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skills[0].title);

  const getBadgeStyles = (level: ProficiencyLevel) => {
    switch (level) {
      case 'Advanced':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Intermediate':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Familiar':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const activeCategory = skills.find(c => c.title === activeTab) || skills[0];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <SectionHeading title="Technical Skills" />
        
        <div className="mb-8 flex flex-wrap gap-3">
          {skills.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(category.title)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeTab === category.title
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {activeCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full gap-3"
              >
                <span className="font-medium text-slate-900">{skill.name}</span>
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border w-fit ${getBadgeStyles(skill.proficiency)}`}>
                  {skill.proficiency}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
