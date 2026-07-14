import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Calendar, CheckCircle, Clock, Heart, ShieldAlert } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';

// Static Data
import { doctorsData } from '../data/doctorsData';

export default function Dentists() {
  const breadcrumbItems = [{ label: 'Our Dentists', path: '/dentists-in-ahmedabad' }];

  // Schema for Person/Dentists list SEO
  const dentistsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": doctorsData.map((doc, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Person",
        "name": doc.name,
        "jobTitle": doc.specialization,
        "image": doc.image,
        "url": `https://tarasaka-dental.com/dentist-in-ahmedabad/${doc.slug}`
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Best Dentists in Ahmedabad | Expert MDS Specialists"
        description="Meet our specialized dental doctors in Ahmedabad. Experts in Dental Implants, Single-Visit Root Canals, Invisalign, and Smile Designing."
        canonicalUrl="/dentists-in-ahmedabad"
        schemaMarkup={dentistsSchema}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2">
            Meet Our Specialized Dentists
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Our clinic is directed by highly qualified Master of Dental Surgery (MDS) doctors, ensuring professional diagnosis and comfortable treatment.
          </p>
        </div>
      </section>

      {/* Dentists Listing Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctorsData.map((doc) => (
              <div 
                key={doc.slug} 
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Photo Header */}
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={doc.image} 
                    alt={`${doc.name} - ${doc.specialization}`} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-dental-navy text-[10px] font-bold px-2.5 py-1.5 rounded-lg shadow-sm border border-slate-100">
                    {doc.experience}+ Years Experience
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
                  <div className="space-y-3">
                    <div>
                      <h2 className="text-lg font-bold text-dental-navy">{doc.name}</h2>
                      <span className="text-[10px] text-dental-aqua font-bold uppercase tracking-wider block mt-0.5">{doc.specialization}</span>
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                      {doc.bio}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-dental-aqua flex-shrink-0" />
                        <span className="truncate">{doc.qualification}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-dental-aqua flex-shrink-0" />
                        <span className="truncate">{doc.schedule}</span>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <Link 
                      to={`/dentist-in-ahmedabad/${doc.slug}`}
                      className="text-xs font-bold text-dental-navy hover:text-dental-aqua"
                    >
                      View Profile
                    </Link>
                    <Link 
                      to="/book-appointment-online"
                      className="text-xs font-bold text-white bg-dental-navy hover:bg-slate-800 px-4 py-2 rounded-full transition-colors"
                    >
                      Book Consult
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Qualifications Banner */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-4">
          <Heart className="w-10 h-10 text-dental-sky mx-auto" />
          <h2 className="text-2xl font-bold text-dental-navy">Adhering to Ethical Clinical Practices</h2>
          <p className="text-slate-500 text-xs leading-relaxed max-w-xl mx-auto">
            Our medical staff is registered under the Dental Council of India (DCI) and maintains continuous medical education credits to stay current on technological advancements in dental implants, lasers, and orthodontics.
          </p>
        </div>
      </section>
    </>
  );
}
