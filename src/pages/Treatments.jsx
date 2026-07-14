import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Stethoscope, Sparkles, Activity, ShieldAlert, Award, Grid, Clock, ArrowRight, Baby, Smile, Heart, Shield, ShieldCheck, Eye, Scan, Radio, Zap, Monitor } from 'lucide-react';
import ImageWithFallback from '../components/Common/ImageWithFallback';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';

// Static Data
import { treatmentsData } from '../data/treatmentsData';

// Map Lucide icons dynamically
const iconMap = {
  Stethoscope, ShieldAlert, Activity, Sparkles, Heart, Smile, Baby, Shield, Award, Grid, Clock, Eye, Scan, Radio, Zap, Monitor, ShieldCheck
};

export default function Treatments() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    { name: 'All', label: 'All Treatments' },
    { name: 'Preventive', label: 'General & Preventive' },
    { name: 'Cosmetic', label: 'Cosmetic & Smile' },
    { name: 'Restorative', label: 'Restorative & Implant' }
  ];

  // Helper to map treatments to category tabs
  const getCategory = (treatmentId) => {
    if ([
      'general-dentistry-ahmedabad', 
      'pediatric-dentist-ahmedabad', 
      'preventive-dental-care-ahmedabad'
    ].includes(treatmentId)) {
      return 'Preventive';
    }
    
    if ([
      'teeth-whitening-ahmedabad', 
      'smile-designing-ahmedabad', 
      'cosmetic-dentist-ahmedabad', 
      'braces-and-aligners-ahmedabad'
    ].includes(treatmentId)) {
      return 'Cosmetic';
    }

    return 'Restorative'; // Implants, RCT, wisdom tooth, extraction, gum, crowns, dentures, emergency
  };

  const filteredTreatments = treatmentsData.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'All' || getCategory(t.id) === activeTab;
    return matchesSearch && matchesTab;
  });

  const breadcrumbItems = [{ label: 'Dental Services', path: '/treatments-in-ahmedabad' }];

  // Breadcrumbs schema markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tarasaka-dental.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dental Services",
        "item": "https://tarasaka-dental.com/treatments-in-ahmedabad"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Dental Treatments & Services in Ahmedabad"
        description="Comprehensive list of dental services in Ahmedabad, including dental implants, painless root canals, braces, aligners, teeth whitening, and wisdom tooth extraction."
        canonicalUrl="/treatments-in-ahmedabad"
        schemaMarkup={breadcrumbSchema}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2">
            Dental Treatments & Services
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Browse our list of dental procedures. We utilize advanced digital tools and microscopic dentistry to make every visit stress-free.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === cat.name
                    ? 'bg-dental-navy text-white shadow-md'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 text-xs focus:border-dental-aqua transition-colors"
            />
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {filteredTreatments.length === 0 ? (
            <div className="text-center py-16 bg-white border border-slate-100 rounded-3xl p-8 max-w-md mx-auto shadow-sm">
              <span className="text-3xl">🔍</span>
              <h3 className="font-display font-bold text-lg text-dental-navy mt-4">No treatments found</h3>
              <p className="text-slate-400 text-xs mt-1">Try modifying your query or clear filters to view all services.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveTab('All'); }} 
                className="btn-primary mt-5 text-xs py-2 px-6"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreatments.map((t) => {
                const IconComp = iconMap[t.icon] || Stethoscope;
                return (
                  <div 
                    key={t.id} 
                    className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group hover:border-dental-sky/20"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <ImageWithFallback 
                        src={t.image} 
                        alt={`${t.title} Specialist in Ahmedabad`} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-sm text-dental-aqua">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow space-y-3 justify-between">
                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-base text-dental-navy">{t.title}</h3>
                        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">{t.shortDescription}</p>
                      </div>
                      
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-4">
                        <Link 
                          to={`/${t.id}`}
                          className="text-xs font-bold text-dental-navy hover:text-dental-aqua flex items-center gap-0.5"
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                        <Link 
                          to="/book-appointment-online"
                          className="text-xs font-bold text-white bg-dental-aqua hover:bg-dental-aqua-dark px-4 py-2 rounded-full transition-colors"
                        >
                          Book Slot
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Legal & Price disclaimer section */}
      <section className="bg-white py-16 border-t border-slate-100 text-xs text-slate-400">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-4">
          <p className="leading-relaxed font-medium italic">
            * Treatment prices listed within specific treatment brochures represent local averages and depend significantly on case severity, prosthetic choices (e.g. Zirconia vs Metal ceramic), bone-graft needs, or orthodontic custom aligner choices. Exact clinical estimates are provided only following direct visual examination and digital CBCT diagnostic scanning by our dentists.
          </p>
        </div>
      </section>
    </>
  );
}
