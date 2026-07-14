import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Heart } from 'lucide-react';
import { contactInfo, ahmedabadServiceAreas, clinicTimings } from '../../data/locationsData';
import { treatmentsData } from '../../data/treatmentsData';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Clinic', path: '/about-clinic-in-ahmedabad' },
    { name: 'Doctors', path: '/dentists-in-ahmedabad' },
    { name: 'Before & After Results', path: '/before-after-results' },
    { name: 'Testimonials & Reviews', path: '/patient-reviews' },
    { name: 'Dental Blog', path: '/blog-dental-care' },
    { name: 'FAQs', path: '/frequently-asked-questions' },
    { name: 'Contact Us', path: '/contact-us-ahmedabad' },
  ];

  // Display top 5 treatments in footer
  const footerTreatments = treatmentsData.slice(0, 6);

  // Display top 6 areas
  const footerAreas = ahmedabadServiceAreas.slice(0, 6);

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      {/* 1. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & Intro */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-tr from-dental-aqua to-dental-sky rounded-lg flex items-center justify-center text-white font-black text-lg shadow-md">
              D
            </div>
            <span className="font-display font-bold text-lg text-white">Tarasaka Dental Care</span>
          </div>
          <p className="text-slate-400 leading-relaxed text-xs">
            Premium dental healthcare clinic in Ahmedabad. Dedicated to providing patient-centered, pain-free treatments with cutting-edge medical technologies.
          </p>
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-xs font-bold text-red-400">
              <ShieldAlert className="w-4 h-4 flex-shrink-0" />
              <span>Emergency Help Line:</span>
            </div>
            <a 
              href={`tel:${contactInfo.emergencyPhone.replace(/\s+/g, '')}`} 
              className="block text-white hover:text-dental-sky text-base font-black transition-colors"
            >
              {contactInfo.phone1}
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links & Treatments */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-4 border-l-2 border-dental-aqua pl-2">Links</h3>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white transition-colors duration-150 block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-4 border-l-2 border-dental-aqua pl-2">Treatments</h3>
            <ul className="space-y-2 text-xs">
              {footerTreatments.map((t) => (
                <li key={t.id}>
                  <Link to={`/${t.id}`} className="hover:text-white transition-colors duration-150 block py-0.5 truncate">
                    {t.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/treatments-in-ahmedabad" className="text-dental-sky hover:text-white transition-colors duration-150 font-bold block py-0.5">
                  View All Services &raquo;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Local Ahmedabad Areas */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-white text-xs uppercase tracking-wider border-l-2 border-dental-aqua pl-2">Ahmedabad Areas</h3>
          <p className="text-xs text-slate-400 leading-normal">
            Accessible to patients visiting from surrounding areas:
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {ahmedabadServiceAreas.map((area) => (
              <span 
                key={area.name} 
                className="bg-slate-800 text-[10px] text-slate-300 px-2 py-1 rounded-md border border-slate-700/50"
              >
                {area.name}
              </span>
            ))}
          </div>
        </div>

        {/* Column 4: Contact & Hours */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-white text-xs uppercase tracking-wider border-l-2 border-dental-aqua pl-2">Get in Touch</h3>
          <div className="space-y-3 text-xs leading-relaxed">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-dental-sky flex-shrink-0 mt-0.5" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-dental-sky flex-shrink-0" />
              <a href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{contactInfo.phone1}</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-dental-sky flex-shrink-0" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">{contactInfo.email}</a>
            </div>
            <div className="flex items-start gap-2 pt-2 border-t border-slate-800">
              <Clock className="w-4 h-4 text-dental-sky flex-shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-white">{clinicTimings[0].days}</span>
                <span className="block text-[11px]">{clinicTimings[0].hours}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 2. Regulatory & Legal Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 border-t border-slate-800 text-slate-500 text-[11px] leading-relaxed">
        <p className="mb-2">
          <strong>Medical Disclaimer:</strong> The dental clinical information provided on this website is for general educational and informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your qualified dentist or dental provider in Ahmedabad with any questions you may have regarding a dental or medical condition.
        </p>
        <div className="flex flex-wrap gap-4 mt-3">
          <Link to="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms-and-conditions" className="hover:text-slate-400 transition-colors">Terms & Conditions</Link>
          <span>|</span>
          <Link to="/medical-disclaimer" className="hover:text-slate-400 transition-colors">Medical Disclaimer</Link>
          <span>|</span>
          <Link to="/sitemap" className="hover:text-slate-400 transition-colors">Sitemap</Link>
        </div>
      </div>

      {/* 3. Bottom Bar Credits */}
      <div className="bg-slate-950 py-6 border-t border-slate-900 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Tarasaka Dental Care. All rights reserved by Tarasaka Digital Solutions.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Developed by </span>
            <a 
              href="https://tarasaka.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-dental-sky hover:text-white font-bold transition-colors"
            >
              Tarasaka Digital Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
