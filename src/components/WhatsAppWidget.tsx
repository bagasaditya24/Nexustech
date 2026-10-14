import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/companyData';

export default function WhatsAppWidget() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20${encodeURIComponent(companyInfo.name)},%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20pembuatan%20website/aplikasi.`;

  return (
    <aside aria-label="Bantuan WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi via WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Konsultasi WhatsApp
        </span>
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25 pointer-events-none"></span>
      </a>
    </aside>
  );
}
