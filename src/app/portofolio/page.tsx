"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/companyData';

export default function PortofolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Mobile", "Enterprise", "Web", "AI & Cloud"];

  const filteredProjects = selectedCategory === "Semua"
    ? portfolioData
    : portfolioData.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            Portofolio & Studi Kasus
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Bukti Nyata Keunggulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Teknologi Kami</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Jelajahi berbagai proyek sukses yang telah kami kembangkan untuk klien dari berbagai sektor industri.
          </p>
        </div>
      </section>

      {/* Filter & Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-900 shadow-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">{project.client}</span>
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.desc}</p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-200/60">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="bg-white text-slate-700 text-xs px-3 py-1 rounded-full font-medium border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-100 text-xs font-semibold text-blue-700 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 shrink-0 text-blue-600" />
                      <span>Dampak: {project.metrics}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ingin Menjadi Kisah Sukses Kami Berikutnya?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Mari diskusikan ide aplikasi Anda bersama tim profesional kami hari ini.
          </p>
          <div>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full text-base shadow-lg transition-all"
            >
              <span>Konsultasi Proyek</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
