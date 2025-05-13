import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
config();

const seedUsers = [
  {
    email: "priya.sharma@example.com",
    fullName: "Priya Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    email: "ananya.verma@example.com",
    fullName: "Ananya Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    email: "isha.patel@example.com",
    fullName: "Isha Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    email: "deepa.nair@example.com",
    fullName: "Deepa Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    email: "kavya.reddy@example.com",
    fullName: "Kavya Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    email: "sneha.mehta@example.com",
    fullName: "Sneha Mehta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    email: "neha.singh@example.com",
    fullName: "Neha Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    email: "aarti.joshi@example.com",
    fullName: "Aarti Joshi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    email: "rahul.kumar@example.com",
    fullName: "Rahul Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    email: "arjun.pillai@example.com",
    fullName: "Arjun Pillai",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    email: "rohit.patel@example.com",
    fullName: "Rohit Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    email: "vikram.reddy@example.com",
    fullName: "Vikram Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    email: "amit.sharma@example.com",
    fullName: "Amit Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    email: "sahil.verma@example.com",
    fullName: "Sahil Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    email: "anil.jain@example.com",
    fullName: "Anil Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/16.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
