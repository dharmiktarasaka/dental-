import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, Target, Check, Calendar, Phone, Sparkles } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';

// Static Data
import { contactInfo } from '../data/locationsData';

export default function About() {
  const breadcrumbItems = [{ label: 'About Clinic', path: '/about-clinic-in-ahmedabad' }];

  // Structured Data Schema for Breadcrumbs
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
        "name": "About Clinic",
        "item": "https://tarasaka-dental.com/about-clinic-in-ahmedabad"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="About Our Dental Clinic in Ahmedabad"
        description="Learn about Tarasaka Dental Care's patient-first treatment philosophy, state-of-the-art sterilization autoclaves, and specialized MDS dentists."
        canonicalUrl="/about-clinic-in-ahmedabad"
        schemaMarkup={breadcrumbSchema}
      />

      {/* Page Header / Hero banner */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy tracking-tight mt-2">
            About Our Clinic
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Discover the treatment philosophy, medical standards, and dedicated professionals behind the premium dental care experience in Ahmedabad.
          </p>
        </div>
      </section>

      {/* Philosophy & Mission/Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Collage Section */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=80" 
                  alt="Tarasaka Dental Clinic Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-4 -bottom-6 w-36 h-36 bg-dental-sky text-white rounded-3xl p-5 shadow-lg flex flex-col justify-center text-center">
                <Sparkles className="w-6 h-6 mx-auto mb-2 text-white fill-white" />
                <span className="block text-xs font-bold uppercase tracking-wider">Premium Care</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">Treatment Philosophy</span>
                <h2 className="text-2xl md:text-3xl font-bold text-dental-navy">Modern, Pain-Free, and Patient-First Dental Solutions</h2>
              </div>
              
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                At Tarasaka Dental Care, we do not believe in one-size-fits-all clinical dentistry. We recognize that dental anxiety is real and affects millions of patients. That is why we designed our entire workflow to prioritize patient comfort above all else. 
              </p>
              
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                From low-radiation 3D imaging scans to micro-dentistry under high magnification microscopes, we invest in clinical tools that make procedures painless, precise, and fast.
              </p>

              {/* Mission & Vision cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                  <div className="w-10 h-10 bg-dental-sky/15 text-dental-aqua rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xs text-dental-navy uppercase tracking-wider">Our Mission</h3>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    To deliver premium, highly hygienic, and comfortable dental care utilizing digital diagnostic systems to preserve natural smiles.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                  <div className="w-10 h-10 bg-dental-mint/15 text-dental-mint rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xs text-dental-navy uppercase tracking-wider">Our Vision</h3>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    To set a benchmark for stress-free dental care in Gujarat where patients feel informed, comfortable, and fully in control of their treatments.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hygiene & Sterilization standards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">Absolute Safety</span>
            <h2 className="text-3xl font-bold text-dental-navy">Clinical Hygiene & Sterilization</h2>
            <p className="text-slate-500 text-sm">
              Your safety is our highest priority. We follow strict international CDC and WHO guidelines for dental sterilization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Class-B Autoclave Sterilization", 
                desc: "We sterilize all clinical tools using vacuum-pressure Class-B autoclaves, which kill 100% of bacterial spores, viruses, and microbial elements." 
              },
              { 
                title: "Single-Use Disposable Kits", 
                desc: "Whenever possible, we utilize disposable items like suction tips, glasses, patient drapes, syringe needles, and examination gloves." 
              },
              { 
                title: "Waterline Filtration Systems", 
                desc: "Our dental chairs use customized clean waterline purification systems to prevent bacterial biofilm formation in sprays and cooling water lines." 
              }
            ].map((std, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-dental-sky/35 duration-200">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-dental-sky/10 text-dental-aqua rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-base text-dental-navy">{std.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{std.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-500 text-xs font-bold pt-4">
                  <Check className="w-4 h-4" />
                  <span>CDC Compliant</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Equipment detail list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">Modern Amenities</span>
              <h2 className="text-3xl font-bold text-dental-navy">State-of-the-Art Clinic Facilities</h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Tarasaka Dental Care features modern infrastructure to keep patients relaxed and ensure clinical procedures flow efficiently.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dental-aqua" />
                  <span>Ergonomic German-engineered dental chairs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dental-aqua" />
                  <span>Calm, air-conditioned waiting lobby</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dental-aqua" />
                  <span>Digital records database for instant history retrieval</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dental-aqua" />
                  <span>Wheelchair-accessible clinical entry and layout</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dental-aqua" />
                  <span>Complimentary high-speed WiFi and refreshments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dental-aqua" />
                  <span>Integrated pharmacy for immediate dental meds</span>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/book-appointment-online" className="btn-primary">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Consultation
                </Link>
              </div>
            </div>

            {/* Collage Right */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-premium border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=80" 
                alt="Autoclave Sterilization Clinic Layout" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action banner */}
      <section className="bg-gradient-to-r from-dental-navy to-dental-navy-light text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-4">
          <Award className="w-10 h-10 text-dental-sky mx-auto" />
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Need a Personalized Dental Check-Up?</h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Schedule a visit with Dr. Aarav Patel or Dr. Ananya Sharma today. Let us assess your oral health in a gentle, thorough diagnostic checkup.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link to="/book-appointment-online" className="btn-primary bg-white text-dental-navy hover:bg-slate-100 font-bold">
              Book Appointment
            </Link>
            <a href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`} className="btn-outline-white font-bold">
              Call {contactInfo.phone1}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
