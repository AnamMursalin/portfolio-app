'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id={id} className="mb-12">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-slate-900 mb-2">{title}</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full mb-4"></div>
        {subtitle && <p className="text-slate-600 text-lg">{subtitle}</p>}
      </motion.div>
    </section>
  );
}
