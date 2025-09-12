import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [CommonModule, ScrollingModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll();
  }

  trackById(index: number, product: any) {
    console.log('trackBy check:', product.id);
    return product.id;
  }
}
