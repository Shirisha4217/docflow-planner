export interface AppointmentData {
  id: string;
  doctorId: string;
  doctorName: string;
  patientName: string;
  email: string;
  selectedDay: string;
  selectedTime: string;
  createdAt: string;
  status: 'confirmed' | 'cancelled';
}

const APPOINTMENTS_KEY = 'healthcare-appointments';

export const appointmentStorage = {
  // Save appointment data
  saveAppointment: (appointmentData: Omit<AppointmentData, 'id' | 'createdAt' | 'status'>): AppointmentData => {
    const appointments = appointmentStorage.getAppointments();
    const newAppointment: AppointmentData = {
      ...appointmentData,
      id: generateId(),
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    };
    
    appointments.push(newAppointment);
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));
    return newAppointment;
  },

  // Get all appointments
  getAppointments: (): AppointmentData[] => {
    try {
      const appointments = localStorage.getItem(APPOINTMENTS_KEY);
      return appointments ? JSON.parse(appointments) : [];
    } catch (error) {
      console.error('Error loading appointments:', error);
      return [];
    }
  },

  // Get appointments for a specific patient
  getAppointmentsByEmail: (email: string): AppointmentData[] => {
    const appointments = appointmentStorage.getAppointments();
    return appointments.filter(apt => apt.email.toLowerCase() === email.toLowerCase());
  },

  // Get appointments for a specific doctor
  getAppointmentsByDoctor: (doctorId: string): AppointmentData[] => {
    const appointments = appointmentStorage.getAppointments();
    return appointments.filter(apt => apt.doctorId === doctorId);
  },

  // Cancel appointment
  cancelAppointment: (appointmentId: string): boolean => {
    const appointments = appointmentStorage.getAppointments();
    const appointmentIndex = appointments.findIndex(apt => apt.id === appointmentId);
    
    if (appointmentIndex === -1) return false;
    
    appointments[appointmentIndex].status = 'cancelled';
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));
    return true;
  },

  // Delete appointment
  deleteAppointment: (appointmentId: string): boolean => {
    const appointments = appointmentStorage.getAppointments();
    const filteredAppointments = appointments.filter(apt => apt.id !== appointmentId);
    
    if (filteredAppointments.length === appointments.length) return false;
    
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(filteredAppointments));
    return true;
  },

  // Clear all appointments (for development/testing)
  clearAllAppointments: (): void => {
    localStorage.removeItem(APPOINTMENTS_KEY);
  }
};

// Generate a simple unique ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}