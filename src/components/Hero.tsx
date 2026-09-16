'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '@/data/profile';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-20 pb-12 px-6 sm:px-10 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Side */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={shouldReduceMotion ? undefined : containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={shouldReduceMotion ? undefined : itemVariants} className="text-blue-600 font-medium mb-2">
              Hello, I'm
            </motion.p>
            <motion.h1 variants={shouldReduceMotion ? undefined : itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
              {profile.name}
            </motion.h1>
            <motion.h2 variants={shouldReduceMotion ? undefined : itemVariants} className="text-xl md:text-2xl text-slate-600 mb-2">
              {profile.title}
            </motion.h2>
            <motion.p variants={shouldReduceMotion ? undefined : itemVariants} className="text-blue-600 font-medium mb-6">
              {profile.tagline}
            </motion.p>
            <motion.p variants={shouldReduceMotion ? undefined : itemVariants} className="text-slate-500 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {profile.summary}
            </motion.p>
            
            <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-xl font-medium transition-colors text-center shadow-sm hover:shadow-md"
              >
                View My Projects
              </a>
              <a
                href="/cv/Anam_Fatima_CV.png"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-medium transition-colors text-center"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-700">{profile.availability}</span>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex-1 w-full max-w-md mx-auto lg:max-w-none lg:mx-0 flex justify-center lg:justify-end"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-10"></div>
              <div className="absolute inset-0 bg-blue-600 rounded-2xl -rotate-6 opacity-10"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-xl ring-2 ring-blue-100 bg-white">
                <Image
                  src="/images/profile.jpg"
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
