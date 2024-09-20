import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MenuExpedienteComponent } from './menu-expediente/menu-expediente.component';
import { CrearExpedienteComponent } from './crear-expediente/crear-expediente.component';
import { ModificarExpedienteComponent } from './modificar-expediente/modificar-expediente.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    LoginComponent,
    HomeComponent,
    PruebaComponent,
    MenuExpedienteComponent,
    CrearExpedienteComponent,
    ModificarExpedienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
