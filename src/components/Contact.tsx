"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { profile } from "@/data/profile";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded-full" />
          <p className="text-lg text-slate-600">
            I&apos;m always open to discussing new opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Whether you have a question, want to collaborate on a project, or
              just want to say hi, feel free to drop a message. I&apos;ll try my
              best to get back to you!
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${profile.contact.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">
                    Email
                  </div>
                  <div className="text-slate-900 font-medium">
                    {profile.contact.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${profile.contact.phone.replace(/-/g, "")}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">
                    Phone
                  </div>
                  <div className="text-slate-900 font-medium">
                    {profile.contact.phone}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">
                    Location
                  </div>
                  <div className="text-slate-900 font-medium">
                    {profile.contact.location}
                  </div>
                </div>
              </div>

              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <GitHubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">
                    GitHub
                  </div>
                  <div className="text-slate-900 font-medium">
                    github.com/AnamMursalin
                  </div>
                </div>
              </a>

              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">
                    LinkedIn
                  </div>
                  <div className="text-slate-900 font-medium">
                    linkedin.com/in/anam85
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
