import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Heart, Calendar } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';

// Static Data
import { testimonialsData, googleRatingStats } from '../data/testimonialsData';

export default function PatientReviews() {
  const breadcrumbItems = [{ label: 'Patient Reviews', path: '/patient-reviews' }];

  // Schema for Review / AggregateRating SEO
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Tarasaka Dental Care",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": googleRatingStats.averageRating.toString(),
      "reviewCount": googleRatingStats.totalReviews.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonialsData.map((item) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": item.name
      },
      "datePublished": "2026-06-01",
      "reviewBody": item.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": item.rating.toString(),
        "bestRating": "5"
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Verified Dental Patient Reviews & Testimonials"
        description={`Read verified reviews from patients who completed dental implants, root canals, and aligners at our clinic. Over ${googleRatingStats.totalReviews} Google Reviews.`}
        canonicalUrl="/patient-reviews"
        schemaMarkup={reviewSchema}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2">
            Patient Testimonials
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Read reviews from individuals and families in Ahmedabad who trust us with their clinical dental hygiene and surgeries.
          </p>
        </div>
      </section>

      {/* Aggregate Review Card */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Aggregate Rating</span>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-4xl md:text-5xl font-black font-display text-dental-navy leading-none">{googleRatingStats.averageRating}</span>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium block mt-1">Based on {googleRatingStats.totalReviews} Verified Google Reviews</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary text-xs px-5 py-3 border-slate-300"
              >
                Write Review on Google
              </a>
              <Link 
                to="/book-appointment-online" 
                className="btn-primary text-xs px-5 py-3"
              >
                <Calendar className="w-4 h-4 mr-1.5" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Reviews Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm flex flex-col justify-between hover:border-dental-sky/35 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-semibold">{item.date}</span>
                  </div>
                  <p className="text-slate-500 text-xs italic leading-relaxed">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-6">
                  <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-xs text-dental-navy leading-none">{item.name}</h4>
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mt-1">Verified Care Profile ({item.treatment})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
