import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, AlertCircle } from 'lucide-react';
import { useAppointment } from '../../context/AppointmentContext';
import { treatmentsData } from '../../data/treatmentsData';

export default function QuickAppointment({ compact = false }) {
  const { bookAppointment, loading } = useAppointment();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.treatment) newErrors.treatment = 'Please select a treatment';
    if (!formData.date) newErrors.date = 'Preferred date is required';
    if (!formData.time) newErrors.time = 'Preferred time slot is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    const result = await bookAppointment(formData);
    if (result.success) {
      // Clear form on success
      setFormData({
        name: '',
        phone: '',
        email: '',
        treatment: '',
        date: '',
        time: '',
        message: ''
      });
    }
  };

  return (
    <div className={`w-full bg-white rounded-3xl ${compact ? 'p-6 shadow-md' : 'p-8 md:p-10 shadow-premium border border-slate-100'}`}>
      {!compact && (
        <div className="mb-6 text-center lg:text-left">
          <span className="text-xs text-dental-aqua font-bold uppercase tracking-widest bg-dental-sky/10 px-3 py-1.5 rounded-full inline-block mb-2">Easy Booking</span>
          <h3 className="text-xl md:text-2xl font-bold text-dental-navy">Request a Dental Consultation</h3>
          <p className="text-slate-500 text-xs mt-1">Fill out the quick form below, and our care coordinator will reach out to confirm your slot.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rajesh Patel"
              className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm transition-colors ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-dental-aqua focus:ring-dental-sky/20'}`}
            />
          </div>
          {errors.name && (
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Contact Info (Phone & Email) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit number"
                className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm transition-colors ${errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-dental-aqua focus:ring-dental-sky/20'}`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rajesh@gmail.com"
                className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm transition-colors ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-dental-aqua focus:ring-dental-sky/20'}`}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Select Treatment */}
        <div>
          <label htmlFor="treatment" className="block text-xs font-semibold text-slate-700 mb-1">Select Dental Service *</label>
          <select
            name="treatment"
            id="treatment"
            value={formData.treatment}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-2xl border text-sm transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394A3B8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.7rem_auto] bg-[right_1.25rem_center] bg-no-repeat ${errors.treatment ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-dental-aqua'}`}
          >
            <option value="">-- Choose Treatment --</option>
            {treatmentsData.map((t) => (
              <option key={t.id} value={t.title}>{t.title}</option>
            ))}
          </select>
          {errors.treatment && (
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              {errors.treatment}
            </p>
          )}
        </div>

        {/* Date & Time Slot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Calendar className="w-4 h-4" />
              </div>
              <input
                type="date"
                name="date"
                id="date"
                min={new Date().toISOString().split('T')[0]} // Cannot book past dates
                value={formData.date}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm transition-colors ${errors.date ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-dental-aqua'}`}
              />
            </div>
            {errors.date && (
              <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.date}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="time" className="block text-xs font-semibold text-slate-700 mb-1">Time Slot *</label>
            <select
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-2xl border text-sm transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394A3B8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.7rem_auto] bg-[right_1.25rem_center] bg-no-repeat ${errors.time ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-dental-aqua'}`}
            >
              <option value="">-- Choose Slot --</option>
              <option value="9:00 AM - 11:00 AM">Morning (9:00 AM - 11:00 AM)</option>
              <option value="11:00 AM - 1:00 PM">Late Morning (11:00 AM - 1:00 PM)</option>
              <option value="4:00 PM - 6:00 PM">Evening (4:00 PM - 6:00 PM)</option>
              <option value="6:00 PM - 8:30 PM">Late Evening (6:00 PM - 8:30 PM)</option>
            </select>
            {errors.time && (
              <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.time}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">Message / Medical Notes (Optional)</label>
          <div className="relative">
            <div className="absolute top-3.5 left-3.5 text-slate-400 pointer-events-none">
              <MessageSquare className="w-4 h-4" />
            </div>
            <textarea
              name="message"
              id="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your dental issues..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 text-sm focus:border-dental-aqua focus:ring-dental-sky/20 transition-colors resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-dental-aqua to-dental-sky hover:from-dental-aqua-dark hover:to-dental-sky-dark text-white font-bold py-3.5 rounded-full text-sm cursor-pointer shadow-premium hover:shadow-premium-hover transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Booking appointment...</span>
            </>
          ) : (
            <span>Submit Appointment Request</span>
          )}
        </button>
      </form>
    </div>
  );
}
