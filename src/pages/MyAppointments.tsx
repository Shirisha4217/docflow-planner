import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Mail, Clock, Trash2 } from "lucide-react";
import { appointmentStorage, AppointmentData } from "@/utils/localStorage";
import { useToast } from "@/hooks/use-toast";

export default function MyAppointments() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);
  const [showAppointments, setShowAppointments] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    const userAppointments = appointmentStorage.getAppointmentsByEmail(email);
    setAppointments(userAppointments);
    setShowAppointments(true);

    if (userAppointments.length === 0) {
      toast({
        title: "No Appointments Found",
        description: "No appointments found for this email address.",
      });
    }
  };

  const handleCancelAppointment = (appointmentId: string) => {
    const success = appointmentStorage.cancelAppointment(appointmentId);
    if (success) {
      // Refresh appointments
      const userAppointments = appointmentStorage.getAppointmentsByEmail(email);
      setAppointments(userAppointments);
      
      toast({
        title: "Appointment Cancelled",
        description: "Your appointment has been cancelled successfully.",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to cancel appointment.",
        variant: "destructive"
      });
    }
  };

  const getStatusBadge = (appointment: AppointmentData) => {
    if (appointment.status === 'cancelled') {
      return <Badge className="bg-destructive text-destructive-foreground">Cancelled</Badge>;
    }
    return <Badge className="status-available">Confirmed</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                My Appointments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {!showAppointments ? (
                <form onSubmit={handleSearch} className="space-y-4">
                  <div>
                    <Label htmlFor="searchEmail">Enter your email to view appointments</Label>
                    <Input
                      id="searchEmail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="mt-1"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Find My Appointments
                  </Button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                      Appointments for {email}
                    </h3>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setShowAppointments(false);
                        setEmail('');
                        setAppointments([]);
                      }}
                    >
                      Search Again
                    </Button>
                  </div>

                  {appointments.length === 0 ? (
                    <Card>
                      <CardContent className="text-center py-8">
                        <Calendar className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">No appointments found</p>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="space-y-4">
                      {appointments.map((appointment) => (
                        <Card key={appointment.id} className="border border-border">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <User className="w-4 h-4 text-muted-foreground" />
                                  <span className="font-medium">{appointment.doctorName}</span>
                                  {getStatusBadge(appointment)}
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                  <Clock className="w-4 h-4" />
                                  <span>{appointment.selectedDay} at {appointment.selectedTime}</span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Patient: {appointment.patientName}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  Booked: {new Date(appointment.createdAt).toLocaleDateString()}
                                </div>
                              </div>
                              
                              {appointment.status === 'confirmed' && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleCancelAppointment(appointment.id)}
                                  className="text-destructive hover:text-destructive"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}