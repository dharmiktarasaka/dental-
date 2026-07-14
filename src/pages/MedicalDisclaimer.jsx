import React from 'react';
import { ShieldAlert } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';

export default function MedicalDisclaimer() {
  const breadcrumbItems = [{ label: 'Medical Disclaimer', path: '/medical-disclaimer' }];

  return (
    <>
      <SEO 
        title="Medical Disclaimer - Dental Care Information Guide"
        description="Read our medical disclaimer. Dental content, pricing guides, and treatment timelines are for educational guidance and do not replace professional diagnoses."
        canonicalUrl="/medical-disclaimer"
      />

      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2">
            Medical Disclaimer
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Please read this clinical disclaimer carefully. By using our website, you agree to these limits on medical information.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-slate-500 text-xs sm:text-sm leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
          
          <div className="flex items-center gap-2 text-red-500 font-bold">
            <ShieldAlert className="w-5 h-5" />
            <span>Important Health Information Disclaimer</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-dental-navy font-display">No Professional Advice</h2>
            <p>
              The clinical dental details, procedures, recovery guides, blog opinions, and price ranges hosted on this website are for educational and informational purposes only. They are not intended as a substitute for professional dental advice, diagnostic examination, or surgical treatment.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-dental-navy font-display">No Doctor-Patient Relationship</h2>
            <p>
              Browsing this website, submitting online appointment request forms, or checking blog articles does not create or constitute a doctor-patient relationship. Professional relationships are created solely during direct, in-person consultations with our MDS dental surgeons at our Ahmedabad clinic.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-dental-navy font-display">Treatment Outcomes</h2>
            <p>
              Before & After photo galleries, case descriptions, and patient reviews are illustrative of specific outcomes. Individual dental health, jaw density, and oral environments vary significantly. We do not guarantee, assure, or claim that any patient will achieve identical results.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-dental-navy font-display">Emergency Situations</h2>
            <p>
              Do not rely on this website or blogs for immediate medical crises. If you are experiencing a severe dental emergency, jaw fracture, or continuous hemorrhaging, call our direct clinic line (+91 7600 583 156) or visit the nearest hospital emergency room immediately.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
