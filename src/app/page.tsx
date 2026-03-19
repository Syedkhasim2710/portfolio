import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Code2, Cpu, Globe, Send, Phone, CheckCircle2, Star, Zap, Terminal } from 'lucide-react';

export default function Portfolio() {
const techStack = [
    { name: "Java", icon: "https://api.iconify.design/mdi:language-java.svg?color=white" },
    { name: "Spring Boot", icon: "springboot" },
    { name: "RabbitMQ", icon: "rabbitmq" },
    { name: "Redis", icon: "redis" },
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "AWS", icon: "https://api.iconify.design/mdi:aws.svg?color=white" },
    { name: "Docker", icon: "docker" },
    { name: "GitHub", icon: "github" },
    { name: "OpenTelemetry", icon: "opentelemetry" },
    { name: "Elasticsearch", icon: "elasticsearch" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
         <div className="flex items-center gap-3 group cursor-pointer relative">
  <div className="font-mono border-l-2 border-blue-500 pl-4 py-2 bg-slate-900/20">
  <div className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mb-1">Authenticated Signature</div>
  <div className="text-2xl font-black text-slate-200 tracking-tighter uppercase">
    KHA<span className="text-blue-500">SIM</span>
  </div>
  <div className="text-[9px] text-blue-400/60 font-bold italic">SDE II // High-Scale Systems</div>
  </div>
</div>
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-orange-400 transition-colors">Awards</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto pt-40 pb-16 px-6 text-center">
        <div className="inline-block px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase">
          Available for SDE II / Senior Roles
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Syed Khwaja Khasim Sha 
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Strategic Backend Engineer
        </p>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
         Engineering high-scale, low-latency FinTech systems.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:syedkhasim2710@gmail.com" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-all">
            <Mail size={28} />
            <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
          </a> 
          <a href="https://www.linkedin.com/in/syed-khasim-b9879a148" target="_blank" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-all">
            <Linkedin size={28} />
            <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
          </a> 
          <a href="https://github.com/Syedkhasim2710" target="_blank" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-all">
            <Github size={28} />
            <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
          </a> 
        </div>
      </header>

      {/* Impact Stats Bar */}
      <section className="bg-slate-900/40 border-y border-slate-900 py-12 px-6 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-400 mb-1">500K+</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Daily Transactions</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-emerald-400 mb-1">&lt;200ms</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">p95 Latency</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-purple-400 mb-1">60%</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">MTTR Reduction</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-400 mb-1">40%</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Cycle Acceleration</p>
          </div>
        </div>
      </section>

{/* MOVING TECH STACK MARQUEE */}
      <section id="arsenal" className="mt-32 overflow-hidden border-y border-slate-900 bg-slate-900/20 py-10">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <img 
                src={tech.icon.startsWith('http') ? tech.icon : `https://cdn.simpleicons.org/${tech.icon}/white`}
                alt={tech.name} 
                className="h-10 w-10 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" 
              />
              <span className="text-xl font-bold text-slate-600 group-hover:text-slate-200 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <main className="max-w-6xl mx-auto py-20 px-6">
        
        {/* Core Competencies */}
        {/* Core Competencies (Industrial Detail) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          
          {/* 1. High-Scale Systems */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-5px_rgba(59,130,246,0.15)] backdrop-blur-sm">
            {/* Top border glow effect on hover */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h4 className="text-blue-400 font-bold mb-6 uppercase text-xs tracking-widest border-b border-slate-800/80 pb-4">
              High-Scale Systems
            </h4>
            <ul className="text-sm text-slate-400 space-y-4 font-medium">
              <li className="flex items-start gap-3 group/item">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover/item:bg-blue-400 transition-colors shrink-0" />
                <span className="group-hover/item:text-slate-200 transition-colors">Multithreading & Concurrency</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover/item:bg-blue-400 transition-colors shrink-0" />
                <span className="group-hover/item:text-slate-200 transition-colors">Distributed Locking (Redisson)</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover/item:bg-blue-400 transition-colors shrink-0" />
                <span className="group-hover/item:text-slate-200 transition-colors">Performance Tuning (JProfiler)</span>
              </li>
            </ul>
          </div>

          {/* 2. Architecture */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-5px_rgba(16,185,129,0.15)] backdrop-blur-sm">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h4 className="text-emerald-400 font-bold mb-6 uppercase text-xs tracking-widest border-b border-slate-800/80 pb-4">
              Architecture
            </h4>
            <ul className="text-sm text-slate-400 space-y-4 font-medium">
              <li className="flex items-start gap-3 group/item">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover/item:bg-emerald-400 transition-colors shrink-0" />
                <span className="group-hover/item:text-slate-200 transition-colors">Event-Driven Microservices</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover/item:bg-emerald-400 transition-colors shrink-0" />
                <span className="group-hover/item:text-slate-200 transition-colors">Resilience4j Fault Tolerance</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover/item:bg-emerald-400 transition-colors shrink-0" />
                <span className="group-hover/item:text-slate-200 transition-colors">Domain Driven Design (DDD)</span>
              </li>
            </ul>
          </div>

          {/* 3. Cloud & Observability */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-5px_rgba(168,85,247,0.15)] backdrop-blur-sm">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h4 className="text-purple-400 font-bold mb-6 uppercase text-xs tracking-widest border-b border-slate-800/80 pb-4">
              Cloud &amp; Observability
            </h4>
            <ul className="text-sm text-slate-400 space-y-4 font-medium">
              <li className="flex items-start gap-3 group/item">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover/item:bg-purple-400 transition-colors shrink-0" />
                <span className="group-hover/item:text-slate-200 transition-colors">OpenTelemetry (Traces/Metrics)</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover/item:bg-purple-400 transition-colors shrink-0" />
                <span className="group-hover/item:text-slate-200 transition-colors">AWS Cloud-Native Reliability</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover/item:bg-purple-400 transition-colors shrink-0" />
                <span className="group-hover/item:text-slate-200 transition-colors">AI-Accelerated Dev Cycles</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Experience Section */}
      {/* Experience Section */}
        <section id="experience" className="mb-32">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
            <Cpu className="text-blue-400" /> Professional Journey
          </h2>
          
          <div className="space-y-20 border-l-2 border-slate-900 ml-4 pl-8 relative">
            
            {/* Role 1: SDE II */}
            <div className="relative">
              {/* Timeline Node */}
              <div className="absolute -left-[43px] top-1 w-5 h-5 rounded-full bg-slate-950 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 tracking-tight">Software Development Engineer II</h3>
                  <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mt-1">Reward360 Global Service • Apr 2025 — Present</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['OpenTelemetry', 'Resilience4j', 'MySQL 8', 'AWS'].map(tech => (
                    <span key={tech} className="text-[10px] font-bold px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-400">
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Elevated to SDE II to lead the **Observability & Resilience initiative** across the entire microservices ecosystem. Focused on hardening distributed systems and modernizing legacy data architecture.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
                      <span>Implemented **OpenTelemetry** standardized tracing, reducing **MTTR by 60%** and uncovering long-standing p99 bottlenecks.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
                      <span>Engineered a fault-tolerance layer using **Resilience4j**, preventing cascading failures during peak traffic surges.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800/50">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4">Key Impact</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-500 uppercase">API Latency Reduction</span>
                        <span className="text-emerald-400 font-bold">40%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[40%]" />
                      </div>
                    </div>
                    <p className="text-xs italic leading-relaxed text-slate-500">
                      "Successfully led the migration from MySQL 5 to 8, optimizing query execution plans and indexing strategies for high-volume reward redemption modules."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Role 2: SDE I */}
            <div className="relative">
              {/* Timeline Node */}
              <div className="absolute -left-[43px] top-1 w-5 h-5 rounded-full bg-slate-950 border-2 border-slate-800 z-10" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 tracking-tight">Software Development Engineer I</h3>
                  <p className="text-slate-500 font-semibold text-sm uppercase tracking-wider mt-1">Reward360 Global Service • Apr 2022 — Mar 2025</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Java 17', 'Spring Boot', 'RabbitMQ', 'Redis'].map(tech => (
                    <span key={tech} className="text-[10px] font-bold px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-400">
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Owned core features of the **Payment Gateway and Order Management System (OMS)**, managing high-throughput transaction flows for global loyalty programs.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-slate-600 shrink-0" size={18} />
                      <span>Scaled Payment Gateway to handle **500K+ daily transactions** with consistent 99.9% uptime.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-slate-600 shrink-0" size={18} />
                      <span>Developed a custom **Idempotency Framework** using Redis and Redisson to eliminate duplicate payment risks.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-900/20 p-6 rounded-xl border border-slate-800/30">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Core Achievement</h4>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-500/10 rounded-lg">
                      <Zap className="text-orange-400" size={24} />
                    </div>
                    <div>
                      <p className="text-slate-200 font-bold">1.4x Throughput Increase</p>
                      <p className="text-xs text-slate-500 mt-1">Achieved via multithreaded optimization of the asynchronous notification system.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Terminal className="text-emerald-400" /> Personal Projects &amp; Labs
            </h2>
            <a href="https://github.com/Syedkhasim2710" target="_blank" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-sm transition-colors">
              View all on GitHub <ExternalLink size={16} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/30 transition-all">
              <Zap className="text-emerald-400 mb-4" size={32} />
              <h4 className="text-xl font-bold text-slate-100 mb-3">Personal Architecture Labs</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Exploring high-concurrency patterns, custom rate limiters, and event-driven implementations using modern Java stacks.
              </p>
              <div className="flex gap-3">
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-800 text-slate-400">Spring Boot</span>
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-800 text-slate-400">Redis</span>
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-800 text-slate-400">RabbitMQ</span>
              </div>
            </div>
            <div className="p-8 rounded-2xl border border-dashed border-slate-800 flex flex-col justify-center items-center text-center">
              <Github className="text-slate-700 mb-4" size={48} />
              <h4 className="text-lg font-bold text-slate-400 mb-2">Exploring my Source Code?</h4>
              <p className="text-slate-500 text-sm max-w-xs mb-6">I regularly push experimental backend modules and utility frameworks to my GitHub.</p>
              <a href="https://github.com/Syedkhasim2710" target="_blank" className="bg-slate-800 hover:bg-slate-700 px-6 py-2 rounded-full text-xs font-bold transition-all">Browse Repositories</a>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="mb-32">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Award className="text-orange-400" /> Recognition &amp; Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Awards</h4>
              <div className="flex gap-4">
                <Star className="text-orange-400 shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-slate-200">Tech Samurai Award</h5>
                  <p className="text-sm text-slate-400 mt-1">Recognized for achieving &lt;200ms p95 latency for 500K+ daily transactions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Award className="text-blue-400 shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-slate-200">On-the-Spot Award (x2)</h5>
                  <p className="text-sm text-slate-400 mt-1">For Excellence in Service Reliability &amp; OpenTelemetry standardization.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Award className="text-blue-400 shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-slate-200">Pat on the Back Award</h5>
                  <p className="text-sm text-slate-400 mt-1">For architectural improvements to the Reward360 Notification System.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Vetted Certifications</h4>
              <div className="p-6 rounded-xl bg-slate-900/20 border border-dashed border-slate-800">
                <h5 className="font-bold text-slate-200 underline decoration-blue-500/30 mb-2">Micro1 AI Interview Certified</h5>
                <p className="text-xs text-slate-500 italic font-mono uppercase tracking-tighter">Verified proficiency in Distributed Systems &amp; Spring Boot.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-900/20 border border-dashed border-slate-800">
                <h5 className="font-bold text-slate-200 underline decoration-emerald-500/30 mb-2">LearnTube AI Java Assessment</h5>
                <p className="text-xs text-slate-500 italic font-mono uppercase tracking-tighter">Verified proficiency in Core Java, Data Structures, and Algos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pt-32 pb-16 text-center border-t border-slate-900">
          <h2 className="text-5xl font-black mb-8 italic tracking-tighter text-slate-100 uppercase">Let's build.</h2>
          <p className="text-slate-400 mb-12 text-lg font-light max-w-xl mx-auto">Strategically based in <span className="text-slate-200 font-medium underline decoration-blue-500/50 underline-offset-4">Bengaluru</span>. Seeking high-impact engineering challenges.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <a href="mailto:syedkhasim2710@gmail.com" className="flex items-center gap-3 text-slate-300 bg-slate-900/80 px-8 py-4 rounded-full border border-slate-800 hover:border-blue-500/50 transition-all shadow-2xl shadow-blue-500/5 font-mono text-sm tracking-tight">
              <Mail className="text-blue-400" size={18} /> syedkhasim2710@gmail.com
            </a>
            <div className="flex items-center gap-3 text-slate-400 bg-slate-950 px-8 py-4 rounded-full border border-slate-900 font-mono text-sm tracking-tight">
              <Phone className="text-slate-600" size={18} /> +91 86605 49651
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 flex flex-col items-center border-t border-slate-900 bg-slate-950">
        <div className="mb-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <p className="font-mono text-lg font-bold tracking-[0.3em] text-slate-100 uppercase">Khasim // TechSamurai</p>
        </div>
        <p className="text-[9px] uppercase tracking-[0.5em] text-slate-700 font-bold">
          © 2026 // Strategically Engineered in Bengaluru
        </p>
      </footer>
    </div>
  );
}
