'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Code, Award, Zap } from 'lucide-react';
import { profile } from '@/data/profile';

const IconMap: Record<string, React.ElementType> = {
  briefcase: Briefcase,
  code: Code,
  award: Award,
  zap: Zap,
};

function CountUp({ target, label }: { target: string; label: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Parse the number and the suffix
  const numMatch = target.match(/(\d+)/);
  const targetNumber = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = target.replace(/\d+/g, '');

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(targetNumber);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let start = 0;
          const duration = 1500;
          const stepTime = Math.abs(Math.floor(duration / targetNumber));
          
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === targetNumber) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, targetNumber, shouldReduceMotion]);

  return (
    <div ref={ref} className="text-3xl font-bold text-blue-600 mb-2">
      {count < 10 && targetNumber >= 10 && !shouldReduceMotion && count !== 0 ? `0${count}` : count < 10 && targetNumber < 10 ? `0${count}` : count}
      {suffix}
    </div>
  );
}

export default function Stats() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {profile.stats.map((stat, index) => {
            const Icon = IconMap[stat.icon] || Zap;
            return (
              <motion.div
                key={index}
                variants={shouldReduceMotion ? undefined : itemVariants}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4">
                  <Icon size={24} />
                </div>
                <CountUp target={stat.value} label={stat.label} />
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
