import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Smartphone, 
  Server, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  Users, 
  Sparkles,
  ChevronRight,
  Star
} from 'lucide-react';
import { companyInfo, servicesData, portfolioData, testimonialsData, faqsData } from '@/data/companyData';

// Helper icon renderer
function renderServiceIcon(iconName: string) {
  switch (iconName) {
    case 'Globe': return <Globe className="w-6 h-6 text-blue-600" />;
    case 'Smartphone': return <Smartphone className="w-6 h-6 text-blue-600" />;
    case 'Server': return <Server className="w-6 h-6 text-blue-600" />;
    case 'Cpu': return <Cpu className="w-6 h-6 text-blue-600" />;
    default: return <Globe className="w-6 h-6 text-blue-600" />;
  }
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-20 lg:py-28">
        {/* Background glow elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Partner Transformasi Digital Terpercaya</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Akselerasi Bisnis Anda dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">Solusi Teknologi Kustom</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              {companyInfo.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/kontak"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-full text-base shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Mulai Konsultasi Gratis</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portofolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold px-7 py-3.5 rounded-full text-base border border-slate-700 transition-all"
              >
                <span>Lihat Portofolio</span>
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-800/80">
            {companyInfo.stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Trusted Clients / Partners Banner */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Dipercaya oleh Perusahaan Terkemuka & Startup Berkembang
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="text-xl font-black text-slate-800 tracking-wider">FINTECH MANDIRI</span>
            <span className="text-xl font-bold text-slate-800 tracking-tight font-mono">GLOBAL LOGISTIC</span>
            <span className="text-xl font-extrabold text-slate-800 italic">BATIK NUSANTARA</span>
            <span className="text-xl font-bold text-slate-800 tracking-widest">TELKOM NUSANTARA</span>
          </div>
        </div>
      </section>

      {/* 3. Services Summary */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              Layanan Unggulan
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Solusi Komprehensif untuk Kebutuhan Digital Anda
            </h3>
            <p className="text-slate-600 text-base">
              Kami menghadirkan standar kualitas tertinggi dalam setiap lini pengembangan teknologi informasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service) => (
              <div 
                key={service.id}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {renderServiceIcon(service.icon)}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href="/layanan"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <span>Pelajari Detail</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-full text-sm shadow-sm transition-all"
            >
              <span>Lihat Seluruh Layanan & Metodologi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide uppercase">
                Mengapa NexusTech?
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Komitmen pada Kualitas, Kecepatan, dan Skalabilitas
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Kami tidak sekadar menulis kode, melainkan merancang solusi yang berdampak langsung pada pertumbuhan bisnis dan efisiensi operasional Anda.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: "Tim Ahli Tersertifikasi", desc: "Dihuni oleh engineer, arsitek sistem, dan UI/UX desainer berpengalaman internasional." },
                  { title: "Standar Keamanan Ketat", desc: "Penerapan enkripsi end-to-end dan praktik keamanan siber enterprise." },
                  { title: "Metodologi Agile & Transparan", desc: "Laporan kemajuan berkala dan fleksibilitas tinggi dalam penyesuaian fitur." },
                  { title: "Dukungan Teknis 24/7", desc: "Tim support siaga memastikan sistem Anda beroperasi tanpa hambatan (zero downtime)." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-base">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Tim NexusTech bekerja"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                    99%
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Tingkat Kepuasan Klien</h5>
                    <p className="text-xs text-slate-500">Berdasarkan survei proyek selesai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Portfolio */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                Portofolio & Studi Kasus
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Karya Nyata yang Memberi Dampak Bisnis Signifikan
              </h3>
            </div>
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-xs hover:bg-slate-50 transition-all self-start md:self-auto"
            >
              <span>Lihat Semua Portofolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                    {project.category}
                  </div>
                </div>
                <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-blue-600">{project.client}</span>
                    <h4 className="text-2xl font-bold text-slate-900">{project.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.desc}</p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100 text-xs font-semibold text-blue-700">
                      ✨ Hasil: {project.metrics}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              Testimoni Klien
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Apa Kata Mereka yang Telah Bekerja Sama dengan Kami
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testi) => (
              <div
                key={testi.id}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    &quot;{testi.content}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={testi.avatar}
                      alt={testi.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{testi.name}</h5>
                    <p className="text-xs text-slate-500">{testi.role}, {testi.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              Pertanyaan Umum
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Hal yang Sering Ditanyakan Klien
            </h3>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-2"
              >
                <h4 className="text-lg font-bold text-slate-900">
                  {faq.question}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Siap Mewujudkan Transformasi Digital Bersama Kami?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto font-normal">
            Konsultasikan ide atau kebutuhan proyek Anda secara gratis dengan tim ahli kami hari ini.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-slate-100 font-bold px-8 py-4 rounded-full text-base shadow-xl transition-all"
            >
              <span>Hubungi Tim Kami</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
