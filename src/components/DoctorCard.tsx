import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar } from "lucide-react";
import { Doctor } from "@/data/doctors";
import { useNavigate } from "react-router-dom";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const navigate = useNavigate();

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
    <Card className="overflow-hidden shadow-soft hover:shadow-medical transition-medical">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img
              src={doctor.profileImage}
              alt={doctor.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-border"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {doctor.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {doctor.specialization}
                </p>
                <div className="flex items-center space-x-1 mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{doctor.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    • {doctor.experience} experience
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Badge 
                className={`${getAvailabilityColor(doctor.availability)} border-0`}
              >
                <Calendar className="w-3 h-3 mr-1" />
                {doctor.availability}
              </Badge>
              
              <Button 
                variant="medical" 
                size="sm"
                onClick={() => navigate(`/doctor/${doctor.id}`)}
              >
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}