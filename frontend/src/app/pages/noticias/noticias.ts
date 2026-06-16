import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiasService } from '../../services/noticias';
import { LoginService } from '../../services/login';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-noticias',
  standalone: false,
  templateUrl: './noticias.html',
  styleUrls: ['./noticias.css'],
})
export class Noticias implements OnInit {
  noticias: Noticia[] = [];
  carregando: boolean = true;
  erro: string = '';
  termoBusca: string = '';
  noticiaModal: Noticia | null = null;
  confirmandoDeleteId: number | null = null;

  constructor(
    private noticiasService: NoticiasService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarNoticias();
  }

  get isAdmin(): boolean {
    return this.loginService.isLoggedIn();
  }

  get loginAtual(): string {
    return this.loginService.getLogin() ?? '';
  }

  carregarNoticias(): void {
    this.carregando = true;
    this.erro = '';
    this.noticiasService.getAll().subscribe({
      next: (data) => {
        this.noticias = data;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Não foi possível carregar as notícias. Verifique se o servidor está rodando.';
        this.carregando = false;
      },
    });
  }

  buscar(): void {
    if (!this.termoBusca.trim()) {
      this.carregarNoticias();
      return;
    }
    this.carregando = true;
    this.erro = '';
    this.noticiasService.buscarPorTitulo(this.termoBusca.trim()).subscribe({
      next: (data) => {
        this.noticias = data;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Erro ao buscar notícias.';
        this.carregando = false;
      },
    });
  }

  limparBusca(): void {
    this.termoBusca = '';
    this.carregarNoticias();
  }

  verNoticia(noticia: Noticia): void {
    this.noticiaModal = noticia;
  }

  fecharModal(): void {
    this.noticiaModal = null;
  }

  editarNoticia(id: number): void {
    this.router.navigate(['/editar-noticia', id]);
  }

  pedirConfirmacaoDelete(id: number): void {
    this.confirmandoDeleteId = id;
  }

  cancelarDelete(): void {
    this.confirmandoDeleteId = null;
  }

  confirmarDelete(): void {
    if (this.confirmandoDeleteId === null) return;
    const id = this.confirmandoDeleteId;
    this.noticiasService.delete(id).subscribe({
      next: () => {
        this.noticias = this.noticias.filter((n) => n.id !== id);
        this.confirmandoDeleteId = null;
      },
      error: () => {
        this.erro = 'Erro ao excluir a notícia.';
        this.confirmandoDeleteId = null;
      },
    });
  }

  novaNoticia(): void {
    this.router.navigate(['/cadastro-noticia']);
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  formatarData(data: string): string {
    if (!data) return '';
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }
}
