import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Calendar } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';
import QuickAppointment from '../components/Home/QuickAppointment';

// Static Data
import { contactInfo, clinicTimings, ahmedabadServiceAreas } from '../data/locationsData';

export default function Contact() {
  const breadcrumbItems = [{ label: 'Contact Us', path: '/contact-us-ahmedabad' }];

  return (
    <>
      <SEO 
        title="Contact Us & Directions - Dental Clinic in Vastrapur Ahmedabad"
        description="Get in touch with Tarasaka Dental Care. View Vastrapur clinic address, contact phone numbers (+91 7600 583 156), email, maps, and nearby service areas."
        canonicalUrl="/contact-us-ahmedabad"
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2">
            Contact & Directions
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Find address credentials, active clinical phone lines, GPS coordinates, and nearby neighborhood commuting times.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (5 cols): Address & Details */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-6">
                <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">
                  Clinic Location
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-dental-navy leading-snug">
                  Centrally Located in Vastrapur
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Our clinic is located directly opposite the Vastrapur Lake Garden complex, making it simple to access via public transport or car.
                </p>
              </div>

              {/* Detail list card */}
              <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl space-y-5">
                
                <div className="space-y-4 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-dental-aqua flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold">Clinic Address</span>
                      <span className="block text-slate-400 mt-0.5">{contactInfo.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-4 border-t border-slate-200/60">
                    <Phone className="w-5 h-5 text-dental-aqua flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold">Phone Lines</span>
                      <a href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`} className="block text-slate-400 mt-0.5 hover:text-dental-aqua font-semibold">{contactInfo.phone1}</a>
                      <a href={`tel:${contactInfo.phone2.replace(/\s+/g, '')}`} className="block text-slate-400 mt-0.5 hover:text-dental-aqua font-semibold">{contactInfo.phone2}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-4 border-t border-slate-200/60">
                    <Mail className="w-5 h-5 text-dental-aqua flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold">Email Inbox</span>
                      <a href={`mailto:${contactInfo.email}`} className="block text-slate-400 mt-0.5 hover:text-dental-aqua font-semibold">{contactInfo.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-4 border-t border-slate-200/60">
                    <Clock className="w-5 h-5 text-dental-aqua flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold">Operating Hours</span>
                      <span className="block text-slate-400 mt-0.5">{clinicTimings[0].days}: {clinicTimings[0].hours}</span>
                      <span className="block text-red-500 font-semibold mt-0.5">{clinicTimings[1].days}: {clinicTimings[1].hours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a 
                    href={contactInfo.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-xs transition-colors shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Quick Chat
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column (7 cols): Map and Booking form */}
            <div className="lg:col-span-7 space-y-8">
              {/* Map panel */}
              <div className="w-full h-[320px] rounded-3xl overflow-hidden shadow-premium border border-slate-100 relative">
                <iframe 
                  src={contactInfo.mapEmbedUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Premium Dental Clinic Ahmedabad Location Map"
                ></iframe>
              </div>

              {/* commute neighbor text details */}
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl">
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-dental-navy mb-3">Connecting Travel Commutes</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-[11px] text-slate-400">
                  {ahmedabadServiceAreas.map((area) => (
                    <div key={area.name} className="border-b border-slate-200/50 pb-2">
                      <strong className="text-slate-700 block">{area.name}</strong>
                      <span>Commute: {area.distance} ({area.landmark})</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Embedded Booking form section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <QuickAppointment compact={false} />
        </div>
      </section>
    </>
  );
}
