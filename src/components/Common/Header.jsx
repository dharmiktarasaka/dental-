import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Clock, MapPin, Menu, X, Calendar, MessageSquare, AlertCircle } from 'lucide-react';
import { contactInfo, clinicTimings } from '../../data/locationsData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Monitor scroll level to trigger style change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigate
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-clinic-in-ahmedabad' },
    { name: 'Treatments', path: '/treatments-in-ahmedabad' },
    { name: 'Doctors', path: '/dentists-in-ahmedabad' },
    { name: 'Before & After', path: '/before-after-results' },
    { name: 'Testimonials', path: '/patient-reviews' },
    { name: 'Blog', path: '/blog-dental-care' },
    { name: 'Contact', path: '/contact-us-ahmedabad' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full z-40">
      {/* 1. Top Information Bar */}
      <div className="bg-dental-navy text-slate-300 text-xs py-2 px-4 md:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-dental-sky" />
              {clinicTimings[0].hours}
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-dental-sky" />
              Vastrapur, Ahmedabad
            </span>
          </div>
          <div className="flex items-center gap-x-4">
            <a href={`tel:${contactInfo.emergencyPhone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 text-red-400 font-bold hover:text-red-300 transition-colors">
              <AlertCircle className="w-3.5 h-3.5 animate-pulse" />
              Emergency Support: {contactInfo.phone1}
            </a>
            <a 
              href={contactInfo.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 hover:text-emerald-400 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar (Sticky) */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-premium border-b border-slate-100 py-3' 
            : 'relative bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Clinic Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-dental-aqua to-dental-sky rounded-xl flex items-center justify-center text-white font-black text-xl shadow-premium group-hover:scale-105 transition-transform duration-200">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl text-dental-navy leading-none tracking-tight">Tarasaka</span>
              <span className="text-[10px] text-dental-aqua font-semibold uppercase tracking-widest mt-0.5">Dental Care</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`relative text-sm font-semibold transition-colors duration-200 py-1.5 ${
                  isActive(link.path) 
                    ? 'text-dental-aqua' 
                    : 'text-slate-600 hover:text-dental-aqua'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-dental-aqua rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTAs and Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`} 
              className="hidden xl:flex items-center gap-1.5 bg-slate-50 text-dental-navy border border-slate-200 hover:bg-slate-100 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-dental-aqua" />
              Call Now
            </a>
            
            <Link 
              to="/book-appointment-online" 
              className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-dental-aqua to-dental-sky text-white hover:from-dental-aqua-dark hover:to-dental-sky-dark px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 shadow-premium transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </Link>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-dental-navy focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-dental-aqua rounded-lg flex items-center justify-center text-white font-black text-base shadow-sm">
                      D
                    </div>
                    <span className="font-display font-bold text-base text-dental-navy">Tarasaka Dental</span>
                  </div>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`text-base font-semibold py-2 px-3 rounded-xl transition-all duration-200 ${
                        isActive(link.path)
                          ? 'bg-dental-sky/20 text-dental-aqua'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-dental-navy'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6 space-y-4">
                <a 
                  href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`} 
                  className="flex items-center justify-center gap-2 bg-slate-50 text-slate-800 border border-slate-200 py-3 rounded-2xl text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-dental-aqua" />
                  Call Clinic: {contactInfo.phone1}
                </a>

                <Link
                  to="/book-appointment-online"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-dental-aqua to-dental-sky text-white py-3 rounded-2xl text-sm font-bold shadow-md hover:from-dental-aqua-dark"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>

                <div className="flex justify-center text-[10px] text-slate-400">
                  <span>Open: Mon - Sat (9:00 AM - 8:30 PM)</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
