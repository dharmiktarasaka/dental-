import React from 'react';
import { Calendar, Clock, MapPin, ShieldCheck, Heart } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';
import QuickAppointment from '../components/Home/QuickAppointment';

// Static Data
import { contactInfo } from '../data/locationsData';

export default function BookAppointment() {
  const breadcrumbItems = [{ label: 'Book Appointment', path: '/book-appointment-online' }];

  return (
    <>
      <SEO 
        title="Book Dental Appointment Online - Vastrapur Ahmedabad"
        description="Schedule a dental checkup, implant consult, or aligner screening online at our clinic in Ahmedabad. Select date and time slots."
        canonicalUrl="/book-appointment-online"
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2">
            Schedule Your Appointment
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Fill out the form below. Our dental coordinator will coordinate with clinical specialists and contact you within 2 working hours.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <QuickAppointment compact={false} />
            </div>

            {/* Right Information Sidebar Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Clinical Prep Instructions */}
              <div className="bg-white border border-slate-100 p-8 rounded-3xl space-y-5 shadow-sm">
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-dental-navy border-l-2 border-dental-aqua pl-2">
                  First Visit Information
                </h3>
                
                <div className="space-y-4 text-xs text-slate-700">
                  <div className="flex gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-dental-aqua flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-800">Bring Past Records</h4>
                      <p className="text-slate-400 mt-0.5 leading-normal">
                        Please carry any past dental films, prescriptions, or medical histories (specifically diabetic or cardiac records).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 pt-4 border-t border-slate-100">
                    <Clock className="w-5 h-5 text-dental-aqua flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-800">Arrive 10 Mins Prior</h4>
                      <p className="text-slate-400 mt-0.5 leading-normal">
                        Arrive slightly early to finalize medical history documents and clinical check-in parameters.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 pt-4 border-t border-slate-100">
                    <MapPin className="w-5 h-5 text-dental-aqua flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-800">Parking Support</h4>
                      <p className="text-slate-400 mt-0.5 leading-normal">
                        Dedicated car and two-wheeler basement parking is available under Opp. Vastrapur Lake Garden complex.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Assistance Helpline widget */}
              <div className="bg-gradient-to-br from-dental-navy to-dental-navy-light text-white p-6 rounded-3xl text-center space-y-3">
                <Heart className="w-8 h-8 text-dental-sky mx-auto animate-pulse" />
                <h3 className="font-display font-bold text-sm">Need Direct Scheduling?</h3>
                <p className="text-slate-300 text-[10px] leading-relaxed">
                  Avoid online forms entirely. Speak to our front desk executive to secure an immediate slot.
                </p>
                <div className="pt-2">
                  <a 
                    href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`}
                    className="block bg-dental-aqua text-white text-xs font-bold py-3 rounded-xl hover:bg-dental-aqua-dark transition-colors shadow"
                  >
                    Call: {contactInfo.phone1}
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
