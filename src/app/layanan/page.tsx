import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe, Smartphone, Server, Cpu, Layers } from 'lucide-react';
import { servicesData, faqsData } from '@/data/companyData';

function renderServiceIcon(iconName: string) {
  switch (iconName) {
    case 'Globe': return <Globe className="w-8 h-8 text-blue-600" />;
    case 'Smartphone': return <Smartphone className="w-8 h-8 text-blue-600" />;
    case 'Server': return <Server className="w-8 h-8 text-blue-600" />;
    case 'Cpu': return <Cpu className="w-8 h-8 text-blue-600" />;
    default: return <Globe className="w-8 h-8 text-blue-600" />;
  }
}

export default function LayananPage() {
  const steps = [
    { number: "01", title: "Discovery & Konsultasi", desc: "Menganalisis kebutuhan bisnis, menentukan ruang lingkup, dan menyusun arsitektur teknologi optimal." },
    { number: "02", title: "UI/UX & Prototyping", desc: "Merancang antarmuka yang bersih, intuitif, dan diuji langsung dari sisi pengalaman pengguna (UX)." },
    { number: "03", title: "Development & QA Testing", desc: "Pengembangan kode dengan standar industri tinggi serta pengujian QA ketat (bug-free guarantee)." },
    { number: "04", title: "Deployment & Support", desc: "Peluncuran sistem ke server produksi dengan zero downtime dan dukungan pemeliharaan berkelanjutan." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            Layanan & Solusi Profesional
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Solusi Teknologi Tepat Guna untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Skala Apa Pun</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Dari web aplikasi enterprise berperforma tinggi hingga integrasi kecerdasan buatan, kami siap membantu mewujudkan visi digital Anda.
          </p>
        </div>
      </section>

      {/* Detailed Services list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-12">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className={`bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:col-span-5 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                    {renderServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <div>
                    <Link
                      href="/kontak"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full text-sm shadow-sm transition-all"
                    >
                      <span>Konsultasikan Layanan Ini</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-xs space-y-4">
                  <h4 className="font-bold text-slate-900 text-base uppercase tracking-wider text-xs text-blue-600">
                    Fitur & Cakupan Solusi:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              Metodologi Kerja
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              4 Langkah Mudah Menuju Sukses Digital
            </h3>
            <p className="text-slate-600 text-base">
              Proses terstruktur yang transparan memastikan setiap proyek selesai tepat waktu dan sesuai ekspektasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4 relative"
              >
                <div className="text-4xl font-black text-blue-600/20">{step.number}</div>
                <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              FAQ Layanan
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Pertanyaan Seputar Layanan Kami
            </h3>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-2"
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

      {/* CTA section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Punya Proyek Impian yang Ingin Direalisasikan?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Diskusikan spesifikasi dan anggaran proyek Anda dengan tim konsultan kami sekarang juga.
          </p>
          <div>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full text-base shadow-lg transition-all"
            >
              <span>Mulai Konsultasi Gratis</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
