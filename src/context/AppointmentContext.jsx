import React, { createContext, useContext, useState } from 'react';

const AppointmentContext = createContext();

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  const bookAppointment = async (formData) => {
    setLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const newAppointment = {
      id: Date.now(),
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    setAppointments((prev) => [...prev, newAppointment]);
    setLastBookingDetails(newAppointment);
    setLoading(false);
    setIsSuccessModalOpen(true);
    return { success: true };
  };

  return (
    <AppointmentContext.Provider value={{
      appointments,
      loading,
      isSuccessModalOpen,
      setIsSuccessModalOpen,
      lastBookingDetails,
      bookAppointment
    }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
}
