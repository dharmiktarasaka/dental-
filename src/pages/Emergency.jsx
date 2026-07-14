import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Phone, Clock, ShieldAlert, Check, Calendar, ArrowRight, Heart } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';

// Static Data
import { contactInfo } from '../data/locationsData';

export default function Emergency() {
  const breadcrumbItems = [{ label: 'Emergency Care', path: '/emergency-dentist-ahmedabad' }];

  const emergencyScenarios = [
    { 
      title: "Knocked-Out Permanent Tooth", 
      firstAid: "Pick it up by the crown (never touch the root), gently rinse with water. Try re-inserting it in the socket, or store it in a cup of cold milk. Visit us within 60 minutes." 
    },
    { 
      title: "Severe, Throbbing Toothache", 
      firstAid: "Rinse with warm salt water. Gently floss to clear trapped debris. Apply a cold compress to your cheek if swelling occurs. Take pain medication but never place aspirin directly on gums." 
    },
    { 
      title: "Fractured or Cracked Teeth", 
      firstAid: "Rinse mouth with warm water. Save any broken tooth fragments. Apply gauze if there is minor bleeding, and a cold compress to prevent facial swelling. Call us immediately." 
    },
    { 
      title: "Dental Abscess or Gum Swelling", 
      firstAid: "An abscess is a serious infection. Rinse with warm salt water to clean, but do not attempt to pop the swelling. Seeking immediate dental drainage is vital to avoid spreading infection." 
    }
  ];

  return (
    <>
      <SEO 
        title="Emergency Dentist in Ahmedabad - Same Day Pain Relief"
        description="Experiencing acute dental pain, bleeding, swelling, or a knocked-out tooth in Ahmedabad? Contact our emergency dental care helpline for same-day priority visits."
        canonicalUrl="/emergency-dentist-ahmedabad"
      />

      {/* Page Header */}
      <section className="bg-red-50 py-12 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider mt-4">
            <AlertCircle className="w-5 h-5 animate-pulse" />
            <span>Immediate Assistance Required</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2">
            Emergency Dental Care
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Experiencing severe tooth pain, bleeding, or structural jaw trauma? Call our Ahmedabad emergency line now for same-day priority appointments.
          </p>
        </div>
      </section>

      {/* Main Alert Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content column: Direct Help call */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs text-red-500 font-bold uppercase tracking-widest bg-red-100 px-3.5 py-1.5 rounded-full inline-block">
                On-Call Dentist Available
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
                Call Our Ahmedabad Emergency Helpline
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                We maintain active doctor coverage to handle dental emergencies. If you are calling outside office hours, your call will be routed directly to our on-call dental surgeon.
              </p>

              {/* Emergency Call Box */}
              <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-3xl space-y-4 max-w-md">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <span className="block font-bold text-xs text-slate-800">Response Speed</span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">We aim to triage emergency patients within 30 minutes of clinical arrival.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a 
                    href={`tel:${contactInfo.emergencyPhone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3.5 rounded-full text-sm transition-colors shadow-md"
                  >
                    <Phone className="w-4 h-4 animate-bounce" />
                    Call Helpline: {contactInfo.phone1}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Graphics: What is an emergency */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-red-50/50 border border-red-100/60 p-6 rounded-[32px] space-y-4">
                <span className="text-xs font-bold text-red-500 uppercase tracking-wider block">Clinical Safety checklist</span>
                <div className="space-y-3.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4.5 h-4.5 text-red-500 flex-shrink-0" />
                    <span>Immediate pain-relief injections & tooth extractions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4.5 h-4.5 text-red-500 flex-shrink-0" />
                    <span>Emergency root canals for throbbing pulpitis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4.5 h-4.5 text-red-500 flex-shrink-0" />
                    <span>Trauma suture repair for fractured lips and gums</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4.5 h-4.5 text-red-500 flex-shrink-0" />
                    <span>Temporary crowns or splinting to stabilize loose teeth</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Emergency First Aid Guidelines */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest bg-slate-200 px-3.5 py-1.5 rounded-full inline-block">First Aid Instructions</span>
            <h2 className="text-3xl font-bold text-slate-900">What to Do Before Reaching the Clinic</h2>
            <p className="text-slate-500 text-sm">
              Follow these standard clinical first-aid steps to stabilize a damaged tooth or gum tissue until you reach our Vastrapur center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencyScenarios.map((scen, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 bg-red-100 text-red-500 rounded-full flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-base text-slate-900">{scen.title}</h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed pl-9">
                  {scen.firstAid}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency directions banner */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-6">
          <ShieldAlert className="w-12 h-12 text-red-400 mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Need Immediate Directions?</h2>
          <p className="text-slate-300 text-xs max-w-xl mx-auto leading-relaxed">
            Our clinic is situated at Opp. Vastrapur Lake Garden, Ahmedabad. We offer quick entry and stretcher-accessibility. Call us en-route so our team is fully prepared for your arrival.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary bg-red-500 text-white hover:bg-red-600 font-bold border-transparent"
            >
              Get GPS Directions &raquo;
            </a>
            <a 
              href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`} 
              className="btn-outline-white font-bold"
            >
              Call Clinic Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
