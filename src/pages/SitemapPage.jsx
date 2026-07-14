import React from 'react';
import { Link } from 'react-router-dom';
import { Network, ArrowRight } from 'lucide-react';

// Common Components
import SEO from '../components/Common/SEO';
import Breadcrumbs from '../components/Common/Breadcrumbs';

// Static Data
import { treatmentsData } from '../data/treatmentsData';
import { doctorsData } from '../data/doctorsData';
import { blogData } from '../data/blogData';

export default function SitemapPage() {
  const breadcrumbItems = [{ label: 'HTML Sitemap', path: '/sitemap' }];

  const mainPages = [
    { name: 'Home Page', path: '/' },
    { name: 'About the Clinic', path: '/about-clinic-in-ahmedabad' },
    { name: 'Our Dental Services', path: '/treatments-in-ahmedabad' },
    { name: 'Our Dentists & Specialists', path: '/dentists-in-ahmedabad' },
    { name: 'Before & After Gallery', path: '/before-after-results' },
    { name: 'Patient Testimonials & Reviews', path: '/patient-reviews' },
    { name: 'Dental Care Blog', path: '/blog-dental-care' },
    { name: 'Frequently Asked Questions', path: '/frequently-asked-questions' },
    { name: 'Book Appointment Online', path: '/book-appointment-online' },
    { name: 'Emergency Dental Care', path: '/emergency-dentist-ahmedabad' },
    { name: 'Contact & Directions', path: '/contact-us-ahmedabad' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Medical Disclaimer', path: '/medical-disclaimer' }
  ];

  return (
    <>
      <SEO 
        title="HTML Sitemap - Complete Website Navigation Map"
        description="Browse the complete sitemap directory for our dental clinic website. Access all treatment pages, doctor bios, blogs, and contact details."
        canonicalUrl="/sitemap"
      />

      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-5xl font-black text-dental-navy mt-2">
            Website Sitemap
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Hierarchy navigation of all pages, blogs, and individual treatments hosted on our premium dental portal.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Main Sections */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-sm text-dental-navy border-l-2 border-dental-aqua pl-2">
                Main Pages
              </h3>
              <div className="flex flex-col space-y-2">
                {mainPages.map((page) => (
                  <Link 
                    key={page.path} 
                    to={page.path}
                    className="hover:text-dental-aqua flex items-center gap-1 font-medium transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Individual Treatments */}
            <div className="space-y-4 md:col-span-2">
              <h3 className="font-display font-bold text-sm text-dental-navy border-l-2 border-dental-aqua pl-2">
                Dental Treatment Brochures
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {treatmentsData.map((t) => (
                  <Link 
                    key={t.id} 
                    to={`/${t.id}`}
                    className="hover:text-dental-aqua flex items-center gap-1 font-medium transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                    {t.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Blogs and Legal */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm text-dental-navy border-l-2 border-dental-aqua pl-2">
                  Dental Blogs
                </h3>
                <div className="flex flex-col space-y-2">
                  {blogData.map((b) => (
                    <Link 
                      key={b.slug} 
                      to={`/blog-dental-care/${b.slug}`}
                      className="hover:text-dental-aqua flex items-center gap-1 font-medium transition-colors line-clamp-1"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                      {b.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm text-dental-navy border-l-2 border-dental-aqua pl-2">
                  Legal Statements
                </h3>
                <div className="flex flex-col space-y-2">
                  {legalPages.map((page) => (
                    <Link 
                      key={page.path} 
                      to={page.path}
                      className="hover:text-dental-aqua flex items-center gap-1 font-medium transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
