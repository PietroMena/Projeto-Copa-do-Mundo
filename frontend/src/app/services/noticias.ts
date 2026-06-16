import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia, NoticiaRequest } from '../models/noticia';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  private readonly baseUrl = 'http://localhost:8080/noticias';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.baseUrl);
  }

  getById(id: number): Observable<Noticia> {
    return this.http.get<Noticia>(`${this.baseUrl}/${id}`);
  }

  buscarPorTitulo(titulo: string): Observable<Noticia[]> {
    const params = new HttpParams().set('titulo', titulo);
    return this.http.get<Noticia[]>(`${this.baseUrl}/buscar`, { params });
  }

  create(noticia: NoticiaRequest): Observable<Noticia> {
    return this.http.post<Noticia>(this.baseUrl, noticia);
  }

  update(id: number, noticia: NoticiaRequest): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, noticia);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
