import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly baseUrl = 'http://localhost:8080/adm';

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<string> {
    return this.http.post(`${this.baseUrl}/login`, request, {
      responseType: 'text',
    });
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('adm_logged');
  }

  setLoggedIn(login: string): void {
    sessionStorage.setItem('adm_logged', login);
  }

  logout(): void {
    sessionStorage.removeItem('adm_logged');
  }

  getLogin(): string | null {
    return sessionStorage.getItem('adm_logged');
  }
}
