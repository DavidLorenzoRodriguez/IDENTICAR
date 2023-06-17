import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CochesComponent } from './componets/cars/coches.component';
import { CocheComponent } from './componets/car/coche.component';
import { FormularioComponent } from './componets/login/formulario.component';
import { BarraComponent } from './shares/navbar/barra.component';
import { HomeComponent } from './componets/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IndexComponent } from './componets/index/index.component';
import { IdentificarComponent } from './componets/identificar/identificar.component';
import { FichasComponent } from './componets/datasheets/fichas.component';
import { SidebarComponent } from './shares/sidebar/sidebar.component';
import { GrupoComponent } from './componets/group/grupo.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesComponent,
    CocheComponent,
    FormularioComponent,
    BarraComponent,
    HomeComponent,
    IndexComponent,
    IdentificarComponent,
    FichasComponent,
    SidebarComponent,
    GrupoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,RouterModule,RouterOutlet,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
