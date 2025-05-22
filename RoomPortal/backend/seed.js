import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Room from './models/roomModel.js';
import User from './models/userModel.js';

dotenv.config();

const clearData = async () => {
  console.log('Clearing existing data...');
  await Room.deleteMany({});
  await User.deleteMany({});
};

const seedData = async () => {
  const rooms = [

    {
      name: 'Shared Flat',
      location: 'Patan, Kathmandu',
      preferredTenants: 5,
      price: 120,
      description: 'This shared flat is ideal for a group of students or working professionals. It features two spacious bedrooms, a fully-equipped kitchen with basic utensils, and a cozy common living area with a sofa set and television. The neighborhood is peaceful yet close to local shops, cafes, and public transport facilities. It’s a perfect blend of comfort and convenience.',
      type: 'flat',
      amenities: ['Wi-Fi', 'Shared Kitchen', 'Hot Water'],
      images: ['shared_flat.png', 'shared_flat2.png'],
      preferredGender: 'Any',
      size: 500
    },
    {
      name: 'Single Room',
      location: 'Kathmandu Durbar Square, Kathmandu',
      preferredTenants: 1,
      price: 60,
      description: 'This single room is designed for individuals seeking a budget-friendly yet comfortable space. It comes with a bed, wardrobe, study table, and access to shared bathroom facilities. Located in the heritage-rich area of Durbar Square, it offers a quiet living environment with easy access to grocery stores, eateries, and cultural attractions.',
      type: 'room',
      amenities: ['Wi-Fi', 'Hot Water', 'Shared Bathroom'],
      images: ['single-room.jpg'],
      preferredGender: 'Any',
      size: 250
    },
    {
      name: 'Two-Bedroom Apartment',
      location: 'Jorpati, Kathmandu',
      preferredTenants: 2,
      price: 200,
      description: 'This beautifully furnished two-bedroom apartment features a spacious living room, separate dining area, modern kitchen, and a small balcony that provides a scenic view of the neighborhood. Ideal for small families or roommates, the apartment is situated close to schools, hospitals, and public transportation.',
      type: 'apartment',
      amenities: ['Wi-Fi', 'Balcony', 'Hot Water'],
      images: ['two_bedroom_apartment1.png', 'two_bedroom_apartment2.png'],
      preferredGender: 'Any',
      size: 800
    },
    {
      name: 'Studio Flat',
      location: 'New Road, Kathmandu',
      preferredTenants: 3,
      price: 100,
      description: 'A stylish and compact studio flat perfect for students or young professionals. It offers an open-plan design that includes a combined living area, sleeping space, and kitchenette. Located in the bustling New Road area, tenants will enjoy quick access to markets, public transport, and restaurants.',
      type: 'flat',
      amenities: ['Wi-Fi', 'Hot Water', 'Mini Fridge'],
      images: ['studio_flat.png', 'studio_flat2.png'],
      preferredGender: 'Any',
      size: 300
    },
    {
      name: 'Family Apartment',
      location: 'Kalimati, Kathmandu',
      preferredTenants: 5,
      price: 250,
      description: 'This spacious family apartment includes three well-lit bedrooms, a large living area with a dining setup, and a fully functional kitchen. It’s located in a residential area of Kalimati known for its community-friendly atmosphere. Suitable for families looking for a long-term stay.',
      type: 'apartment',
      amenities: ['Wi-Fi', 'Hot Water', 'Shared Bathroom'],
      images: ['family_apartment1.png'],
      preferredGender: 'Any',
      size: 1000
    },
    {
      name: 'One-Bedroom Flat',
      location: 'Lazimpat, Kathmandu',
      preferredTenants: 2,
      price: 150,
      description: 'Located in the upscale area of Lazimpat, this one-bedroom flat is ideal for couples or young professionals. It includes a bright bedroom, a cozy living room, and a separate kitchen with storage cabinets. The flat is near cafes, embassies, and public transportation options.',
      type: 'flat',
      amenities: ['Wi-Fi', 'Hot Water', 'Cable TV'],
      images: ['one_bedroom_flat.png'],
      preferredGender: 'Any',
      size: 450
    },
    {
      name: 'Guest Room',
      location: 'Boudhanath, Kathmandu',
      preferredTenants: 2,
      price: 70,
      description: 'This quiet and clean guest room is perfect for travelers or short-term tenants. It features a comfortable bed, a table, and access to shared amenities. Located near the famous Boudhanath Stupa, it offers a peaceful stay in a culturally rich environment with access to cafes and local shops.',
      type: 'room',
      amenities: ['Wi-Fi', 'Hot Water', 'Shared Bathroom'],
      images: ['guest_room1.png', 'guest_room2.png'],
      preferredGender: 'Any',
      size: 200
    }
  ];

  for (const room of rooms) {
    const existingRoom = await Room.findOne({ name: room.name, location: room.location });
    if (!existingRoom) {
      await Room.create(room);
      console.log(`Inserted room: ${room.name}`);
    }
  }
};

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log('Connected to MongoDB');

    await clearData();
    await seedData();

    console.log('Seeding completed');
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    mongoose.connection.close();
  }
};

start();