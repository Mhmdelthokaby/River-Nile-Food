import { Component } from '@angular/core';
import { CardProductComponent } from '../card-product/card-product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardProductComponent ,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    {
      image: 'assets/images/product2.jpg',
      category: 'Oil',
      title: 'River Nile Oil',
      price: '$15.00',
      rating: 4.3
    },
    {
      image: 'assets/images/product3.jpg',
      category: 'Honey',
      title: 'Organic Honey',
      price: '$12.00',
      rating: 4.7
    },
    {
      image: 'assets/images/product4.jpg',
      category: 'Oil',
      title: 'Whole Grain Bread',
      price: '$5.00',
      rating: 4.0
    },
    {
      image: 'assets/images/product1.jpg',
      category: 'Oil',
      title: 'Assorted Coffee',
      price: '$10.00',
      rating: 4.5
    }
  ];
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
  ];
}
