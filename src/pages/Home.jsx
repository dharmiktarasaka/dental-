import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, Phone, MessageSquare, Star, Award, Users, Activity, 
  ShieldCheck, Shield, Sparkles, Heart, Clock, ArrowRight, MapPin, 
  Stethoscope, Eye, Scan, Radio, Zap, Monitor, Baby, ShieldAlert, Smile, Grid
} from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import BeforeAfterSlider from '../components/Common/BeforeAfterSlider';
import QuickAppointment from '../components/Home/QuickAppointment';

// Static Data
import { treatmentsData } from '../data/treatmentsData';
import { doctorsData } from '../data/doctorsData';
import { technologyData } from '../data/technologyData';
import { testimonialsData, googleRatingStats } from '../data/testimonialsData';
import { contactInfo, ahmedabadServiceAreas } from '../data/locationsData';
import { blogData } from '../data/blogData';

// Map Lucide icons dynamically
const iconMap = {
  Stethoscope, ShieldAlert, Activity, Sparkles, Heart, Smile, Baby, Shield, Award, Grid, Clock, Eye, Scan, Radio, Zap, Monitor, ShieldCheck
};

export default function Home() {
  // Schema for Local Business SEO
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Tarasaka Dental Care",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80",
    "telePhone": contactInfo.phone1,
    "email": contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactInfo.address,
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380015",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": contactInfo.coordinates.lat,
      "longitude": contactInfo.coordinates.lng
    },
    "url": "https://tarasaka-dental.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:30"
      }
    ],
    "sameAs": [
      "https://facebook.com/tarasakadental",
      "https://instagram.com/tarasakadental"
    ],
    "priceRange": "$$"
  };

  // Why choose us items
  const whyChooseUs = [
    { title: "Experienced Dentists", desc: "MDS specialists with 10+ years of experience in implants, root canals, and alignment.", icon: Award },
    { title: "Modern Dental Technology", desc: "Equipped with low-radiation 3D CBCT, intraoral scanners, and dental microscopes.", icon: Monitor },
    { title: "Painless Treatment Approach", desc: "Advanced localized anesthetics, soft-tissue lasers, and warm care to ensure zero pain.", icon: Smile },
    { title: "Sterilized & Hygienic Clinic", desc: "Strict adherence to CDC guidelines with class-B vacuum autoclaving and disposable gear.", icon: ShieldCheck },
    { title: "Personalized Treatment Plans", desc: "Custom treatments based on digital smile design mockups matching facial features.", icon: Heart },
    { title: "Transparent Pricing", desc: "No hidden charges. Clear, upfront estimation before beginning any procedure.", icon: Grid },
    { title: "Emergency Dental Care", desc: "Priority same-day appointments for acute dental pain, swelling, and tooth fractures.", icon: ShieldAlert },
    { title: "Convenient Location", desc: "Prime clinic location in Vastrapur, easily accessible with ample parking space.", icon: MapPin }
  ];

  return (
    <>
      <SEO 
        title="Best Dentist & Dental Clinic in Ahmedabad"
        description="Premium dental clinic in Vastrapur, Ahmedabad. We offer painless root canals, premium dental implants, aligners, and cosmetic smile design."
        canonicalUrl="/"
        schemaMarkup={clinicSchema}
      />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-dental-sky/5 to-slate-50 py-16 lg:py-24">
        {/* Animated Background Graphics (Subtle, professional) */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-dental-sky/15 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-dental-mint/10 rounded-full blur-3xl -z-10"></div>
        
        {/* Floating Sparkle Elements */}
        <motion.div 
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 right-[15%] text-dental-aqua/40 hidden md:block"
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Column Left: Title & Trust Badges */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm text-xs font-semibold text-slate-700">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-dental-navy font-bold">{googleRatingStats.averageRating} Rating</span>
                <span className="text-slate-400">({googleRatingStats.totalReviews} Google Reviews)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-dental-navy leading-tight">
                Advanced Dental Care for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-aqua to-dental-sky">Healthy & Confident</span> Smile
              </h1>
              
              <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Experience modern, comfortable, and personalized dental treatments from trusted MDS specialists in Ahmedabad. Serving Vastrapur, Satellite, Bopal, SG Highway, and surrounding neighborhoods.
              </p>

              {/* Call to actions */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3">
                <Link to="/book-appointment-online" className="btn-primary w-full sm:w-auto">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Link>
                <a href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`} className="btn-secondary w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2 text-dental-aqua" />
                  Call Clinic
                </a>
                <a 
                  href={contactInfo.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-emerald-500 hover:bg-emerald-600 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp Consult
                </a>
              </div>

              {/* Trust Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/60 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <span className="block text-2xl md:text-3xl font-extrabold text-dental-navy font-display">12+</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Years Exp</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-2xl md:text-3xl font-extrabold text-dental-navy font-display">15k+</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Happy Patients</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-2xl md:text-3xl font-extrabold text-dental-navy font-display">99.8%</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Success Rate</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-2xl md:text-3xl font-extrabold text-dental-navy font-display">100%</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">MDS Doctors</span>
                </div>
              </div>
            </div>

            {/* Hero Column Right: Image Frame & Overlays */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80" 
                  alt="Modern Dental Clinic in Ahmedabad"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating review card */}
              <div className="absolute -left-6 bottom-10 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl shadow-premium flex items-center gap-3 hidden sm:flex max-w-[200px]">
                <div className="w-8 h-8 bg-dental-sky-light rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-dental-aqua fill-dental-aqua" />
                </div>
                <div className="text-xs">
                  <span className="block font-bold text-dental-navy">Pain-Free Tech</span>
                  <span className="text-slate-400 text-[10px]">Gentle treatment approach</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Quick Appointment Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest">Book Online</span>
              <h2 className="text-2xl md:text-3xl font-bold text-dental-navy leading-snug">Need to see a dentist? Request a slot in seconds.</h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                Whether you require a standard clinical checkup, have acute tooth pain, or wish to consult on invisible aligners or dental implants, book an appointment slot here. Our coordinator will contact you directly to confirm.
              </p>
              <div className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span>No upfront payment required for online requests</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-dental-aqua" />
                  <span>Get confirmed slots within 2 operational hours</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <QuickAppointment compact={true} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Our Dental Clinic */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">The Tarasaka Advantage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">Why Patients Trust Our Dental Clinic</h2>
            <p className="text-slate-500 text-sm">
              We combine specialized clinical skills with modern diagnostics and warm hospitality to offer a premium dental care experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="card-premium group hover:scale-[1.02] duration-200">
                <div className="w-12 h-12 bg-dental-sky-light text-dental-aqua rounded-2xl flex items-center justify-center mb-5 group-hover:bg-dental-aqua group-hover:text-white transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-base text-dental-navy mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Dental Treatments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">Clinical Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">Specialized Dental Treatments</h2>
            <p className="text-slate-500 text-sm">
              Explore our range of preventive, restorative, cosmetic, and surgical dental treatments engineered to save teeth and transform smiles.
            </p>
          </div>

          {/* Treatments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentsData.map((t) => {
              const IconComp = iconMap[t.icon] || Stethoscope;
              return (
                <div key={t.id} className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col group hover:border-dental-sky/20">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={t.image} 
                      alt={`${t.title} Specialist in Ahmedabad`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2.5 rounded-xl shadow-sm text-dental-aqua">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow space-y-3">
                    <h3 className="font-display font-bold text-lg text-dental-navy">{t.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed flex-grow">{t.shortDescription}</p>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link 
                        to={`/${t.id}`}
                        className="text-xs font-bold text-dental-navy hover:text-dental-aqua flex items-center gap-1"
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
        </div>
      </section>

      {/* 5. About the Clinic section */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Gallery / Images Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&auto=format&fit=crop&q=80" 
                  alt="Modern Dental Chair"
                  className="rounded-3xl shadow-md aspect-[4/5] object-cover"
                />
                <div className="bg-dental-aqua text-white p-5 rounded-3xl shadow-md text-center">
                  <span className="block text-3xl font-extrabold font-display">100%</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider">Hygienic Sterilized</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white border border-slate-100 p-5 rounded-3xl shadow-premium text-center">
                  <Star className="w-8 h-8 text-amber-400 fill-amber-400 mx-auto mb-2" />
                  <span className="block text-2xl font-bold text-dental-navy font-display">4.9 Star</span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Google Rated</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&auto=format&fit=crop&q=80" 
                  alt="Clinical Equipment Setup"
                  className="rounded-3xl shadow-md aspect-[4/5] object-cover"
                />
              </div>
            </div>

            {/* Clinic details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">About Our Clinic</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">A Patient-First Dental Practice Committed to Excellence</h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Tarasaka Dental Care represents the future of dentistry. We believe that visits to the dentist should not trigger anxiety. Our clinic is specifically designed with a warm, spa-like aesthetic that helps patients relax the moment they walk through our doors.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-dental-aqua mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-dental-navy">Hygiene Standards</h4>
                    <p className="text-[11px] text-slate-400 leading-normal">CDC-compliant sterilization monitoring for zero contamination risk.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3">
                  <Users className="w-5 h-5 text-dental-aqua mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-dental-navy">Patient Comfort</h4>
                    <p className="text-[11px] text-slate-400 leading-normal">Soft chairs, calm tunes, and clinical specialists who listen to your concerns.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center pt-2">
                <Link to="/about-clinic-in-ahmedabad" className="btn-secondary py-2.5 px-6 text-xs">
                  Read Our Full Story
                </Link>
                <Link to="/book-appointment-online" className="btn-primary py-2.5 px-6 text-xs bg-dental-navy hover:bg-dental-navy-light">
                  Meet Our Doctors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Meet Our Dentists */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">Medical Specialists</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">Meet Our Specialized Dentists</h2>
            <p className="text-slate-500 text-sm">
              Our clinical directors are highly educated MDS specialists dedicated to providing advanced treatments with absolute care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctorsData.map((doc) => (
              <div key={doc.slug} className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col group">
                <div className="aspect-[4/3] overflow-hidden bg-slate-200 relative">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 bg-dental-navy/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {doc.qualification}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <div>
                    <h3 className="font-display font-bold text-base text-dental-navy">{doc.name}</h3>
                    <span className="text-[11px] text-dental-aqua font-semibold">{doc.specialization}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed flex-grow truncate-3-lines">{doc.bio}</p>
                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between gap-2">
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

      {/* 7. Dental Technology Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">Modern Facilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">Advanced Dental Technology</h2>
            <p className="text-slate-500 text-sm">
              We host high-end diagnostic and treatment systems to make procedures precise, fast, and extremely comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyData.map((tech) => {
              const IconComp = iconMap[tech.icon] || Monitor;
              return (
                <div key={tech.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-4">
                  <div className="w-10 h-10 bg-dental-sky/10 text-dental-aqua rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-sm text-dental-navy leading-none">{tech.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{tech.description}</p>
                    <span className="block text-[11px] text-dental-aqua font-semibold italic">Benefit: {tech.benefit}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Before & After Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">Smile Transformations</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">Before & After Results</h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                See the life-changing results achieved by our dental experts. Our interactive comparison slider shows structural changes in alignment, whitening, and cosmetic crowns.
              </p>
              <div className="space-y-2 pt-2 text-xs font-semibold text-slate-700 text-left inline-block">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Whiter smiles with laser bleaching in 45 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Symmetrical alignment via invisible aligners</span>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/before-after-results" className="btn-primary py-2.5 px-6 text-xs bg-dental-navy hover:bg-slate-800">
                  View Full Gallery
                </Link>
              </div>
            </div>
            
            {/* Draggable Slider Wrapper */}
            <div className="lg:col-span-7 w-full max-w-lg mx-auto">
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&auto=format&fit=crop&q=80"
                afterImage="https://images.unsplash.com/photo-1579684389782-64d84b5e905d?w=600&auto=format&fit=crop&q=80"
                beforeLabel="Crooked / Stained Teeth"
                afterLabel="Perfect Whitened Smile"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Patient Journey Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">Simple Steps</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">Your Treatment Journey</h2>
            <p className="text-slate-500 text-sm">
              We've optimized our clinical workflow to make your visits organized, informative, and completely stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {[
              { step: "01", name: "Book Slot", desc: "Select date & time online or call" },
              { step: "02", name: "Consultation", desc: "Meet specialist & outline goals" },
              { step: "03", name: "3D Scan", desc: "Digital low-radiation diagnostic" },
              { step: "04", name: "Plan Out", desc: "Predictable trial smile mockup" },
              { step: "05", name: "Procedure", desc: "Gentle, painless treatment" },
              { step: "06", name: "Aftercare", desc: "Routine checks & follow-up care" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center relative group hover:border-dental-aqua/30 transition-colors">
                <span className="absolute top-3 left-4 text-3xl font-black text-slate-100 group-hover:text-dental-sky/20 transition-colors">{item.step}</span>
                <div className="w-9 h-9 bg-dental-sky-light text-dental-aqua rounded-full flex items-center justify-center font-bold text-xs mx-auto mb-4 relative z-10">
                  {item.step}
                </div>
                <h4 className="font-display font-bold text-xs text-dental-navy mb-1.5 relative z-10">{item.name}</h4>
                <p className="text-[10px] text-slate-400 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">Patient Feedback</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">Reviews from Happy Patients</h2>
            <p className="text-slate-500 text-sm">
              We take pride in our patient satisfaction. Here are recent reviews from individuals who completed treatments at our clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:border-dental-sky/30 duration-200">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs italic leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-6 border-t border-slate-200/60 mt-6">
                  <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-xs text-dental-navy leading-none">{item.name}</h4>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase mt-1 block">Treatment: {item.treatment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/patient-reviews" className="btn-secondary py-2.5 px-6 text-xs text-dental-navy hover:text-dental-aqua border-slate-300">
              Read All {googleRatingStats.totalReviews} Reviews &raquo;
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Frequently Asked Questions Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">Helpful Guides</span>
              <h2 className="text-3xl font-bold text-dental-navy">Patient FAQs</h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Here are short answers to the questions we receive most frequently. For detailed queries, please check our comprehensive FAQ catalog or speak to our team.
              </p>
              <div className="pt-2">
                <Link to="/frequently-asked-questions" className="btn-secondary py-2.5 px-6 text-xs">
                  View Full FAQ Accordion
                </Link>
              </div>
            </div>
            
            {/* Short FAQ Grid */}
            <div className="lg:col-span-7 space-y-4">
              {[
                { q: "How often should I visit a dentist?", a: "To maintain hygiene and check for decay, visit a general dentist once every 6 months for cleanings." },
                { q: "Is root canal treatment painful?", a: "No, modern rotary endodontics and local anesthetics make root canals completely pain-free, feeling like a basic cavity restoration." },
                { q: "How long do dental implants last?", a: "With regular flossing, checks, and dental scaling, implants have a high success rate and can easily last a lifetime." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-display font-bold text-xs text-dental-navy mb-2">{faq.q}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Blog Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">Educational Blogs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">Dental Care Articles & Insights</h2>
            <p className="text-slate-500 text-sm">
              Stay informed with simple, expert dental tips regarding cavity prevention, implant care, and aligners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogData.slice(0, 3).map((post) => (
              <div key={post.slug} className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm flex flex-col group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-2">
                  <span className="text-[10px] text-dental-aqua font-bold uppercase tracking-wider block">{post.category}</span>
                  <h3 className="font-display font-bold text-sm text-dental-navy group-hover:text-dental-aqua transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed flex-grow line-clamp-3">{post.summary}</p>
                  <div className="pt-4 border-t border-slate-200/60 flex justify-between items-center text-[10px] text-slate-400">
                    <span>{post.date}</span>
                    <Link to={`/blog-dental-care/${post.slug}`} className="font-bold text-dental-navy hover:text-dental-aqua flex items-center gap-0.5">
                      Read Post &raquo;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Location and Contact Map Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">Contact & Directions</span>
              <h2 className="text-3xl font-bold text-dental-navy">Accessible Location Opp. Vastrapur Lake</h2>
              
              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-dental-aqua flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-800">Clinic Address</span>
                    <span className="block text-slate-400 mt-0.5">{contactInfo.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-5 h-5 text-dental-aqua flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-slate-800">Appointment Line</span>
                    <a href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`} className="block text-slate-400 mt-0.5 hover:text-dental-aqua font-bold">{contactInfo.phone1}</a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-dental-aqua flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-slate-800">Operating Hours</span>
                    <span className="block text-slate-400 mt-0.5">Mon - Sat: 9:00 AM - 8:30 PM (Sunday Emergency Only)</span>
                  </div>
                </div>
              </div>

              {/* Service Neighborhood list */}
              <div className="pt-4 border-t border-slate-200">
                <span className="block text-xs font-bold text-dental-navy mb-2">Connecting Neighborhoods:</span>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Our dental clinic is situated in Vastrapur, within a 15-minute commute from Satellite, Bodakdev, Thaltej, Prahlad Nagar, Bopal, and SG Highway.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary py-2 px-5 text-xs bg-dental-navy hover:bg-slate-800 shadow"
                >
                  Get Directions &raquo;
                </a>
                <Link to="/contact-us-ahmedabad" className="btn-secondary py-2 px-5 text-xs">
                  View Full Details
                </Link>
              </div>
            </div>

            {/* Google Map Embed Placeholder */}
            <div className="lg:col-span-7 w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden shadow-premium border border-slate-100 relative">
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
          </div>
        </div>
      </section>

      {/* 14. Final Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-dental-navy to-dental-navy-light text-white text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-dental-aqua/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-dental-sky/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-6 relative z-10">
          <Heart className="w-12 h-12 text-dental-sky mx-auto animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight leading-tight">Ready to Transform Your Smile?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Experience state-of-the-art dental procedures in a comfortable, clean, and patient-first environment. Our MDS dental professionals in Ahmedabad are here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4">
            <Link to="/book-appointment-online" className="btn-primary w-full sm:w-auto px-8 py-3.5 bg-white text-dental-navy hover:bg-slate-100 hover:text-dental-navy shadow-lg font-bold">
              Book Appointment Now
            </Link>
            <a href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`} className="btn-outline-white w-full sm:w-auto px-8 py-3.5 border-white text-white hover:bg-white hover:text-dental-navy transition-colors font-bold">
              Call the Clinic
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
