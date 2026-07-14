import React from 'react';
import { Shield, Lock } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';

export default function PrivacyPolicy() {
  const breadcrumbItems = [{ label: 'Privacy Policy', path: '/privacy-policy' }];

  return (
    <>
      <SEO 
        title="Privacy Policy - Patient Data Protection Guidelines"
        description="Read our clinical patient data privacy policy. Learn how we safeguard medical records, phone inputs, and digital diagnostics in Ahmedabad."
        canonicalUrl="/privacy-policy"
      />

      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Effective Date: July 14, 2026. This policy details how our dental clinic safeguards clinical records and online appointment forms.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-slate-500 text-xs sm:text-sm leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
          
          <div className="flex items-center gap-2 text-dental-aqua font-bold">
            <Lock className="w-5 h-5" />
            <span>Safeguarding Clinical & Personal Records</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-dental-navy font-display">1. Information Collection</h2>
            <p>
              We collect personal details (full name, phone, email) only when voluntarily provided via our online consultation booking form. For active clinical patients, we compile dental history charts, digital X-rays, 3D CBCT scans, and clinical notes necessary for diagnosis and treatment planning.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-dental-navy font-display">2. Use of Information</h2>
            <p>
              Your contact details are used exclusively to coordinate slots, confirm bookings, or address dental emergencies. We do not sell, distribute, or lease personal identifiers to third-party advertisers. Clinical medical data is handled strictly under doctor-patient confidentiality mandates.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-dental-navy font-display">3. Medical Records Security</h2>
            <p>
              Digital records are stored on secure local database networks accessible only to licensed dental surgeons and clinical assistants. Physical medical intake questionnaires are cataloged in locked archives inside our Vastrapur center to prevent unauthorized disclosures.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-dental-navy font-display">4. Patient Rights</h2>
            <p>
              You maintain the right to inspect, copy, or request corrections to your dental histories, CBCT scans, and diagnostic charts. For records access, coordinate directly with our clinical manager en-site or submit requests via our verification email.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
