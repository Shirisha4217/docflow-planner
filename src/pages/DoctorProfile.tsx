import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Calendar, Clock, MapPin, GraduationCap } from "lucide-react";
import { doctors } from "@/data/doctors";

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const doctor = doctors.find(d => d.id === id);
  
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

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available Today':
        return 'status-available';
      case 'Fully Booked':
        return 'status-busy';
      default:
        return 'bg-accent-light text-accent';
    }
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
          Back to Doctors
        </Button>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Doctor Info */}
          <div className="md:col-span-2">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6 mb-6">
                  <img
                    src={doctor.profileImage}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-border"
                  />
                  
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                      {doctor.name}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-4">
                      {doctor.specialization}
                    </p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{doctor.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-5 h-5 text-muted-foreground" />
                        <span>{doctor.experience} experience</span>
                      </div>
                    </div>
                    
                    <Badge className={`${getAvailabilityColor(doctor.availability)} border-0 mb-4`}>
                      <Calendar className="w-4 h-4 mr-1" />
                      {doctor.availability}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Education
                    </h3>
                    <p className="text-muted-foreground">{doctor.education}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">About</h3>
                    <p className="text-muted-foreground leading-relaxed">{doctor.about}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Schedule & Booking */}
          <div>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Available Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {doctor.schedule.map((day) => (
                  <div key={day.day} className="border-b border-border pb-3 last:border-b-0">
                    <h4 className="font-medium mb-2">{day.day}</h4>
                    {day.slots.length > 0 ? (
                      <div className="grid grid-cols-2 gap-2">
                        {day.slots.map((slot) => (
                          <Badge 
                            key={slot} 
                            variant="outline" 
                            className="justify-center py-1"
                          >
                            {slot}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">No available slots</p>
                    )}
                  </div>
                ))}
                
                <Button 
                  className="w-full mt-6" 
                  size="lg"
                  onClick={() => navigate(`/book/${doctor.id}`)}
                  disabled={doctor.availability === 'Fully Booked'}
                >
                  {doctor.availability === 'Fully Booked' ? 'Fully Booked' : 'Book Appointment'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}