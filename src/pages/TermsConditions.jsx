import React from 'react';
import { Scale } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';

export default function TermsConditions() {
  const breadcrumbItems = [{ label: 'Terms & Conditions', path: '/terms-and-conditions' }];

  return (
    <>
      <SEO 
        title="Terms and Conditions - Dental Clinic Agreement"
        description="Review the terms and conditions for scheduling slots, clinical consultations, and pricing average estimations at our Ahmedabad center."
        canonicalUrl="/terms-and-conditions"
      />

      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2">
            Terms & Conditions
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Effective Date: July 14, 2026. These terms govern online scheduling requests and operations at Tarasaka Dental Care.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-slate-500 text-xs sm:text-sm leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
          
          <div className="flex items-center gap-2 text-dental-aqua font-bold">
            <Scale className="w-5 h-5" />
            <span>Scheduling, Consultations, and Clinical Services</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-dental-navy font-display">1. Appointment Requests</h2>
            <p>
              Submitting online booking requests does not create a legally binding appointment confirmation. Slots are final only after direct phone, SMS, or WhatsApp validation from our dental care coordinator based on doctor availability.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-dental-navy font-display">2. Cancellation & Rescheduling</h2>
            <p>
              We request patients notify the clinic at least 12 hours in advance for cancellations or rescheduling. This allows us to re-allocate priority slots to other individuals suffering from acute tooth decay or swelling.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-dental-navy font-display">3. Treatment Estimations</h2>
            <p>
              Prices, durations, and clinical outcomes discussed on this website represent standard guides. Dental structure, jawbone health, and patient physiology vary; exact treatment itineraries are formulated solely following face-to-face evaluations at our clinic.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-dental-navy font-display">4. Patient Conduct</h2>
            <p>
              Patients are expected to share comprehensive, accurate health profiles (e.g. cardiac histories, drug allergies, diabetic readings) during check-in to avoid procedural complications. The clinic maintains the right to refuse service for verbal abuse or non-compliance with clinical guidelines.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
