import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './pages/login/login';
import { Noticias } from './pages/noticias/noticias';
import { CadastroNoticia } from './pages/cadastro-noticia/cadastro-noticia';
import { EditarNoticia } from './pages/editar-noticia/editar-noticia';

@NgModule({
  // Apenas componentes TRADICIONAIS ficam aqui
  declarations: [
    Login
  ],
  // Componentes STANDALONE e módulos ficam aqui
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule,
    App, 
    Noticias, 
    CadastroNoticia, 
    EditarNoticia
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App],
})
export class AppModule {}