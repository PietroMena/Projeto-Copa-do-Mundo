import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './pages/login/login';
import { Noticias } from './pages/noticias/noticias';
import { CadastroNoticia } from './pages/cadastro-noticia/cadastro-noticia';
import { EditarNoticia } from './pages/editar-noticia/editar-noticia';

@NgModule({
  declarations: [App, Login, Noticias, CadastroNoticia, EditarNoticia],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
