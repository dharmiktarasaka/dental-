import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';
import BeforeAfterSlider from '../components/Common/BeforeAfterSlider';

// Static Data
import { contactInfo } from '../data/locationsData';

export default function BeforeAfter() {
  const breadcrumbItems = [{ label: 'Before & After Results', path: '/before-after-results' }];

  const comparisons = [
    {
      title: "Full Smile Designing",
      description: "Corrected front spacing, discoloration, and structural chips using custom, ultra-thin porcelain veneers.",
      before: "/images/treatment_ortho.png",
      after: "/images/treatment_cosmetic.png",
      beforeLabel: "Spacing & Stains",
      afterLabel: "Veneers Restored"
    },
    {
      title: "In-Office Teeth Whitening",
      description: "Brightened natural enamel by 6 shades in under 45 minutes using blue LED-activated bleaching gel.",
      before: "/images/treatment_general.png",
      after: "/images/treatment_whitening.png",
      beforeLabel: "Extrinsic Yellow Stains",
      afterLabel: "Bleached Luster"
    },
    {
      title: "Braces & Aligners Alignment",
      description: "Resolved severe crowding and crossbite in an adult patient over a 14-month clear aligner progression.",
      before: "/images/treatment_ortho.png",
      after: "/images/treatment_cosmetic.png",
      beforeLabel: "Crowded Lower Bite",
      afterLabel: "Aligned Arch"
    },
    {
      title: "Single Tooth Dental Implant",
      description: "Replaced a fractured, non-restorable molar with a titanium implant and custom-fit E-Max ceramic crown.",
      before: "/images/treatment_surgery.png",
      after: "/images/treatment_implants.png",
      beforeLabel: "Missing Molar / Gap",
      afterLabel: "Implant Restored"
    }
  ];

  return (
    <>
      <SEO 
        title="Dental Treatment Before & After Results Gallery"
        description="See real clinical results achieved by our dental experts. Whitening comparisons, smile styling veneers, and aligner teeth alignment."
        canonicalUrl="/before-after-results"
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2">
            Before & After Results
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Drag the sliding handles to compare teeth alignment, teeth whitening, and veneer smile restorations.
          </p>
        </div>
      </section>

      {/* Before/After Gallery Layout */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {comparisons.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm space-y-4 hover:shadow-md duration-200">
                <div>
                  <h2 className="text-lg font-bold text-dental-navy font-display">{item.title}</h2>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{item.description}</p>
                </div>
                <BeforeAfterSlider 
                  beforeImage={item.before}
                  afterImage={item.after}
                  beforeLabel={item.beforeLabel}
                  afterLabel={item.afterLabel}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3.5 py-1.5 rounded-full inline-block">Consult Our Specialists</span>
          <h2 className="text-2xl md:text-3xl font-bold text-dental-navy">Ready to Design Your Dream Smile?</h2>
          <p className="text-slate-500 text-xs leading-relaxed">
            Schedule an aesthetic evaluation at our Vastrapur clinic. We will conduct a 3D scan and show you a digital smile mockup based on your facial profile.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link to="/book-appointment-online" className="btn-primary">
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Link>
            <a href={`tel:${contactInfo.phone1.replace(/\s+/g, '')}`} className="btn-secondary">
              <Phone className="w-4 h-4 mr-2 text-dental-aqua" />
              Call Clinic
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
