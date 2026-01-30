import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
             <div className="relative group">
               <div className="absolute inset-0 bg-neutral-900 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500 -z-10" />
               <div className="rounded-2xl overflow-hidden aspect-square shadow-xl">
                 <ImageWithFallback 
                   src="https://images.unsplash.com/photo-1622579521534-8252f7da47fd?auto=format&fit=crop&q=80&w=1080"
                   alt="Workspace"
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-neutral-900 tracking-tight">
                Passion meets purpose in every pixel.
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                I believe that design is more than just how something looks—it's about how it works 
                and the problems it solves. With a background in both visual design and engineering, 
                I bridge the gap between aesthetics and functionality.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Over the past 5 years, I've worked with startups and established brands to build 
                scalable design systems, intuitive user interfaces, and robust web applications. 
                My approach is deeply rooted in research and user-centricity.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-neutral-900">Design First</h3>
                  <p className="text-sm text-neutral-500">I start with the "why" before the "how", ensuring every design choice has intent.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-neutral-900">Code Driven</h3>
                  <p className="text-sm text-neutral-500">I build performant, accessible, and clean codebases using modern frameworks.</p>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
