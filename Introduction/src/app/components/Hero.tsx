import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion as Motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-neutral-50/50 skew-x-12 transform origin-top-right" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <Motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1 px-3 rounded-full bg-neutral-100 text-neutral-600 text-sm font-medium"
            >
              Available for new opportunities
            </Motion.span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-tight">
              Crafting <span className="text-neutral-400 italic font-serif">Digital</span> Experiences.
            </h1>
            <p className="text-xl text-neutral-600 max-w-lg leading-relaxed">
              Hi, I'm Mạnh.                                                        
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all group"
            >
              View Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-neutral-200 text-neutral-900 font-medium hover:bg-neutral-50 transition-all">
              Download CV
              <Download className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="pt-8 flex items-center space-x-8">
            <div>
              <p className="text-2xl font-bold text-neutral-900">  </p>
              <p className="text-sm text-neutral-500 uppercase tracking-wider">Years Exp.</p>
            </div>
            <div className="w-px h-12 bg-neutral-200" />
            <div>
              <p className="text-2xl font-bold text-neutral-900">    </p>
              <p className="text-sm text-neutral-500 uppercase tracking-wider">Projects Done</p>
            </div>
            <div className="w-px h-12 bg-neutral-200" />
            <div>
              <p className="text-2xl font-bold text-neutral-900">   </p>
              <p className="text-sm text-neutral-500 uppercase tracking-wider">             </p>
            </div>
          </div>
        </Motion.div>

        <Motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <ImageWithFallback 
              src=""
              alt="Alex Professional Portrait"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 -z-10 w-32 h-32 bg-neutral-200 rounded-full blur-3xl opacity-50" />
          <div className="absolute -top-10 -right-10 -z-10 w-48 h-48 bg-neutral-100 rounded-full blur-3xl opacity-50" />
        </Motion.div>
      </div>
    </section>
  );
}
