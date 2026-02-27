"use client";


import React from 'react';
import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { CheckCircle2, Monitor, ShieldCheck, Award, Microscope, Activity, Eye, DollarSign } from "lucide-react";

// Service data for the interactive showcase
// Service data for the interactive showcase
const services = [
  {
    id: "veneers",
    title: "High Cosmetic Veneers",
    description: "Ultra-thin porcelain shells that transform smiles with natural aesthetics and durability.",
    image: "/service-veneers.jpg", // place your image in public/
  },
  {
    id: "crowns",
    title: "Crowns & Bridges",
    description: "Restore function and beauty with precision‑crafted crowns and fixed bridges.",
    image: "/service-crowns.jpg",
  },
  {
    id: "implants",
    title: "Custom Implant Restorations",
    description: "Fully customized abutments and crowns for predictable, long‑lasting implant outcomes.",
    image: "/service-implants.jpg",
  },
  {
    id: "dsd",
    title: "Digital Smile Designs",
    description: "Visualize the end result before treatment begins with our advanced digital planning.",
    image: "/service-dsd.jpg",
  },
];
export default function ACAlignersPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <main className="bg-white min-h-screen text-slate-900 font-sans selection:bg-emerald-900 selection:text-white">
      <Navbar />
      
      {/* Cinematic Progress Indicator */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 origin-left z-[1000]" />

      {/* --- 1. HERO + ETHOS (TWO COLUMNS) --- */}
      <section className="relative pt-52 pb-32 px-6 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left column: branding */}
            <Reveal>
              <div className="space-y-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-[0.4em] border border-emerald-100">
                  New Service Release
                </span>
                <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none" style={{ fontFamily: "var(--font-serif)" }}>
                  AC Aligners <span className="font-light italic text-slate-300">System.</span>
                </h1>
                <p className="text-xl md:text-3xl text-slate-400 font-light leading-relaxed">
                  "Digital Precision for Predictable Results"
                </p>
              </div>
            </Reveal>

            {/* Right column: ethos + advantage */}
            <Reveal delay={0.1}>
              <div className="space-y-8">
                <span className="text-sm font-black uppercase tracking-[0.5em] text-emerald-600 block">Advantage</span>
                <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-slate-700">
                  <p>
                    At <span className="font-bold text-slate-900 underline decoration-emerald-500/30 underline-offset-8">Ambridge Ceramics</span>, our constant commitment to advancing dental procedure outcomes through innovation and expertise is at the core of everything we do.
                  </p>
                  <p className="text-slate-500">
                    The AC Aligners system exemplifies this dedication, offering a digitally designed aligner solution that prioritises both <span className="text-slate-900">aesthetics</span> and <span className="text-slate-900">long-term stability</span> for your patients.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

{/* --- 3. THE AC ADVANTAGE (HIGH-TECH ROW) --- */}
<section className="py-24 px-6 bg-[#fcfcfc] border-y border-slate-100">
  <div className="max-w-7xl mx-auto">
    
    {/* Header - Simple, Wide, Clean */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
      <div className="max-w-xl">
        <h2 
          className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900" 
          style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}
        >
          What Sets <span className="text-emerald-600">AC</span> Apart?
        </h2>
      </div>
      <p className="max-w-xs text-sm text-slate-400 font-medium leading-relaxed border-l-2 border-emerald-500 pl-4">
        Every case is designed by technicians who understand occlusion and aesthetics.
      </p>
    </div>

    {/* Feature Row - Clean vertical separation */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
      {[
        { icon: <ShieldCheck />, title: "Orthodontist Reviewed", desc: "Comprehensive digital planning by specialists for every case." },
        { icon: <Microscope />, title: "Technical Precision", desc: "Reviewed by skilled technicians who understand functional sustainability." },
        { icon: <Activity />, title: "Live Support", desc: "Direct technical support for complex and interdisciplinary cases." },
        { icon: <Monitor />, title: "Digital Planning", desc: "Focus on functional, aesthetic, and stable outcomes via advanced workflows." },
        { icon: <Eye />, title: "3D Visualiser", desc: "Interactive module for increased patient acceptance and understanding." },
        { icon: <DollarSign />, title: "Realistic Pricing", desc: "Affordable pricing structure for increased accessibility." }
      ].map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-10 border-r border-b border-slate-200 group hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 relative overflow-hidden"
        >
          {/* Subtle Accent Background */}
          <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-500" />
          
          <div className="flex items-start gap-4 mb-6">
            <div className="text-emerald-600 p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              {React.cloneElement(feature.icon, { size: 20, strokeWidth: 2 })}
            </div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest pt-2">
              {feature.title}
            </h3>
          </div>
          
          <p className="text-[13px] text-slate-500 leading-relaxed font-light">
            {feature.desc}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Footer Detail */}
    <div className="mt-12 text-right">
      <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.6em]">
        Ambridge Ceramics // Clinical Division
      </span>
    </div>
  </div>
</section>

{/* --- 4. THE HOLISTIC PHILOSOPHY (FULL-WIDTH SHOWCASE) --- */}
<section className="py-0 overflow-hidden bg-white border-y border-slate-100">
  <div className="flex flex-col lg:flex-row w-full min-h-[700px]">
    
    {/* Left Panel: Content & Selection (Occupies 40-50% width) */}
    <div className="w-full lg:w-[45%] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
      <Reveal>
        <div className="space-y-10">
          <header>
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-600 mb-6">The Ambridge Ecosystem</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-slate-900" style={{ fontFamily: "var(--font-serif)" }}>
              Why Choose a Digitally <br />Designed System?
            </h3>
          </header>

          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-xl">
            Digital workflows enable precise planning and execution, reducing the risk of unpredictable movement. AC Aligners are supported by our laboratory’s broader expertise in holistic restorative dentistry.
          </p>
          
          {/* Interactive Navigation */}
          <nav className="space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                onClick={() => setActiveService(service)}
                className={`group flex items-center justify-between w-full text-left py-5 border-b border-slate-100 transition-all duration-500 ${
                  activeService.id === service.id ? "border-emerald-500 pl-4" : "hover:pl-2"
                }`}
              >
                <span className={`text-xl md:text-2xl transition-all duration-300 ${
                  activeService.id === service.id ? "font-bold text-slate-900" : "font-light text-slate-400 group-hover:text-slate-600"
                }`}>
                  {service.title}
                </span>
                <div className={`h-2 w-2 rounded-full transition-all duration-500 ${
                  activeService.id === service.id ? "bg-emerald-500 scale-150 shadow-[0_0_15px_rgba(16,185,129,0.5)]" : "bg-slate-200"
                }`} />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-sm font-medium text-slate-400 uppercase tracking-widest pt-4">
             <span className="text-emerald-500">GDC</span>
             <span className="h-1 w-1 bg-slate-300 rounded-full" />
             <span>MHRA</span>
             <span className="h-1 w-1 bg-slate-300 rounded-full" />
             <span>UKCA</span>
          </div>
        </div>
      </Reveal>
    </div>

    {/* Right Panel: Full-Bleed Image (Occupies 55% width) */}
    <div className="w-full lg:w-[55%] relative h-[500px] lg:h-auto overflow-hidden bg-slate-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={activeService.image}
            alt={activeService.title}
            fill
            className="object-cover"
            priority
            sizes="60vw"
          />
          {/* Subtle Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block" />
          
          {/* Floating Caption Card */}
          <div className="absolute bottom-12 right-12 max-w-sm p-8 bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl hidden md:block">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-2">Service Insight</p>
             <h4 className="text-xl font-bold text-slate-900 mb-3">{activeService.title}</h4>
             <p className="text-sm text-slate-500 leading-relaxed font-light">{activeService.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

  </div>
</section>

    {/* --- 5. CTA: PARTNERSHIP (EDITORIAL SPLIT) --- */}
<section className="py-32 px-6 bg-white border-t border-slate-100 overflow-hidden relative">
  {/* Subtle background element to break the white space */}
  <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/50 -skew-x-12 translate-x-20 pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
      
      {/* Left: Heading & Context */}
      <div className="w-full lg:w-3/5 text-left">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-600 mb-6 block">
          Strategic Alliance
        </span>
        <h2 
          className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-8 leading-[0.9]" 
          style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}
        >
          Partnering for <br />
          <span className="italic font-light text-slate-400 underline decoration-emerald-500/20 decoration-8 underline-offset-[12px]">
            Patient Success.
          </span>
        </h2>
        <div className="space-y-6 max-w-xl">
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            We fully understand the challenges dentists face in achieving predictable, high-quality results for their patients. Our team is ready to support you at every stage, from initial planning to final delivery. 
          </p>

        </div>
      </div>

      {/* Right: The Invitation */}
      <div className="w-full lg:w-2/5 flex flex-col items-start lg:items-end">
        <div className="bg-slate-50 p-10 md:p-12 border border-slate-100 w-full hover:shadow-xl transition-all duration-500 group">
          <p className="text-slate-600 mb-8 leading-relaxed font-light italic">
            "Discover how partnering with Ambridge Ceramics can elevate your practice by visiting our website."
          </p>
          
          <a 
            href="https://ambridgeceramics.co.uk" 
            target="_blank"
            className="inline-flex items-center gap-6 px-8 py-5 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:bg-emerald-600 hover:gap-10"
          >
            Visit Our Website
            <span className="text-lg">→</span>
          </a>
        </div>
        
        <div className="mt-6 flex gap-4 opacity-30 grayscale contrast-125">
           {/* You can add small logo icons here for GDC, MHRA etc to ground the CTA */}
           <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Ambridge Ceramics Lab Workflow</span>
        </div>
      </div>

    </div>
  </div>
</section>
      <Footer />
    </main>
  );
}