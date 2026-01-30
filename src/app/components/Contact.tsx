import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-32 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Let's build something <span className="text-neutral-500">extraordinary</span> together.</h2>
              <p className="text-neutral-400 text-lg max-w-md">
                Whether you have a project in mind or just want to say hi, my inbox is always open.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 uppercase tracking-wider font-bold">Email Me</p>
                  <p className="text-lg"></p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 uppercase tracking-wider font-bold">Call Me</p>
                  <p className="text-lg"></p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 uppercase tracking-wider font-bold">Location</p>
                  <p className="text-lg"></p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 lg:p-12 rounded-3xl backdrop-blur-sm border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-400">Subject</label>
              <input 
                type="text" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-400">Message</label>
              <textarea 
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-neutral-200 transition-colors"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
