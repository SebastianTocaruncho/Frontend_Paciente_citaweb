import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importar AppRoutingModule independientemente de la condición
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Incluir AppRoutingModule aquí, se importará independientemente de la condición
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
