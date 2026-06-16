import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Noticias } from './pages/noticias/noticias';
import { CadastroNoticia } from './pages/cadastro-noticia/cadastro-noticia';
import { EditarNoticia } from './pages/editar-noticia/editar-noticia';

const routes: Routes = [
  { path: '', redirectTo: 'noticias', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'noticias', component: Noticias },
  { path: 'cadastro-noticia', component: CadastroNoticia },
  { path: 'editar-noticia/:id', component: EditarNoticia },
  { path: '**', redirectTo: 'noticias' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}