import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-blog',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogs = [
    {
      title: "10 Tips for Effective Time Management",
      image: "assets/images/img-slide1.jpg",
      DateTime: "2023-10-15 09:00",
      content: "Time management is crucial for productivity. Here are 10 tips to help you manage your time effectively...",
    },
    {
      title: "The Future of Artificial Intelligence",
      image: "assets/images/img-slide2.jpg",
      DateTime: "2023-10-10 14:30",
      content: "Artificial Intelligence is rapidly evolving. Discover what the future holds for AI and its impact on industries...",
    },
    {
      title: "Healthy Eating Habits for a Better Lifestyle",
      image: "assets/images/img-slide3.jpg",
      DateTime: "2023-10-05 11:15",
      content: "Adopting healthy eating habits can transform your life. Learn how to make better food choices and improve your well-being...",
    },
    {
      title: "The Importance of Mental Health in the Workplace",
      image: "assets/images/img-slide4.jpg",
      DateTime: "2023-09-28 10:45",
      content: "Mental health is just as important as physical health, especially in the workplace. Learn how to create a supportive environment for mental well-being...",
    },
    {
      title: "5 Essential Skills for Remote Work Success",
      image: "assets/images/img-slide5.jpg",
      DateTime: "2023-09-20 08:30",
      content: "Remote work is becoming the norm. Discover the 5 essential skills you need to thrive in a remote work environment...",
    },
    {
      title: "The Rise of Renewable Energy: What You Need to Know",
      image: "assets/images/img-slide6.jpg",
      DateTime: "2023-09-15 12:00",
      content: "Renewable energy is transforming the world. Learn about the latest trends and technologies in renewable energy and how they impact our future...",
    },
    {
      title: "How to Build a Successful Startup from Scratch",
      image: "assets/images/img-slide2.jpg",
      DateTime: "2023-09-10 16:20",
      content: "Starting a business is challenging but rewarding. Here’s a step-by-step guide to building a successful startup from the ground up...",
    },
    {
      title: "The Benefits of Regular Exercise for Mental and Physical Health",
      image: "assets/images/img-slide3.jpg",
      DateTime: "2023-09-05 07:50",
      content: "Regular exercise is key to maintaining both mental and physical health. Discover the benefits and tips for staying active...",
    },
    {
      title: "Exploring the Latest Trends in Web Development",
      image: "assets/images/img-slide1.jpg",
      DateTime: "2023-08-30 13:10",
      content: "Web development is constantly evolving. Stay updated with the latest trends and technologies shaping the future of the web...",
    },
  ];
}