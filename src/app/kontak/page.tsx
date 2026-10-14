"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/companyData';

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: 'Custom Web & Enterprise App',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful submission
    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20${encodeURIComponent(companyInfo.name)},%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20IT.`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            Hubungi Kami
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Mari Diskusikan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Proyek Anda</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Tim konsultan dan arsitek teknologi kami siap merespons kebutuhan Anda dalam waktu kurang dari 24 jam.
          </p>
        </div>
      </section>

      {/* Main Content: Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Informasi Kontak & Kantor
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Silakan hubungi kami melalui formulir di samping atau langsung via WhatsApp untuk respons instan.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Alamat Kantor Pusat</h4>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">WhatsApp / Telepon</h4>
                    <p className="text-slate-600 text-sm mt-1">{companyInfo.whatsappFormatted}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Email Resmi</h4>
                    <p className="text-slate-600 text-sm mt-1">{companyInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Jam Operasional</h4>
                    <p className="text-slate-600 text-sm mt-1">{companyInfo.hours}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Card */}
              <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 fill-current" />
                  <div>
                    <h4 className="font-bold text-base">Butuh Respons Cepat?</h4>
                    <p className="text-xs text-emerald-100">Hubungi kami langsung via WhatsApp sekarang.</p>
                  </div>
                </div>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white text-emerald-700 hover:bg-emerald-50 font-bold py-3 rounded-xl text-sm shadow-md transition-all"
                >
                  Chat WhatsApp Sekarang
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
              {submitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Pesan Berhasil Dikirim!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Terima kasih telah menghubungi {companyInfo.name}. Tim kami akan segera meninjau pesan Anda dan menghubungi dalam waktu 1x24 jam.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', whatsapp: '', service: 'Custom Web & Enterprise App', message: '' });
                    }}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full text-sm shadow-sm transition-all"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Kirim Pesan atau Konsultasi</h3>
                    <p className="text-slate-600 text-sm mt-1">Isi formulir di bawah ini dan kami akan segera merespons.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Nama Lengkap *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="cth. Budi Santoso"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="cth. budi@perusahaan.co.id"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Nomor WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="cth. 08123456789"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Layanan yang Diminati *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="Custom Web & Enterprise App">Custom Web & Enterprise App</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                        <option value="Data Analytics & AI Solutions">Data Analytics & AI Solutions</option>
                        <option value="Konsultasi Umum">Konsultasi Umum</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Pesan / Detail Kebutuhan Proyek *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ceritakan sedikit mengenai tujuan proyek, fitur utama, atau linimasa yang Anda inginkan..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-base shadow-lg shadow-blue-600/20 transition-all"
                  >
                    <span>Kirim Pesan Konsultasi</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Lokasi Kantor Pusat di SCBD Jakarta</h3>
          <p className="text-slate-600 text-sm">Kunjungi kantor kami untuk berdiskusi langsung dengan tim manajemen dan arsitek sistem.</p>
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-200 flex items-center justify-center">
            <div className="text-slate-600 font-medium text-sm flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>{companyInfo.address} (Google Maps Embedded Preview)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
