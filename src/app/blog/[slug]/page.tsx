import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { blogData } from '@/data/companyData';

export async function generateStaticParams() {
  return blogData.map((article) => ({
    slug: article.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = blogData.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Daftar Artikel</span>
          </Link>

          <div className="inline-block bg-blue-500/20 text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            {article.category}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-400" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="prose prose-slate lg:prose-lg max-w-none space-y-6 text-slate-700 leading-relaxed whitespace-pre-line">
          {article.content}
        </div>

        {/* Share & Footer inside article */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
            <span>Bagikan artikel ini:</span>
            <span className="bg-slate-100 hover:bg-slate-200 px-3.5 py-1.5 rounded-full cursor-pointer text-xs font-semibold text-slate-800 transition-colors">
              LinkedIn
            </span>
            <span className="bg-slate-100 hover:bg-slate-200 px-3.5 py-1.5 rounded-full cursor-pointer text-xs font-semibold text-slate-800 transition-colors">
              WhatsApp
            </span>
          </div>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-full text-sm shadow-sm transition-all"
          >
            <span>Konsultasi Teknologi</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
