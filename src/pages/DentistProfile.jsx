import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Award, Calendar, Clock, Heart, ShieldCheck, Check, Phone, MessageSquare } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';

// Static Data
import { doctorsData } from '../data/doctorsData';
import { contactInfo } from '../data/locationsData';

export default function DentistProfile() {
  const { slug } = useParams();

  // Retrieve doctor based on slug
  const doctor = doctorsData.find((doc) => doc.slug === slug);

  if (!doctor) {
    return <Navigate to="/404" replace />;
  }

  // Schema for doctor Profile SEO
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": doctor.name,
    "jobTitle": doctor.specialization,
    "image": doctor.image,
    "alumniOf": doctor.qualification,
    "worksFor": {
      "@type": "Dentist",
      "name": "Tarasaka Dental Care",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": contactInfo.address,
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380015",
        "addressCountry": "IN"
      }
    }
  };

  const breadcrumbItems = [
    { label: 'Our Dentists', path: '/dentists-in-ahmedabad' },
    { label: doctor.name, path: `/dentist-in-ahmedabad/${doctor.slug}` }
  ];

  return (
    <>
      <SEO 
        title={doctor.title}
        description={`Consult with ${doctor.name}, ${doctor.specialization} in Ahmedabad. View credentials, clinical focus areas, timings, and book a consultation.`}
        canonicalUrl={`/dentist-in-ahmedabad/${doctor.slug}`}
        schemaMarkup={doctorSchema}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2">
            {doctor.name}
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl leading-relaxed">
            {doctor.specialization}
          </p>
        </div>
      </section>

      {/* Main Profile Info Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Photo & Schedule Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="w-full aspect-[4/5] rounded-[36px] overflow-hidden shadow-xl border-4 border-white bg-slate-50">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Schedule and Timings */}
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl space-y-4">
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-dental-navy border-l-2 border-dental-aqua pl-2">Consultation Hours</h3>
                
                <div className="space-y-3.5 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4.5 h-4.5 text-dental-aqua mt-0.5" />
                    <div>
                      <span className="block font-bold">Weekly Schedule</span>
                      <span className="block text-slate-400 mt-0.5">{doctor.schedule}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 pt-3 border-t border-slate-200/60">
                    <ShieldCheck className="w-4.5 h-4.5 text-dental-aqua mt-0.5" />
                    <div>
                      <span className="block font-bold">DCI Registration</span>
                      <span className="block text-slate-400 mt-0.5">Verified Medical License Holder</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <Link 
                    to="/book-appointment-online" 
                    className="block text-center bg-dental-aqua text-white text-xs font-bold py-3 rounded-xl hover:bg-dental-aqua-dark transition-colors shadow"
                  >
                    Request Appointment
                  </Link>
                  <a 
                    href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`} 
                    className="block text-center bg-slate-200 text-dental-navy text-xs font-bold py-3 rounded-xl hover:bg-slate-300 transition-colors"
                  >
                    Call Clinic Helpline
                  </a>
                </div>
              </div>
            </div>

            {/* Right Biography & Credentials Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Bio description */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-dental-navy border-b border-slate-100 pb-3">Professional Biography</h2>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {doctor.bio}
                </p>
              </div>

              {/* Achievements & Fellowships */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-dental-navy border-b border-slate-100 pb-3">Achievements & Accreditations</h3>
                <div className="space-y-2">
                  {doctor.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-5 h-5 bg-dental-sky/20 text-dental-aqua rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-normal">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special focus areas / services */}
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl space-y-4">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-dental-navy">Clinical Focus Areas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctor.services.map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-dental-aqua flex-shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Trust banner */}
      <section className="bg-gradient-to-r from-dental-navy to-dental-navy-light text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-4">
          <Heart className="w-10 h-10 text-dental-sky mx-auto" />
          <h2 className="text-2xl font-bold tracking-tight">Looking to Speak with {doctor.name}?</h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Book an appointment online, or query directly via WhatsApp to coordinate schedules with {doctor.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link to="/book-appointment-online" className="btn-primary bg-white text-dental-navy hover:bg-slate-100 font-bold">
              Schedule Online
            </Link>
            <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-white flex items-center gap-1.5 font-bold">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
