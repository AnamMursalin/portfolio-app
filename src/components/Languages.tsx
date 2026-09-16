"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { languages } from "@/data/languages";

export default function Languages() {
  return (
    <section id="languages" className="py-12">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Languages
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm px-6 py-4 flex items-center gap-4"
            >
              <div className="bg-blue-50 p-2 rounded-full text-blue-600">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">{lang.name}</div>
                <div
                  className={`text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block ${
                    lang.proficiency === "Native"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {lang.proficiency}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
