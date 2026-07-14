import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, BookOpen } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';

// Static Data
import { blogData } from '../data/blogData';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Dental Guides', 'Oral Health', 'Treatments', 'Preventive Care', 'Emergency Care'];

  const filteredPosts = blogData.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const breadcrumbItems = [{ label: 'Dental Blog', path: '/blog-dental-care' }];

  // Schema for Blog list
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Tarasaka Dental Care Blog",
    "description": "Expert insights and advice on dental implants, teeth alignment, root canals, and pediatric oral hygiene in Ahmedabad.",
    "publisher": {
      "@type": "Organization",
      "name": "Tarasaka Dental Care"
    },
    "blogPost": blogData.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": "2026-06-01",
      "url": `https://tarasaka-dental.com/blog-dental-care/${post.slug}`
    }))
  };

  return (
    <>
      <SEO 
        title="Dental Blog & Oral Hygiene Tips"
        description="Read educational dental articles regarding Invisalign aligners, recovery after root canal treatments, teeth whitening benefits, and children's oral hygiene."
        canonicalUrl="/blog-dental-care"
        schemaMarkup={blogListSchema}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2">
            Dental Care Blog
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Read clinical guides, daily care tips, and recovery summaries curated by our experienced dental directors.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Category List */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-dental-navy text-white shadow-sm'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 text-xs focus:border-dental-aqua transition-colors"
            />
          </div>

        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white border border-slate-100 rounded-3xl p-8 max-w-md mx-auto shadow-sm">
              <span className="text-3xl">📝</span>
              <h3 className="font-display font-bold text-lg text-dental-navy mt-4">No articles found</h3>
              <p className="text-slate-400 text-xs mt-1">Try modifying your search or filter categories.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} 
                className="btn-primary mt-5 text-xs py-2 px-6"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div 
                  key={post.slug} 
                  className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-[9px] font-bold text-dental-aqua uppercase tracking-wider shadow-sm border border-slate-100">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-base text-dental-navy group-hover:text-dental-aqua transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-semibold mt-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <Link 
                        to={`/blog-dental-care/${post.slug}`}
                        className="text-dental-navy hover:text-dental-aqua font-bold flex items-center gap-0.5"
                      >
                        Read Article
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
