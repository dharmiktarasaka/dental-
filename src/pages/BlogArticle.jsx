import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, Phone, ArrowLeft, BookOpen, User } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';

// Static Data
import { blogData } from '../data/blogData';
import { contactInfo } from '../data/locationsData';

export default function BlogArticle() {
  const { slug } = useParams();

  // Find post matching slug
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  // Schema for Article SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.image],
    "datePublished": "2026-06-01",
    "author": {
      "@type": "Person",
      "name": "Tarasaka Dental Clinical Director"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tarasaka Dental Care",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tarasaka-dental.com/favicon.svg"
      }
    },
    "description": post.summary
  };

  const breadcrumbItems = [
    { label: 'Dental Blog', path: '/blog-dental-care' },
    { label: post.title, path: `/blog-dental-care/${post.slug}` }
  ];

  const recentPosts = blogData.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <>
      <SEO 
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalUrl={`/blog-dental-care/${post.slug}`}
        schemaMarkup={articleSchema}
        ogImage={post.image}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mt-4">
            <span className="bg-dental-sky/20 text-dental-aqua px-2.5 py-1 rounded-md">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-dental-navy leading-tight mt-2 max-w-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content column (8 cols) */}
            <article className="lg:col-span-8 space-y-8">
              
              {/* Banner Image */}
              <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-md bg-slate-50 border border-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Intro summary block */}
              <div className="border-l-4 border-dental-aqua pl-4 py-1.5 italic text-slate-500 text-xs sm:text-sm bg-slate-50 rounded-r-xl">
                {post.summary}
              </div>

              {/* Main reading content paragraphs */}
              <div className="space-y-6 text-slate-500 text-xs sm:text-sm leading-relaxed">
                {post.content.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h2 className="text-lg font-bold text-dental-navy font-display pt-2">
                      {sec.sectionTitle}
                    </h2>
                    <p>
                      {sec.paragraph}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Nav indicators */}
              <div className="pt-8 border-t border-slate-100 flex items-center">
                <Link 
                  to="/blog-dental-care"
                  className="inline-flex items-center gap-1 text-xs font-bold text-dental-navy hover:text-dental-aqua"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog Catalog
                </Link>
              </div>

            </article>

            {/* Right Sidebar Column (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Recent Articles Sidebar List */}
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl space-y-4">
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-dental-navy border-l-2 border-dental-aqua pl-2">
                  Recent Articles
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((p) => (
                    <Link 
                      key={p.slug} 
                      to={`/blog-dental-care/${p.slug}`}
                      className="group flex gap-3 hover:bg-white p-2 rounded-xl transition-all duration-150 border border-transparent hover:border-slate-100 hover:shadow-sm"
                    >
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-16 h-12 rounded-lg object-cover flex-shrink-0 bg-slate-200" 
                      />
                      <div className="space-y-1 overflow-hidden">
                        <h4 className="font-display font-bold text-[11px] text-dental-navy group-hover:text-dental-aqua transition-colors line-clamp-2 leading-tight">
                          {p.title}
                        </h4>
                        <span className="text-[9px] text-slate-400 font-semibold">{p.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Consultation Helpline Card */}
              <div className="bg-gradient-to-br from-dental-navy to-dental-navy-light text-white p-6 rounded-3xl text-center space-y-3 shadow-md">
                <BookOpen className="w-8 h-8 text-dental-sky mx-auto" />
                <h3 className="font-display font-bold text-sm">Need Oral Hygiene Help?</h3>
                <p className="text-slate-300 text-[10px] leading-relaxed">
                  Connect with our clinical specialists in Vastrapur for a professional diagnosis.
                </p>
                <div className="space-y-1.5 pt-2">
                  <Link 
                    to="/book-appointment-online" 
                    className="block text-center bg-dental-aqua text-white text-xs font-bold py-2.5 rounded-xl hover:bg-dental-aqua-dark transition-colors shadow"
                  >
                    Book Slot
                  </Link>
                  <a 
                    href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`}
                    className="block text-center bg-white text-dental-navy text-xs font-bold py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Call: {contactInfo.phone1}
                  </a>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
