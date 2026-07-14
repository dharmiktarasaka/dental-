import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Check, Calendar, Phone, MessageSquare, ChevronDown, ChevronUp, AlertCircle, HelpCircle, Shield } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';
import QuickAppointment from '../components/Home/QuickAppointment';

// Static Data
import { treatmentsData } from '../data/treatmentsData';
import { contactInfo } from '../data/locationsData';

export default function TreatmentDetails({ treatmentId }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Retrieve matching treatment
  const treatment = treatmentsData.find((t) => t.id === treatmentId);

  // Fallback redirect if treatment doesn't exist
  if (!treatment) {
    return <Navigate to="/404" replace />;
  }

  // Schema markup for Service SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": treatment.title,
    "provider": {
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
    },
    "description": treatment.shortDescription,
    "offers": {
      "@type": "Offer",
      "priceRange": treatment.priceRange,
      "priceCurrency": "INR"
    }
  };

  const breadcrumbItems = [
    { label: 'Dental Services', path: '/treatments-in-ahmedabad' },
    { label: treatment.title, path: `/${treatment.id}` }
  ];

  const otherTreatments = treatmentsData.filter((t) => t.id !== treatment.id).slice(0, 5);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <>
      <SEO 
        title={`${treatment.title} in Ahmedabad`}
        description={`${treatment.title} Specialist in Vastrapur, Ahmedabad. Learn about procedure steps, recovery times, pricing estimation, and book a slot.`}
        canonicalUrl={`/${treatment.id}`}
        schemaMarkup={serviceSchema}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2 leading-tight">
            {treatment.title}
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl leading-relaxed">
            {treatment.shortDescription}
          </p>
        </div>
      </section>

      {/* Content Layout Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Image banner */}
              <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-md bg-slate-100 border border-slate-100">
                <img 
                  src={treatment.image} 
                  alt={`${treatment.title} Dental Surgery`} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Core Description */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-dental-navy border-b border-slate-100 pb-3">Treatment Overview</h2>
                <p className="text-slate-500 text-sm leading-relaxed whitespace-pre-line">
                  {treatment.longDescription}
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl space-y-5">
                <h3 className="font-display font-bold text-lg text-dental-navy">Key Benefits of This Treatment</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatment.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-dental-sky/20 text-dental-aqua rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs text-slate-700 leading-normal">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment Procedure Timeline */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-dental-navy border-b border-slate-100 pb-3">The Clinical Procedure</h3>
                <div className="relative border-l-2 border-slate-100 pl-6 ml-3 space-y-8">
                  {treatment.procedure.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[35px] top-1 w-5 h-5 bg-white border-2 border-dental-aqua rounded-full flex items-center justify-center font-bold text-[9px] text-dental-aqua shadow-sm">
                        {idx + 1}
                      </span>
                      <h4 className="font-display font-bold text-xs text-dental-navy uppercase tracking-wider mb-1">Step {idx + 1}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Estimate Card */}
              <div className="bg-gradient-to-tr from-dental-navy to-dental-navy-light text-white p-6 md:p-8 rounded-3xl shadow-premium relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-dental-aqua/10 rounded-full blur-xl -mr-6 -mt-6"></div>
                <div className="relative z-10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Estimated Price Guideline</span>
                    <span className="block text-2xl md:text-3xl font-black font-display text-dental-sky">{treatment.priceRange}</span>
                  </div>
                  <div className="text-slate-300 text-[10px] leading-relaxed max-w-sm">
                    <span className="flex items-center gap-1 text-white font-bold text-xs mb-1">
                      <Shield className="w-3.5 h-3.5 text-dental-sky" /> Price Disclosure
                    </span>
                    Our final estimations depend on diagnostics and structural materials (e.g. Zirconia type). We outline full upfront charges during your first visit.
                  </div>
                </div>
              </div>

              {/* FAQs Accordion */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-dental-navy border-b border-slate-100 pb-3">Treatment FAQs</h3>
                <div className="space-y-3">
                  {treatment.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden transition-all duration-200">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 font-display font-bold text-xs text-left text-dental-navy hover:bg-slate-100/50 cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-dental-aqua flex-shrink-0" />
                          {faq.q}
                        </span>
                        {openFaqIndex === idx ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>
                      
                      {openFaqIndex === idx && (
                        <div className="px-4 pb-4 pt-1 text-xs text-slate-400 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Quick Booking Form Card */}
              <div className="sticky top-24 space-y-8">
                
                <QuickAppointment compact={true} />

                {/* Other Services sidebar menu */}
                <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl space-y-4">
                  <h3 className="font-display font-bold text-xs uppercase tracking-wider text-dental-navy border-l-2 border-dental-aqua pl-2">Other Services</h3>
                  <div className="flex flex-col space-y-2">
                    {otherTreatments.map((t) => (
                      <Link 
                        key={t.id} 
                        to={`/${t.id}`}
                        className="text-xs text-slate-600 hover:text-dental-aqua hover:bg-white p-2.5 rounded-xl transition-all duration-150 border border-transparent hover:border-slate-100 hover:shadow-sm truncate block font-medium"
                      >
                        {t.title}
                      </Link>
                    ))}
                    <Link 
                      to="/treatments-in-ahmedabad" 
                      className="text-xs font-bold text-dental-navy hover:text-dental-aqua block pt-2 text-center"
                    >
                      View All Treatments &raquo;
                    </Link>
                  </div>
                </div>

                {/* Need Help Helpline Card */}
                <div className="bg-gradient-to-br from-dental-aqua to-dental-sky text-white p-6 rounded-3xl shadow-md text-center space-y-3">
                  <Phone className="w-8 h-8 text-white mx-auto animate-bounce" />
                  <h3 className="font-display font-bold text-base">Quick Consultation?</h3>
                  <p className="text-slate-100 text-[10px] leading-relaxed">
                    Have questions about this treatment? Speak directly with our clinic representative.
                  </p>
                  <div className="space-y-1.5 pt-2">
                    <a 
                      href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`} 
                      className="block bg-dental-navy text-white text-xs font-black py-2.5 rounded-xl hover:bg-slate-800 transition-colors shadow"
                    >
                      Call: {contactInfo.phone1}
                    </a>
                    <a 
                      href={contactInfo.whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block bg-white text-emerald-600 text-xs font-black py-2.5 rounded-xl hover:bg-slate-50 transition-colors shadow"
                    >
                      WhatsApp Message
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
