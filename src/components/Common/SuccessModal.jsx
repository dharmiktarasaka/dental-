import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, Calendar, Clock, User, Phone, Check } from 'lucide-react';
import { useAppointment } from '../../context/AppointmentContext';

export default function SuccessModal() {
  const { isSuccessModalOpen, setIsSuccessModalOpen, lastBookingDetails } = useAppointment();

  if (!lastBookingDetails) return null;

  return (
    <AnimatePresence>
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSuccessModalOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl z-10 border border-slate-100 overflow-hidden"
          >
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-dental-mint-light rounded-full blur-xl -mr-6 -mt-6"></div>
            
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close success dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mt-3">
              {/* Animated check circle */}
              <div className="mx-auto w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-dental-navy">Request Received!</h3>
              <p className="text-slate-500 text-xs mt-1 px-4">
                Thank you for choosing our clinic. Your dental appointment request has been logged successfully.
              </p>
            </div>

            {/* Summarized Details */}
            <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3.5 text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-dental-aqua" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">Patient Name</span>
                  <span className="font-semibold text-slate-800">{lastBookingDetails.name}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-dental-aqua" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">Date</span>
                  <span className="font-semibold text-slate-800">
                    {new Date(lastBookingDetails.date).toLocaleDateString('en-IN', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-dental-aqua" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">Preferred Time Slot</span>
                  <span className="font-semibold text-slate-800">{lastBookingDetails.time}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-dental-aqua" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">Treatment Services</span>
                  <span className="font-semibold text-slate-800">{lastBookingDetails.treatment}</span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mt-6 text-center space-y-4">
              <p className="text-[11px] text-slate-400 font-medium">
                * Our care coordinator will call or WhatsApp you at <strong className="text-slate-600">{lastBookingDetails.phone}</strong> within 2 hours to confirm your final slot timing.
              </p>
              
              <button
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full btn-primary py-3 rounded-full text-xs font-bold shadow-md cursor-pointer"
              >
                Okay, Got It
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
