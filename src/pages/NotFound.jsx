import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home, Phone } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';

// Static Data
import { contactInfo } from '../data/locationsData';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="404 - Dental Page Not Found"
        description="The dental clinic page you are looking for does not exist or has been shifted. Go back to Home or call our Vastrapur center."
        canonicalUrl="/404"
      />

      <section className="min-h-[70vh] bg-slate-50 flex items-center justify-center py-20 px-4">
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-premium max-w-lg w-full text-center space-y-6">
          
          {/* Visual Alert */}
          <div className="mx-auto w-20 h-20 bg-dental-sky/10 text-dental-aqua rounded-full flex items-center justify-center">
            <ShieldAlert className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-black text-dental-navy font-display">
              Page Not Found
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
              Oops! The link you clicked seems to be missing (just like a tooth!). It may have been renamed or shifted.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link 
              to="/" 
              className="btn-primary text-xs py-3 px-6"
            >
              <Home className="w-4 h-4 mr-1.5" />
              Back to Home Page
            </Link>
            <a 
              href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`}
              className="btn-secondary text-xs py-3 px-6 border-slate-300"
            >
              <Phone className="w-4 h-4 mr-1.5 text-dental-aqua" />
              Call Helpline
            </a>
          </div>

          <div className="pt-4 border-t border-slate-100 text-[10px] text-slate-400">
            Need urgent coordinates? Our clinic is opposite Vastrapur Lake Garden, Ahmedabad.
          </div>

        </div>
      </section>
    </>
  );
}
