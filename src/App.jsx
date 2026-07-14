import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppointmentProvider } from './context/AppointmentContext';

// Components
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import ScrollToTop from './components/Common/ScrollToTop';
import WhatsAppFloating from './components/Common/WhatsAppFloating';
import SuccessModal from './components/Common/SuccessModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import TreatmentDetails from './pages/TreatmentDetails';
import Dentists from './pages/Dentists';
import DentistProfile from './pages/DentistProfile';
import BeforeAfter from './pages/BeforeAfter';
import PatientReviews from './pages/PatientReviews';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import FAQs from './pages/FAQs';
import BookAppointment from './pages/BookAppointment';
import Emergency from './pages/Emergency';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import MedicalDisclaimer from './pages/MedicalDisclaimer';
import SitemapPage from './pages/SitemapPage';
import NotFound from './pages/NotFound';

// Static Data for Dynamic Routing
import { treatmentsData } from './data/treatmentsData';

export default function App() {
  return (
    <HelmetProvider>
      <AppointmentProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-dental-sky/30 selection:text-dental-navy">
            {/* Header & Sticky Navigations */}
            <Header />
            <ScrollToTop />
            
            {/* Main Page Content */}
            <main className="flex-grow">
              <Routes>
                {/* Main Core Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about-clinic-in-ahmedabad" element={<About />} />
                <Route path="/treatments-in-ahmedabad" element={<Treatments />} />
                <Route path="/dentists-in-ahmedabad" element={<Dentists />} />
                <Route path="/dentist-in-ahmedabad/:slug" element={<DentistProfile />} />
                <Route path="/before-after-results" element={<BeforeAfter />} />
                <Route path="/patient-reviews" element={<PatientReviews />} />
                <Route path="/blog-dental-care" element={<Blog />} />
                <Route path="/blog-dental-care/:slug" element={<BlogArticle />} />
                <Route path="/frequently-asked-questions" element={<FAQs />} />
                <Route path="/book-appointment-online" element={<BookAppointment />} />
                <Route path="/emergency-dentist-ahmedabad" element={<Emergency />} />
                <Route path="/contact-us-ahmedabad" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsConditions />} />
                <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />
                <Route path="/sitemap" element={<SitemapPage />} />

                {/* Explicit SEO Root Routes for all 15 Individual Treatments */}
                {treatmentsData.map((treatment) => (
                  <Route 
                    key={treatment.id} 
                    path={`/${treatment.id}`} 
                    element={<TreatmentDetails treatmentId={treatment.id} />} 
                  />
                ))}

                {/* Fallback 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            {/* Footer containing service areas, timings, and licenses */}
            <Footer />

            {/* Floating Contact Utilities */}
            <WhatsAppFloating />
            <SuccessModal />
          </div>
        </Router>
      </AppointmentProvider>
    </HelmetProvider>
  );
}
