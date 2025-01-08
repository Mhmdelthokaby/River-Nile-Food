import { CommonModule } from '@angular/common';
import { Component ,Input} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-product',
  imports: [CommonModule ,RouterModule],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  @Input() product: any; // Input property to receive product data

}
