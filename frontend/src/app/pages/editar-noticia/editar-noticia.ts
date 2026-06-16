import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiasService } from '../../services/noticias';
import { NoticiaRequest } from '../../models/noticia';

@Component({
  selector: 'app-editar-noticia',
  standalone: false,
  templateUrl: './editar-noticia.html',
  styleUrls: ['./editar-noticia.css'],
})
export class EditarNoticia implements OnInit {
  id!: number;
  noticia: NoticiaRequest = {
    titulo: '',
    imagem: '',
    conteudo: '',
    diaPostagem: '',
  };

  erro: string = '';
  sucesso: string = '';
  carregando: boolean = false;
  carregandoDados: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.noticiasService.getById(this.id).subscribe({
      next: (data) => {
        this.noticia = {
          titulo: data.titulo,
          imagem: data.imagem,
          conteudo: data.conteudo,
          diaPostagem: data.diaPostagem,
        };
        this.carregandoDados = false;
      },
      error: () => {
        this.erro = 'Notícia não encontrada.';
        this.carregandoDados = false;
      },
    });
  }

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

    this.noticiasService.update(this.id, this.noticia).subscribe({
      next: () => {
        this.sucesso = 'Notícia atualizada com sucesso!';
        this.carregando = false;
        setTimeout(() => this.router.navigate(['/noticias']), 1200);
      },
      error: (err) => {
        this.erro = err?.error?.message || 'Erro ao atualizar notícia.';
        this.carregando = false;
      },
    });
  }

  voltar(): void {
    this.router.navigate(['/noticias']);
  }
}
