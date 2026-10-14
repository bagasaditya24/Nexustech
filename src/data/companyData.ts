export const companyInfo = {
  name: "NexusTech Solusindo",
  shortName: "NexusTech",
  tagline: "Transformasi Digital Andal, Cepat & Terpercaya",
  description: "Kami adalah mitra strategis teknologi terdepan yang membantu perusahaan, startup, dan instansi mewujudkan transformasi digital melalui pengembangan software kustom, aplikasi mobile, cloud infrastructure, dan solusi AI.",
  whatsapp: "+6281234567890",
  whatsappFormatted: "+62 812-3456-7890",
  email: "halo@nexustech.co.id",
  address: "Jl. Jend. Sudirman Kav. 52-53, SCBD, Jakarta Selatan, DKI Jakarta 12190",
  hours: "Senin - Jumat: 09:00 - 18:00 WIB",
  stats: [
    { label: "Proyek Selesai", value: "120+" },
    { label: "Klien Puas", value: "85+" },
    { label: "Ahli Tersertifikasi", value: "25+" },
    { label: "Tahun Pengalaman", value: "8+" },
  ]
};

export const servicesData = [
  {
    id: "web-dev",
    title: "Custom Web & Enterprise App",
    slug: "custom-web-enterprise-app",
    shortDesc: "Pengembangan web aplikasi skala enterprise, platform SaaS, dan portal perusahaan dengan performa tinggi dan keamanan tingkat lanjut.",
    icon: "Globe",
    features: [
      "Next.js & React High Performance",
      "Arsitektur Microservices & Scalable API",
      "Enterprise Grade Security & Compliance",
      "Integrasi Payment Gateway & Third-party"
    ]
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    shortDesc: "Aplikasi mobile iOS & Android native maupun cross-platform (Flutter/React Native) yang responsif, halus, dan interaktif.",
    icon: "Smartphone",
    features: [
      "iOS & Android Cross-Platform",
      "UI/UX Design Berorientasi Pengguna",
      "Offline Mode & Push Notification",
      "Performa Cepat & Smooth Animations"
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    slug: "cloud-infrastructure-devops",
    shortDesc: "Migrasi cloud, optimasi infrastruktur AWS/GCP/Azure, automated CI/CD pipeline, dan pemantauan sistem 24/7.",
    icon: "Server",
    features: [
      "AWS, Google Cloud & Azure Expert",
      "Kubernetes & Docker Containerization",
      "CI/CD Pipeline Automation",
      "Zero Downtime & Auto Scaling"
    ]
  },
  {
    id: "ai-analytics",
    title: "Data Analytics & AI Solutions",
    slug: "data-analytics-ai-solutions",
    shortDesc: "Pemanfaatan Big Data, Machine Learning, dan Integrasi AI (LLM / Computer Vision) untuk otomatisasi proses bisnis cerdas.",
    icon: "Cpu",
    features: [
      "Dashboard Business Intelligence",
      "Machine Learning Predictive Model",
      "Integrasi OpenAI / LLM Custom",
      "Data Governance & Secure Storage"
    ]
  }
];

export const portfolioData = [
  {
    id: "pro-1",
    title: "Fintech SuperApp & Payment Gateway",
    category: "Mobile",
    client: "PT Finansial Mitra Mandiri",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
    desc: "Pengembangan superapp keuangan yang menangani lebih dari 100.000 transaksi harian dengan enkripsi end-to-end dan latensi rendah.",
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    metrics: "99.99% Uptime & 2.5x Peningkatan Transaksi"
  },
  {
    id: "pro-2",
    title: "Enterprise ERP & Supply Chain Dashboard",
    category: "Enterprise",
    client: "Global Logisticindo Utama",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    desc: "Sistem ERP terintegrasi untuk memantau armada logistik secara real-time dan manajemen inventaris gudang berbasis IoT.",
    tech: ["Next.js", "TypeScript", "Python FastAPI", "Docker"],
    metrics: "40% Efisiensi Operasional Gudang"
  },
  {
    id: "pro-3",
    title: "E-Commerce Ecosystem & OMS",
    category: "Web",
    client: "Batik Nusantara Lifestyle",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    desc: "Platform e-commerce omnichannel berkecepatan tinggi dengan sistem manajemen pesanan terpusat untuk 50+ gerai fisik.",
    tech: ["Next.js", "Tailwind CSS", "GraphQL", "Redis"],
    metrics: "180% Kenaikan Penjualan Online"
  },
  {
    id: "pro-4",
    title: "AI-Powered Customer Support Bot",
    category: "AI & Cloud",
    client: "Telekomunikasi Nusantara",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    desc: "Implementasi chatbot cerdas berbasis LLM untuk menangani 70% pertanyaan pelanggan secara otomatis 24 jam dengan akurasi tinggi.",
    tech: ["Python", "OpenAI API", "Vector DB", "FastAPI"],
    metrics: "70% Otomatisasi & CSAT Meningkat ke 4.8/5.0"
  }
];

export const blogData = [
  {
    id: "article-1",
    slug: "mengapa-nextjs-pilihan-terbaik-enterprise-2026",
    title: "Mengapa Next.js Menjadi Standar Emas Pengembangan Web Enterprise di 2026",
    excerpt: "Pelajari bagaimana Server Components, Partial Prerendering, dan App Router pada Next.js memberikan keunggulan performa ekstrem dan SEO maksimal.",
    date: "12 Oktober 2026",
    author: "Rian Pratama, CTO NexusTech",
    readTime: "5 menit baca",
    category: "Teknologi",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    content: `
      Dalam lanskap digital yang bergerak sangat cepat, performa website bukan lagi sekadar pelengkap, melainkan penentu utama konversi bisnis. Di tahun 2026, Next.js telah memantapkan posisinya sebagai framework pilihan utama bagi perusahaan enterprise dan startup unicorn.

      ### 1. Keunggulan Performa Lewat Server Components
      Dengan arsitektur React Server Components (RSC), beban JavaScript yang dikirim ke browser pengguna berkurang secara drastis. Halaman dimuat lebih instan, memberikan pengalaman mulus bahkan pada perangkat mobile dengan koneksi terbatas.

      ### 2. SEO-Friendly dari Dasar
      Mesin pencari seperti Google mengutamakan kecepatan muat (Core Web Vitals). Kombinasi Server-Side Rendering (SSR) dan Static Generation memastikan bahwa setiap halaman terindeks secara sempurna dengan meta tag yang dinamis.

      ### 3. Skalabilitas & Keamanan
      NexusTech secara konsisten menerapkan Next.js pada berbagai proyek skala besar karena kemudahan integrasinya dengan infrastruktur modern seperti AWS Lambda, Vercel Enterprise, dan Docker containers.
    `
  },
  {
    id: "article-2",
    slug: "strategi-keamanan-data-untuk-aplikasi-fintech",
    title: "Strategi Keamanan Data & Kepatuhan Standar Industri untuk Aplikasi Fintech",
    excerpt: "Langkah-langkah esensial dalam merancang arsitektur aplikasi finansial yang tahan terhadap ancaman siber dan mematuhi regulasi OJK.",
    date: "28 September 2026",
    author: "Dewi Lestari, Lead Security Engineer",
    readTime: "7 menit baca",
    category: "Keamanan Siber",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    content: `
      Kepercayaan adalah mata uang utama dalam industri finansial. Sekali terjadi kebocoran data, reputasi perusahaan yang dibangun bertahun-tahun bisa runtuh seketika.

      ### Enkripsi End-to-End
      Semua data sensitif, baik dalam kondisi transit (HTTPS/TLS 1.3) maupun saat disimpan (AES-256), wajib dienkripsi. Kunci enkripsi dikelola melalui layanan cloud berstandar tinggi seperti AWS KMS.

      ### Zero Trust Architecture
      Menerapkan prinsip 'Never Trust, Always Verify' memastikan bahwa setiap akses internal maupun eksternal diverifikasi secara ketat berdasarkan identitas dan konteks perangkat.
    `
  },
  {
    id: "article-3",
    slug: "ai-dalam-otomatisasi-proses-bisnis",
    title: "Mengintegrasikan AI Generatif ke dalam Alur Kerja Operasional Perusahaan",
    excerpt: "Bagaimana perusahaan dapat memanfaatkan AI kustom untuk meningkatkan produktivitas tim hingga 45% tanpa mengorbankan privasi data.",
    date: "14 September 2026",
    author: "Ahmad Fauzi, AI Research Lead",
    readTime: "6 menit baca",
    category: "Kecerdasan Buatan",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    content: `
      Kecerdasan buatan bukan lagi teknologi masa depan. Hari ini, AI generatif telah menjadi tulang punggung efisiensi operasional di berbagai sektor mulai dari perbankan hingga logistik.

      ### Otomatisasi Dokumen & Analisis Kontrak
      Dengan model LLM yang dilatih secara khusus pada dataset internal perusahaan, proses peninjauan dokumen hukum dan laporan keuangan dapat diringkas dari berjam-jam menjadi hitungan detik.
    `
  }
];

export const testimonialsData = [
  {
    id: "testi-1",
    name: "Ir. Hendra Kusuma",
    role: "Direktur Utama",
    company: "PT Global Logisticindo",
    content: "NexusTech mengubah sistem operasional kami yang tadinya manual menjadi digital sepenuhnya. Efisiensi gudang meningkat 40% dan klien kami sangat puas dengan kecepatan portal web yang dibangun.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "testi-2",
    name: "Siti Rahmawati, M.Sc",
    role: "VP of Product",
    company: "Finansial Mitra Mandiri",
    content: "Profesionalisme dan ketepatan waktu tim NexusTech luar biasa. Superapp kami berhasil diluncurkan tepat waktu dengan performa yang sangat stabil bahkan saat 100k+ transaksi serentak.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "testi-3",
    name: "Kevin Santoso",
    role: "Founder & CEO",
    company: "Batik Nusantara",
    content: "Website e-commerce baru kami memiliki desain yang sangat elegan, bersih, dan tingkat konversi penjualan melonjak hampir 2x lipat dalam bulan pertama peluncuran.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

export const faqsData = [
  {
    question: "Berapa lama waktu rata-rata pengerjaan sebuah proyek web/aplikasi?",
    answer: "Durasi proyek bervariasi tergantung kompleksitas. Untuk Company Profile standar memakan waktu 2-3 minggu, sedangkan sistem web enterprise atau aplikasi mobile berkisar antara 6-12 minggu."
  },
  {
    question: "Bagaimana tahapan kerja sama dengan NexusTech?",
    answer: "Kami memulai dengan sesi konsultasi mendalam (Discovery Call), penyusunan proposal & arsitektur sistem, desain UI/UX, tahap pengembangan dengan laporan rutin, uji coba (QA), hingga peluncuran dan pemeliharaan berkala."
  },
  {
    question: "Apakah setelah website jadi saya bisa mengelola konten sendiri?",
    answer: "Tentu saja! Kami membangun website dengan sistem CMS (Content Management System) yang intuitif dan mudah digunakan, serta memberikan sesi pelatihan singkat bagi tim Anda."
  },
  {
    question: "Apakah ada garansi dan dukungan setelah aplikasi dirilis?",
    answer: "Ya, kami memberikan garansi pemeliharaan dan perbaikan bug selama 3 bulan penuh setelah peluncuran, serta menyediakan paket maintenance berkala untuk keamanan jangka panjang."
  }
];
