import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, CheckCircle, User, Mail } from "lucide-react";
import { doctors } from "@/data/doctors";
import { useToast } from "@/hooks/use-toast";
import { appointmentStorage } from "@/utils/localStorage";

export default function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const doctor = doctors.find(d => d.id === id);
  
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    selectedDay: '',
    selectedTime: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Doctor not found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.patientName || !formData.email || !formData.selectedDay || !formData.selectedTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Save appointment to localStorage
      const savedAppointment = appointmentStorage.saveAppointment({
        doctorId: doctor.id,
        doctorName: doctor.name,
        patientName: formData.patientName,
        email: formData.email,
        selectedDay: formData.selectedDay,
        selectedTime: formData.selectedTime
      });

      setIsSubmitted(true);
      toast({
        title: "Appointment Booked!",
        description: `Your appointment with ${doctor.name} has been confirmed and saved.`,
      });

      console.log('Appointment saved:', savedAppointment);
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error saving your appointment. Please try again.",
        variant: "destructive"
      });
      console.error('Error saving appointment:', error);
    }
  };

  const handleTimeSelect = (day: string, time: string) => {
    setFormData(prev => ({
      ...prev,
      selectedDay: day,
      selectedTime: time
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 shadow-medical">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4">Appointment Confirmed!</h1>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p><strong>Doctor:</strong> {doctor.name}</p>
              <p><strong>Date:</strong> {formData.selectedDay}</p>
              <p><strong>Time:</strong> {formData.selectedTime}</p>
              <p><strong>Patient:</strong> {formData.patientName}</p>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              A confirmation email has been sent to {formData.email}
            </p>
            <Button onClick={() => navigate('/')} className="w-full bg-success hover:bg-success/90 text-success-foreground">
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(`/doctor/${doctor.id}`)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Profile
        </Button>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment with {doctor.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Doctor Info */}
              <div className="flex items-center space-x-4 p-4 bg-accent-light rounded-lg">
                <img
                  src={doctor.profileImage}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{doctor.name}</h3>
                  <p className="text-muted-foreground">{doctor.specialization}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Patient Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Patient Information
                  </h3>
                  
                  <div>
                    <Label htmlFor="patientName">Full Name *</Label>
                    <Input
                      id="patientName"
                      type="text"
                      value={formData.patientName}
                      onChange={(e) => setFormData(prev => ({...prev, patientName: e.target.value}))}
                      placeholder="Enter your full name"
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      placeholder="Enter your email"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                {/* Schedule Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Select Date & Time
                  </h3>
                  
                  <div className="space-y-4">
                    {doctor.schedule.filter(day => day.slots.length > 0).map((day) => (
                      <div key={day.day} className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">{day.day}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {day.slots.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              variant={formData.selectedDay === day.day && formData.selectedTime === slot ? "default" : "outline"}
                              size="sm"
                              onClick={() => handleTimeSelect(day.day, slot)}
                              className="text-xs"
                            >
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {formData.selectedDay && formData.selectedTime && (
                    <Badge className="status-available">
                      <Calendar className="w-3 h-3 mr-1" />
                      Selected: {formData.selectedDay} at {formData.selectedTime}
                    </Badge>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}