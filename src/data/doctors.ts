export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  profileImage: string;
  availability: 'Available Today' | 'Fully Booked' | 'Available Tomorrow';
  rating: number;
  experience: string;
  education: string;
  about: string;
  schedule: {
    day: string;
    slots: string[];
  }[];
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    profileImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
    availability: 'Available Today',
    rating: 4.9,
    experience: '12 years',
    education: 'MD from Harvard Medical School',
    about: 'Dr. Johnson is a board-certified cardiologist with extensive experience in treating cardiovascular diseases. She specializes in preventive cardiology and has published numerous research papers.',
    schedule: [
      { day: 'Monday', slots: ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM'] },
      { day: 'Tuesday', slots: ['9:00 AM', '11:00 AM', '1:00 PM'] },
      { day: 'Wednesday', slots: ['10:00 AM', '2:30 PM', '4:00 PM'] },
      { day: 'Thursday', slots: ['9:30 AM', '1:30 PM', '3:00 PM'] },
      { day: 'Friday', slots: ['9:00 AM', '10:00 AM', '2:00 PM'] }
    ]
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialization: 'Pediatrician',
    profileImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
    availability: 'Available Today',
    rating: 4.8,
    experience: '8 years',
    education: 'MD from Johns Hopkins',
    about: 'Dr. Chen is dedicated to providing comprehensive pediatric care. He has a gentle approach with children and specializes in developmental pediatrics and childhood nutrition.',
    schedule: [
      { day: 'Monday', slots: ['8:00 AM', '9:30 AM', '11:00 AM', '2:00 PM'] },
      { day: 'Tuesday', slots: ['8:30 AM', '10:00 AM', '1:30 PM', '3:00 PM'] },
      { day: 'Wednesday', slots: ['9:00 AM', '10:30 AM', '2:30 PM'] },
      { day: 'Thursday', slots: ['8:00 AM', '11:30 AM', '1:00 PM'] },
      { day: 'Friday', slots: ['9:00 AM', '10:30 AM', '12:00 PM'] }
    ]
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialization: 'Dermatologist',
    profileImage: 'https://images.unsplash.com/photo-1594824864097-0297ba4fef82?w=300&h=300&fit=crop&crop=face',
    availability: 'Fully Booked',
    rating: 4.9,
    experience: '15 years',
    education: 'MD from Stanford Medical School',
    about: 'Dr. Rodriguez is a leading dermatologist specializing in cosmetic and medical dermatology. She has expertise in skin cancer detection and advanced dermatological procedures.',
    schedule: [
      { day: 'Monday', slots: [] },
      { day: 'Tuesday', slots: [] },
      { day: 'Wednesday', slots: ['3:00 PM', '4:30 PM'] },
      { day: 'Thursday', slots: ['2:00 PM'] },
      { day: 'Friday', slots: ['10:00 AM', '11:30 AM'] }
    ]
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialization: 'Orthopedist',
    profileImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
    availability: 'Available Tomorrow',
    rating: 4.7,
    experience: '10 years',
    education: 'MD from UCLA Medical School',
    about: 'Dr. Wilson specializes in sports medicine and orthopedic surgery. He has worked with professional athletes and focuses on minimally invasive surgical techniques.',
    schedule: [
      { day: 'Monday', slots: [] },
      { day: 'Tuesday', slots: ['9:00 AM', '10:30 AM', '2:00 PM'] },
      { day: 'Wednesday', slots: ['8:30 AM', '11:00 AM', '1:30 PM'] },
      { day: 'Thursday', slots: ['9:30 AM', '2:30 PM'] },
      { day: 'Friday', slots: ['10:00 AM', '3:00 PM'] }
    ]
  },
  {
    id: '5',
    name: 'Dr. Lisa Thompson',
    specialization: 'Neurologist',
    profileImage: 'https://images.unsplash.com/photo-1651008376796-0b6b9b2e1a6e?w=300&h=300&fit=crop&crop=face',
    availability: 'Available Today',
    rating: 4.8,
    experience: '14 years',
    education: 'MD from Mayo Clinic',
    about: 'Dr. Thompson is a renowned neurologist with expertise in treating complex neurological conditions including epilepsy, multiple sclerosis, and movement disorders.',
    schedule: [
      { day: 'Monday', slots: ['9:00 AM', '11:00 AM', '2:30 PM'] },
      { day: 'Tuesday', slots: ['8:30 AM', '10:00 AM', '1:00 PM', '3:30 PM'] },
      { day: 'Wednesday', slots: ['9:30 AM', '2:00 PM'] },
      { day: 'Thursday', slots: ['10:00 AM', '11:30 AM', '3:00 PM'] },
      { day: 'Friday', slots: ['9:00 AM', '1:30 PM'] }
    ]
  },
  {
    id: '6',
    name: 'Dr. Robert Kim',
    specialization: 'Psychiatrist',
    profileImage: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop&crop=face',
    availability: 'Available Today',
    rating: 4.9,
    experience: '11 years',
    education: 'MD from Columbia Medical School',
    about: 'Dr. Kim is a compassionate psychiatrist specializing in anxiety disorders, depression, and ADHD. He takes a holistic approach to mental health treatment.',
    schedule: [
      { day: 'Monday', slots: ['10:00 AM', '1:00 PM', '3:00 PM'] },
      { day: 'Tuesday', slots: ['9:00 AM', '11:30 AM', '2:30 PM'] },
      { day: 'Wednesday', slots: ['8:30 AM', '10:30 AM', '1:30 PM'] },
      { day: 'Thursday', slots: ['9:30 AM', '2:00 PM', '4:00 PM'] },
      { day: 'Friday', slots: ['10:00 AM', '12:00 PM'] }
    ]
  }
];