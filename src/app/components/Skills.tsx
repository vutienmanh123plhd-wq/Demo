import React from 'react';
import { motion as Motion } from 'framer-motion';
import { 
  Figma, 
  Code2, 
  Layers, 
  Zap, 
  Database, 
  Globe, 
  Cpu, 
  Palette 
} from 'lucide-react';

const skills = [
  { name: 'Product Design', icon: Palette, description: 'UI/UX, prototyping, and visual identity.' },
  { name: 'Web Development', icon: Code2, description: 'React, Next.js, and TypeScript expert.' },
  { name: 'Design Systems', icon: Layers, description: 'Building scalable and consistent components.' },
  { name: 'Optimization', icon: Zap, description: 'Performance tuning and SEO best practices.' },
  { name: 'Backend Integration', icon: Database, description: 'API design and database management.' },
  { name: 'Deployment', icon: Globe, description: 'Cloud infrastructure and CI/CD pipelines.' },
  { name: 'Modern Tools', icon: Figma, description: 'Mastery of Figma, Framer, and Adobe CC.' },
  { name: 'System Architecture', icon: Cpu, description: 'Planning robust and scalable applications.' },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-neutral-900 tracking-tight">Technical Arsenal</h2>
          <p className="text-neutral-600">
            A comprehensive set of tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-900 mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{skill.name}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {skill.description}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
