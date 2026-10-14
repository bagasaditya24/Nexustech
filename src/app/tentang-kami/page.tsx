import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Target, Award, Users, Lightbulb } from 'lucide-react';
import { companyInfo } from '@/data/companyData';

export default function TentangKamiPage() {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      title: "Inovasi Berkelanjutan",
      desc: "Selalu mengadopsi teknologi termutakhir untuk memberikan solusi yang efisien, cepat, dan berdaya saing tinggi."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Integritas & Keamanan",
      desc: "Menjunjung tinggi kerahasiaan data klien dan standar keamanan siber enterprise dalam setiap baris kode."
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Fokus pada Hasil Bisnis",
      desc: "Setiap produk digital yang kami buat dirancang untuk mendongkrak produktivitas dan pertumbuhan pendapatan klien."
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Keunggulan Kualitas",
      desc: "Standar QA yang ketat dan arsitektur kode yang rapi untuk memastikan skalabilitas jangka panjang."
    }
  ];

  const team = [
    {
      name: "Rian Pratama",
      role: "Chief Executive Officer & Founder",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      bio: "Berpengalaman lebih dari 12 tahun di industri software engineering dan manajemen teknologi."
    },
    {
      name: "Dewi Lestari",
      role: "Lead Security & Cloud Architect",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      bio: "Spesialis infrastruktur AWS & keamanan siber bersertifikasi internasional."
    },
    {
      name: "Ahmad Fauzi",
      role: "Head of AI & Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      bio: "Ahli kecerdasan buatan dan pengembangan arsitektur sistem skala enterprise."
    },
    {
      name: "Sarah Wijaya",
      role: "Head of Product & UI/UX Design",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      bio: "Berdedikasi menciptakan pengalaman pengguna (UX) yang intuitif, bersih, dan memukau."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            Tentang Perusahaan
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Mengenal Lebih Dekat <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{companyInfo.name}</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Kami adalah kumpulan para profesional teknologi yang bersemangat membantu perusahaan mewujudkan inovasi digital tanpa kompromi.
          </p>
        </div>
      </section>

      {/* Story & Vision Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                Kisah Kami
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Berdiri Sejak 2018 dengan Visi Menjadi Pilar Teknologi Terdepan
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {companyInfo.name} didirikan atas dasar keyakinan bahwa setiap perusahaan, baik startup maupun korporasi mapan, berhak mendapatkan akses terhadap solusi teknologi kelas dunia yang andal, aman, dan mudah digunakan.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Selama lebih dari 8 tahun perjalanan kami, kami telah menyelesaikan lebih dari 120 proyek strategis, membantu klien dari berbagai sektor mulai dari perbankan, logistik, e-commerce, hingga kesehatan.
              </p>
            </div>

            <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/80 space-y-8 shadow-xs">
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  Visi Perusahaan
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Menjadi mitra transformasi digital nomor satu di Asia Tenggara yang dikenal karena keunggulan inovasi, standar keamanan enterprise, dan dampak nyata bagi bisnis klien.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-200/60">
                <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                  Misi Perusahaan
                </h4>
                <ul className="space-y-2 text-slate-600 text-sm leading-relaxed list-disc list-inside">
                  <li>Menghadirkan produk perangkat lunak berkualitas tinggi dan berkinerja ekstrem.</li>
                  <li>Menerapkan arsitektur cloud dan keamanan siber berstandar internasional.</li>
                  <li>Membangun hubungan jangka panjang yang didasari transparansi dan kepercayaan penuh.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              Nilai Inti (Core Values)
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Prinsip yang Menjadi Pegangan Kami
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{val.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              Tim Pimpinan Inti
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Dihuni oleh Para Pakar Berpengalaman
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col group"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                    <span className="text-xs font-semibold text-blue-600 block mt-0.5">{member.role}</span>
                    <p className="text-slate-600 text-xs leading-relaxed mt-2">{member.bio}</p>
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
            Ingin Berdiskusi Langsung dengan Tim Kami?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Kami siap mendengarkan kebutuhan spesifik perusahaan Anda dan merancang solusi terbaik.
          </p>
          <div>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full text-base shadow-lg transition-all"
            >
              <span>Hubungi Kami Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
