import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp, Search, Calendar, Phone } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';

// Static Data
import { contactInfo } from '../data/locationsData';

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      q: "How often should I visit a dentist?",
      a: "For optimal oral hygiene, you should visit a dentist at least once every 6 months for a routine examination and professional scaling (cleaning). Patients with chronic gum issues or frequent cavities might require checks every 3 to 4 months."
    },
    {
      q: "Is root canal treatment painful?",
      a: "No. Modern root canal treatment is performed under highly effective local anesthesia, meaning you will feel no pain during the procedure. It is similar to receiving a standard cavity restoration, and is designed to relieve intense dental pain."
    },
    {
      q: "How long do dental implants last?",
      a: "Dental implants are designed to be a permanent tooth replacement solution. The titanium post fuses with your jawbone, and with excellent oral hygiene (flossing, brushing twice daily) and bi-annual scaling, implants can easily last 25 years to a lifetime."
    },
    {
      q: "What is the cost of dental treatment?",
      a: "Dental treatment cost varies depending on severity and prosthetic materials. Standard cleanings start at ₹500, root canals range from ₹4,000 to ₹8,500, and premium dental implants start at ₹25,000. We provide full transparent pricing estimates prior to starting any procedure."
    },
    {
      q: "Are braces suitable for adults?",
      a: "Absolutely! Orthodontic treatments can align teeth at almost any age. Many adult patients in Ahmedabad prefer Clear Aligners (invisible braces) because they are highly discreet, removable, and comfortably shift teeth without traditional metal brackets."
    },
    {
      q: "How can I book an emergency appointment?",
      a: "If you have severe pain, sudden swelling, or a broken tooth, call our emergency help desk directly at +91 7600 583 156. We prioritize acute cases and offer same-day priority appointments."
    },
    {
      q: "Is teeth whitening safe?",
      a: "Yes, professional laser teeth whitening is completely safe. The bleaching formulas we utilize are clinically tested and contain buffering minerals that safeguard enamel and minimize tooth sensitivity compared to over-the-counter charcoal pastes."
    },
    {
      q: "What should I do during a dental emergency?",
      a: "If a permanent tooth is knocked out, handle it by the crown (do not touch the root), rinse it, place it in a cup of cold milk, and reach our clinic within 60 minutes. For severe bleeding or jaw fractures, apply cold pressure and call us immediately."
    },
    {
      q: "Do you treat children?",
      a: "Yes. We offer specialized pediatric dentistry. Our pediatric specialist provides fluoride applications, cavity sealants, milk tooth restorations, and gentle checkups in a highly child-friendly, reassuring environment."
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept all major payment options, including cash, UPI (Google Pay, PhonePe, Paytm), debit/credit cards, and interest-free EMI plans for select long-term treatments like braces, aligners, and dental implants."
    }
  ];

  const filteredFaqs = faqList.filter((faq) => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Schema for FAQPage SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const breadcrumbItems = [{ label: 'FAQs', path: '/frequently-asked-questions' }];

  return (
    <>
      <SEO 
        title="Dental FAQs - Common Questions Answered"
        description="Find answers to dental questions regarding root canals, dental implant costs, Invisalign braces, whitening safety, emergencies, and pediatric care."
        canonicalUrl="/frequently-asked-questions"
        schemaMarkup={faqSchema}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Find immediate answers regarding treatments, clinical safety, pricing estimates, and emergency support.
          </p>
        </div>
      </section>

      {/* Search Input Box */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search our FAQ database..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 text-sm focus:border-dental-aqua transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Accordions Listing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl p-8 shadow-sm">
              <span className="text-2xl">❓</span>
              <h3 className="font-display font-bold text-base text-dental-navy mt-3">No matching FAQs found</h3>
              <p className="text-slate-400 text-xs mt-1">Try modifying your query or keywords.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 font-display font-bold text-xs sm:text-sm text-left text-dental-navy hover:bg-slate-50/50 cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-dental-aqua flex-shrink-0" />
                      {faq.q}
                    </span>
                    {openIndex === idx ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-slate-100 bg-slate-50/50"
                      >
                        <div className="p-5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Ask Question CTAs */}
      <section className="bg-white py-16 border-t border-slate-100 text-center">
        <div className="max-w-xl mx-auto px-4 space-y-4">
          <h2 className="text-xl font-bold text-dental-navy">Still have unanswered questions?</h2>
          <p className="text-slate-400 text-xs leading-relaxed">
            Our clinical team is always available to resolve queries. Send us a message on WhatsApp or book a slot.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link to="/book-appointment-online" className="btn-primary text-xs py-2.5 px-6">
              <Calendar className="w-4 h-4 mr-1.5" />
              Book Consultation
            </Link>
            <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs py-2.5 px-6">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
