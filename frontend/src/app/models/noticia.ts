export interface Noticia {
  id: number;
  titulo: string;
  imagem: string;
  conteudo: string;
  diaPostagem: string;
}

export interface NoticiaRequest {
  titulo: string;
  imagem: string;
  conteudo: string;
  diaPostagem: string;
}
