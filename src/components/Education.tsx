"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Award, MapPin, Calendar } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 border-l-4 border-l-blue-600"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-slate-700 mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </div>
                    </div>
                  </div>
                </div>
                {edu.cgpa && (
                  <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 whitespace-nowrap">
                    CGPA: {edu.cgpa}
                  </div>
                )}
              </div>
              
              {edu.honors && edu.honors.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-blue-600" />
                    Honors & Awards
                  </h4>
                  <ul className="space-y-3 text-slate-600">
                    {edu.honors.map((honor, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{honor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
