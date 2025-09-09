import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  constructor(private http: HttpClient) {}

  login(body: any) {
    return this.http.post(`${this.apiUrl}/login`, body, {
      withCredentials: true,
    });
  }
}
