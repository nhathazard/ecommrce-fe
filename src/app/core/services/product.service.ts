import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private apiUrl = `${environment.apiUrl}/product`;
  constructor(private http: HttpClient) { }
  products = signal<Product[]>([]);
   getAll() {
    this.http.get<Product[]>(this.apiUrl).subscribe({
      next: (data) => this.products.set(data),
      error: (err) => console.error(err),
    });
  }
}
