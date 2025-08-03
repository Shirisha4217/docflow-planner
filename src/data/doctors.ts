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
  },
  {
    id: '7',
    name: 'Dr. Amanda Foster',
    specialization: 'Gynecologist',
    profileImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=300&fit=crop&crop=face',
    availability: 'Available Today',
    rating: 4.8,
    experience: '13 years',
    education: 'MD from Yale Medical School',
    about: 'Dr. Foster specializes in women\'s health, reproductive medicine, and minimally invasive gynecological procedures. She provides comprehensive care for women of all ages.',
    schedule: [
      { day: 'Monday', slots: ['8:30 AM', '10:00 AM', '1:00 PM'] },
      { day: 'Tuesday', slots: ['9:00 AM', '11:00 AM', '2:30 PM'] },
      { day: 'Wednesday', slots: ['8:00 AM', '10:30 AM', '3:00 PM'] },
      { day: 'Thursday', slots: ['9:30 AM', '1:30 PM'] },
      { day: 'Friday', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] }
    ]
  },
  {
    id: '8',
    name: 'Dr. David Martinez',
    specialization: 'Gastroenterologist', 
    profileImage: 'https://images.unsplash.com/photo-1596015920359-95bd31c33ac5?w=300&h=300&fit=crop&crop=face',
    availability: 'Available Tomorrow',
    rating: 4.7,
    experience: '16 years',
    education: 'MD from University of Chicago',
    about: 'Dr. Martinez is an expert in digestive health and liver diseases. He specializes in endoscopic procedures and inflammatory bowel disease management.',
    schedule: [
      { day: 'Monday', slots: [] },
      { day: 'Tuesday', slots: ['8:00 AM', '9:30 AM', '11:00 AM'] },
      { day: 'Wednesday', slots: ['10:00 AM', '1:30 PM', '3:00 PM'] },
      { day: 'Thursday', slots: ['9:00 AM', '2:00 PM'] },
      { day: 'Friday', slots: ['8:30 AM', '11:30 AM', '2:30 PM'] }
    ]
  },
  {
    id: '9',
    name: 'Dr. Rachel Green',
    specialization: 'Ophthalmologist',
    profileImage: 'https://images.unsplash.com/photo-1594824864097-0297ba4fef82?w=300&h=300&fit=crop&crop=face',
    availability: 'Available Today',
    rating: 4.9,
    experience: '9 years',
    education: 'MD from Duke University',
    about: 'Dr. Green specializes in comprehensive eye care, cataract surgery, and retinal diseases. She uses the latest technology for diagnosis and treatment.',
    schedule: [
      { day: 'Monday', slots: ['9:00 AM', '10:30 AM', '2:00 PM'] },
      { day: 'Tuesday', slots: ['8:30 AM', '11:00 AM', '1:30 PM', '3:30 PM'] },
      { day: 'Wednesday', slots: ['9:30 AM', '2:30 PM'] },
      { day: 'Thursday', slots: ['10:00 AM', '1:00 PM', '3:00 PM'] },
      { day: 'Friday', slots: ['9:00 AM', '11:30 AM'] }
    ]
  },
  {
    id: '10',
    name: 'Dr. Kevin Park',
    specialization: 'Urologist',
    profileImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
    availability: 'Fully Booked',
    rating: 4.8,
    experience: '18 years',
    education: 'MD from University of Pennsylvania',
    about: 'Dr. Park is a leading urologist specializing in minimally invasive procedures, kidney stones, and prostate health. He has extensive experience in robotic surgery.',
    schedule: [
      { day: 'Monday', slots: [] },
      { day: 'Tuesday', slots: [] },
      { day: 'Wednesday', slots: ['4:00 PM'] },
      { day: 'Thursday', slots: ['3:30 PM'] },
      { day: 'Friday', slots: ['10:00 AM'] }
    ]
  },
  {
    id: '11',
    name: 'Dr. Maria Santos',
    specialization: 'Endocrinologist',
    profileImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
    availability: 'Available Today',
    rating: 4.7,
    experience: '12 years',
    education: 'MD from Baylor College of Medicine',
    about: 'Dr. Santos specializes in diabetes management, thyroid disorders, and hormonal imbalances. She provides personalized treatment plans for endocrine conditions.',
    schedule: [
      { day: 'Monday', slots: ['8:00 AM', '9:30 AM', '1:00 PM'] },
      { day: 'Tuesday', slots: ['10:00 AM', '11:30 AM', '2:30 PM'] },
      { day: 'Wednesday', slots: ['9:00 AM', '1:30 PM', '3:00 PM'] },
      { day: 'Thursday', slots: ['8:30 AM', '2:00 PM'] },
      { day: 'Friday', slots: ['9:30 AM', '11:00 AM', '2:30 PM'] }
    ]
  },
  {
    id: '12',
    name: 'Dr. Thomas Wright',
    specialization: 'Pulmonologist',
    profileImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
    availability: 'Available Tomorrow',
    rating: 4.8,
    experience: '14 years',
    education: 'MD from Washington University',
    about: 'Dr. Wright is an expert in respiratory medicine, treating asthma, COPD, and lung infections. He specializes in sleep disorders and critical care medicine.',
    schedule: [
      { day: 'Monday', slots: [] },
      { day: 'Tuesday', slots: ['9:00 AM', '10:30 AM', '2:00 PM'] },
      { day: 'Wednesday', slots: ['8:30 AM', '11:00 AM', '1:30 PM'] },
      { day: 'Thursday', slots: ['9:30 AM', '2:30 PM', '4:00 PM'] },
      { day: 'Friday', slots: ['10:00 AM', '1:00 PM'] }
    ]
  },
  {
    id: '13',
    name: 'Dr. Jennifer Adams',
    specialization: 'Rheumatologist',
    profileImage: 'https://images.unsplash.com/photo-1651008376796-0b6b9b2e1a6e?w=300&h=300&fit=crop&crop=face',
    availability: 'Available Today',
    rating: 4.9,
    experience: '11 years',
    education: 'MD from Northwestern University',
    about: 'Dr. Adams specializes in autoimmune diseases, arthritis, and inflammatory conditions. She focuses on early diagnosis and innovative treatment approaches.',
    schedule: [
      { day: 'Monday', slots: ['9:00 AM', '11:00 AM', '2:30 PM'] },
      { day: 'Tuesday', slots: ['8:30 AM', '10:00 AM', '1:00 PM'] },
      { day: 'Wednesday', slots: ['9:30 AM', '2:00 PM', '3:30 PM'] },
      { day: 'Thursday', slots: ['10:00 AM', '1:30 PM'] },
      { day: 'Friday', slots: ['9:00 AM', '11:30 AM', '3:00 PM'] }
    ]
  },
  {
    id: '14',
    name: 'Dr. Stephen Lee',
    specialization: 'Otolaryngologist',
    profileImage: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop&crop=face',
    availability: 'Available Today',
    rating: 4.7,
    experience: '15 years',
    education: 'MD from University of Michigan',
    about: 'Dr. Lee is an ENT specialist treating conditions of the ear, nose, and throat. He performs both medical and surgical treatments with a focus on patient comfort.',
    schedule: [
      { day: 'Monday', slots: ['8:00 AM', '10:00 AM', '1:30 PM'] },
      { day: 'Tuesday', slots: ['9:30 AM', '11:30 AM', '2:00 PM'] },
      { day: 'Wednesday', slots: ['8:30 AM', '1:00 PM', '3:30 PM'] },
      { day: 'Thursday', slots: ['10:30 AM', '2:30 PM'] },
      { day: 'Friday', slots: ['9:00 AM', '12:00 PM', '3:00 PM'] }
    ]
  },
  {
    id: '15',
    name: 'Dr. Nicole Taylor',
    specialization: 'Oncologist',
    profileImage: 'https://images.unsplash.com/photo-1594824864097-0297ba4fef82?w=300&h=300&fit=crop&crop=face',
    availability: 'Fully Booked',
    rating: 4.9,
    experience: '17 years',
    education: 'MD from Memorial Sloan Kettering',
    about: 'Dr. Taylor is a medical oncologist specializing in cancer treatment and research. She provides compassionate care and cutting-edge treatments for various cancer types.',
    schedule: [
      { day: 'Monday', slots: [] },
      { day: 'Tuesday', slots: [] },
      { day: 'Wednesday', slots: ['2:00 PM'] },
      { day: 'Thursday', slots: ['3:00 PM'] },
      { day: 'Friday', slots: ['11:00 AM', '4:00 PM'] }
    ]
  }
];