import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DoctorCard } from "@/components/DoctorCard";
import { SearchBar } from "@/components/SearchBar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Heart, Users, Clock, Star } from "lucide-react";
import { doctors } from "@/data/doctors";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = useMemo(() => {
    if (!searchTerm) return doctors;
    
    return doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const availableToday = doctors.filter(d => d.availability === 'Available Today').length;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-12">
          {/* Theme Toggle & My Appointments */}
          <div className="flex justify-between items-center mb-4">
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/appointments'}
              className="text-sm"
            >
              My Appointments
            </Button>
            <ThemeToggle />
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Find & Book Appointments with 
              <span className="gradient-medical bg-clip-text text-transparent"> Top Doctors</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with experienced healthcare professionals. Book appointments easily and manage your health with confidence.
            </p>
            
            <div className="flex justify-center mb-8">
              <SearchBar 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Search by doctor name or specialization..."
              />
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="p-4">
                  <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{doctors.length}</div>
                  <div className="text-sm text-muted-foreground">Expert Doctors</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Heart className="w-6 h-6 mx-auto mb-2 text-success" />
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-sm text-muted-foreground">Specializations</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <div className="text-2xl font-bold">{availableToday}</div>
                  <div className="text-sm text-muted-foreground">Available Today</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Star className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="text-sm text-muted-foreground">Avg Rating</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors List */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Our Doctors</h2>
            <p className="text-muted-foreground">
              {searchTerm ? `${filteredDoctors.length} doctors found` : `Showing ${doctors.length} available doctors`}
            </p>
          </div>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid gap-6">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-muted-foreground mb-4">
                No doctors found matching "{searchTerm}"
              </div>
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
