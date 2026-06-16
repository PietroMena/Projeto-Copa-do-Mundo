import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login';
import { LoginRequest } from '../../models/login-request';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  loginData: LoginRequest = { login: '', senha: '' };
  erro: string = '';
  carregando: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/noticias']);
    }
  }

  entrar(): void {
    this.erro = '';

    if (!this.loginData.login || !this.loginData.senha) {
      this.erro = 'Preencha login e senha.';
      return;
    }

    this.carregando = true;

    this.loginService.login(this.loginData).subscribe({
      next: () => {
        this.loginService.setLoggedIn(this.loginData.login);
        this.router.navigate(['/noticias']);
      },
      error: (err) => {
        this.carregando = false;
        this.erro =
          err?.error || 'Credenciais inválidas. Tente novamente.';
      },
    });
  }
}
