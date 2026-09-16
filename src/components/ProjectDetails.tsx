'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, Briefcase, Calendar, Target, Lightbulb, List, User, AlertCircle, BookOpen, Rocket, ExternalLink } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import { Project } from '@/lib/types';
import ProjectFeedback from './ProjectFeedback';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  useEffect(() => {
    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={onClose}
            className="p-2 bg-white/80 hover:bg-slate-100 backdrop-blur rounded-full text-slate-500 hover:text-slate-900 transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar">
          {project.image && (
            <div className="w-full h-64 sm:h-80 relative rounded-xl overflow-hidden mb-8 border border-slate-200">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
          )}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 pr-10">{project.title}</h2>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" />
                <span>{project.role}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{project.duration}</span>
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-medium">
                {project.categories.join(', ')}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium border border-blue-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">Overview</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{project.description}</p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <h3 className="text-xl font-bold text-slate-900">The Problem</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{project.problem}</p>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-xl font-bold text-slate-900">The Solution</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{project.solution}</p>
              </section>
            </div>

            <section>
              <div className="flex items-center gap-2 mb-3">
                <List className="w-5 h-5 text-purple-500" />
                <h3 className="text-xl font-bold text-slate-900">Key Features</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-3">
                <User className="w-5 h-5 text-emerald-500" />
                <h3 className="text-xl font-bold text-slate-900">My Contribution</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{project.myContribution}</p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <h3 className="text-xl font-bold text-slate-900">Challenges & Learning</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed"><strong className="text-slate-800">Challenges:</strong> {project.challenges}</p>
                  <p className="text-slate-600 leading-relaxed"><strong className="text-slate-800">Learnings:</strong> {project.lessonsLearned}</p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Rocket className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl font-bold text-slate-900">Future Improvements</h3>
                </div>
                <ul className="space-y-2">
                  {project.futureImprovements.map((improvement, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
              {project.github && project.github !== '[To be added]' && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-medium"
                >
                  <GitHubIcon className="w-5 h-5" />
                  View Source Code
                </a>
              )}
              {project.liveDemo && project.liveDemo !== '[To be added]' && (
                <a 
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>

            <div className="pt-8 mt-8 border-t border-slate-200">
              <ProjectFeedback projectId={project.id} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
