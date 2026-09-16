'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Brain, Database, Globe, Code, ExternalLink } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'from-blue-500 to-purple-600';
      case 'Database':
        return 'from-green-500 to-teal-600';
      case 'Web Development':
        return 'from-orange-500 to-red-600';
      default:
        return 'from-blue-500 to-cyan-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return <Brain className="w-16 h-16 text-white opacity-20" />;
      case 'Database':
        return <Database className="w-16 h-16 text-white opacity-20" />;
      case 'Web Development':
        return <Globe className="w-16 h-16 text-white opacity-20" />;
      default:
        return <Code className="w-16 h-16 text-white opacity-20" />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-300 flex flex-col h-full"
    >
      {project.image ? (
        <div className="h-48 relative overflow-hidden bg-slate-100">
          <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white font-bold text-xl line-clamp-1">{project.title}</h3>
          </div>
        </div>
      ) : (
        <div className={`h-48 relative bg-gradient-to-br ${getCategoryGradient(project.categories[0])} flex items-center justify-center`}>
          {getCategoryIcon(project.categories[0])}
          <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="text-white font-bold text-xl line-clamp-1">{project.title}</h3>
          </div>
        </div>
      )}
      
      <div className="p-5 flex-grow flex flex-col">
        <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-full font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      <div className="px-5 py-4 border-t border-slate-100 flex items-center justify-between mt-auto">
        <div className="flex gap-3">
          {project.github && project.github !== '[To be added]' && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1 text-sm font-medium"
            >
              <GitHubIcon className="w-4 h-4" /> GitHub
            </a>
          )}
          {project.liveDemo && project.liveDemo !== '[To be added]' && (
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
        
        <button 
          onClick={onViewDetails}
          className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors ml-auto"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
