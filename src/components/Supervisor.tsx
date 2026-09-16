"use client";

import { motion } from "framer-motion";
import { User, Mail, MapPin, Building2 } from "lucide-react";
import { LinkedInIcon } from "./SocialIcons";
import { supervisor } from "@/data/supervisor";
import Image from "next/image";

export default function Supervisor() {
  if (!supervisor) return null;

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Project Supervisor
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow max-w-lg mx-auto p-8 text-center"
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-slate-100 rounded-full border-4 border-white shadow-sm overflow-hidden flex items-center justify-center relative">
            {supervisor.photo ? (
              <Image 
                src={supervisor.photo} 
                alt={supervisor.name} 
                fill 
                className="object-cover"
              />
            ) : (
              <User className="w-16 h-16 text-slate-400" />
            )}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-1">
            {supervisor.name}
          </h3>
          <p className="text-blue-600 font-medium mb-4">{supervisor.role}</p>
          
          <div className="flex flex-col items-center gap-2 text-slate-600 mb-8">
            {supervisor.department && (
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>{supervisor.department}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{supervisor.university}</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <a 
              href={`mailto:${supervisor.email}`}
              className="flex-1 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
            {supervisor.linkedin && (
              <a
                href={supervisor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-4 py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                <LinkedInIcon className="w-4 h-4" />
                LinkedIn
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
