"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const isMicrosoft = cert.issuer.includes("Microsoft");
            const isDeepLearning = cert.issuer.includes("DeepLearning.AI");
            const bgGradient = isMicrosoft
              ? "bg-gradient-to-r from-blue-500 to-cyan-500"
              : isDeepLearning
              ? "bg-gradient-to-r from-purple-500 to-indigo-500"
              : "bg-gradient-to-r from-slate-700 to-slate-900";

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                <div className={`h-24 ${bgGradient} flex items-center justify-center`}>
                  <Award className="text-white w-10 h-10" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {cert.title}
                  </h3>
                  <div className="text-slate-500 mb-4">{cert.issuer}</div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {cert.year}
                    </span>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm"
                      >
                        View Certificate
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
