import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardProductComponent } from '../card-product/card-product.component';

@Component({
  selector: 'app-tours',
  imports: [CommonModule  ,CardProductComponent],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {
    products = [
        {
            image: 'assets/images/product2.jpg',
            category: 'Oil',
            title: 'River Nile Oil',
            description: 'Experience the rich flavor of River Nile Oil, extracted from premium quality seeds grown along the banks of the Nile. This oil is perfect for cooking, baking, and salad dressings, offering a smooth and delicious taste.',
            price: 12.99, // Price in currency units
            rating: 4.5 // Rating out of 5
        },
        {
            image: 'assets/images/product3.jpg',
            category: 'Honey',
            title: 'Organic Honey',
            description: 'Indulge in the natural sweetness of our Organic Honey, sourced from organic farms where bees pollinate a variety of flowers. This honey is free from additives and preservatives, making it a healthy choice for your family.',
            price: 8.49,
            rating: 4.8
        },
        {
            image: 'assets/images/product4.jpg',
            category: 'Bakery',
            title: 'Whole Grain Bread',
            description: 'Enjoy the wholesome goodness of our Whole Grain Bread, made with 100% whole grain flour and without any artificial preservatives. Packed with fiber and nutrients, it\'s the perfect choice for a healthy lifestyle.',
            price: 5.99,
            rating: 4.2
        },
        {
            image: 'assets/images/product1.jpg',
            category: 'Beverages',
            title: 'Assorted Coffee',
            description: 'Discover a variety of premium coffee blends with our Assorted Coffee collection. From mild and smooth to bold and robust, there\'s a flavor to suit every coffee lover\'s preference.',
            price: 14.99,
            rating: 4.6
        },
        {
            image: 'assets/images/product2.jpg',
            category: 'Beverages',
            title: 'Assorted Coffee',
            description: 'Discover a variety of premium coffee blends with our Assorted Coffee collection. From mild and smooth to bold and robust, there\'s a flavor to suit every coffee lover\'s preference.',
            price: 14.99,
            rating: 4.6
        },
        {
            image: 'assets/images/product1.jpg',
            category: 'Beverages',
            title: 'Assorted Coffee',
            description: 'Discover a variety of premium coffee blends with our Assorted Coffee collection. From mild and smooth to bold and robust, there\'s a flavor to suit every coffee lover\'s preference.',
            price: 14.99,
            rating: 4.6
        },
        {
            image: 'assets/images/product3.jpg',
            category: 'Beverages',
            title: 'Assorted Coffee',
            description: 'Discover a variety of premium coffee blends with our Assorted Coffee collection. From mild and smooth to bold and robust, there\'s a flavor to suit every coffee lover\'s preference.',
            price: 14.99,
            rating: 4.6
        }
    ];
}
