import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiasService } from '../../services/noticias';
import { NoticiaRequest } from '../../models/noticia';

@Component({
  selector: 'app-cadastro-noticia',
  standalone: false,
  templateUrl: './cadastro-noticia.html',
  styleUrls: ['./cadastro-noticia.css'],
})
export class CadastroNoticia {
  noticia: NoticiaRequest = {
    titulo: '',
    imagem: '',
    conteudo: '',
    diaPostagem: new Date().toISOString().split('T')[0],
  };

  erro: string = '';
  sucesso: string = '';
  carregando: boolean = false;

  constructor(
    private noticiasService: NoticiasService,
    private router: Router
  ) {}

  salvar(): void {
    this.erro = '';
    this.sucesso = '';

    if (!this.noticia.titulo || !this.noticia.imagem || !this.noticia.conteudo || !this.noticia.diaPostagem) {
      this.erro = 'Todos os campos são obrigatórios.';
      return;
    }

    if (this.noticia.titulo.length < 3) {
      this.erro = 'Título deve ter pelo menos 3 caracteres.';
      return;
    }

    this.carregando = true;

    this.noticiasService.create(this.noticia).subscribe({
      next: () => {
        this.sucesso = 'Notícia cadastrada com sucesso!';
        this.carregando = false;
        setTimeout(() => this.router.navigate(['/noticias']), 1200);
      },
      error: (err) => {
        this.erro = err?.error?.message || 'Erro ao cadastrar notícia.';
        this.carregando = false;
      },
    });
  }

  voltar(): void {
    this.router.navigate(['/noticias']);
  }
}
