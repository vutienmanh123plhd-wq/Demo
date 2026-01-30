import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const projects = [
  {
    title: 'Nexus Dashboard',
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1700427296131-0cc4c4610fc6?auto=format&fit=crop&q=80&w=1080',
    description: 'A comprehensive analytics dashboard for modern e-commerce brands.',
    tags: ['React', 'Tailwind', 'Recharts'],
    link: '#',
    github: '#'
  },
  {
    title: 'Ethereal App',
    category: 'Mobile Design',
    image: 'https://images.unsplash.com/photo-1750056393349-dfaf647f7400?auto=format&fit=crop&q=80&w=1080',
    description: 'Minimalist habit tracking application with focus on meditation.',
    tags: ['Motion', 'TypeScript', 'UI Design'],
    link: '#',
    github: '#'
  },
  {
    title: 'Arch Studio',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1622579521534-8252f7da47fd?auto=format&fit=crop&q=80&w=1080',
    description: 'Full visual identity and web presence for an architecture firm.',
    tags: ['Branding', 'Webflow', 'SEO'],
    link: '#',
    github: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-neutral-900 tracking-tight">Selected Work</h2>
            <p className="text-neutral-600 max-w-lg">
              A collection of projects that define my journey and expertise in design and technology.
            </p>
          </div>
          <a href="#" className="text-neutral-900 font-medium border-b-2 border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.link} className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href={project.github} className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">{project.category}</p>
                <h3 className="text-2xl font-bold text-neutral-900">{project.title}</h3>
                <p className="text-neutral-600 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-neutral-100 rounded text-neutral-500 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
