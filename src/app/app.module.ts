import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CochesComponent } from './componets/coches/coches.component';
import { CocheComponent } from './componets/coche/coche.component';
import { FormularioComponent } from './componets/formulario/formulario.component';
import { LateralComponent } from './componets/lateral/lateral.component';
import { BarraComponent } from './componets/barra/barra.component';
import { InterpolacionComponent } from './componets/interpolacion/interpolacion.component';
import { HomeComponent } from './componets/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IndexComponent } from './componets/index/index.component';
import { IdentificarComponent } from './componets/identificar/identificar.component';
import { FichasComponent } from './componets/fichas/fichas.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { GrupoComponent } from './componets/grupo/grupo.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesComponent,
    CocheComponent,
    FormularioComponent,
    LateralComponent,
    BarraComponent,
    InterpolacionComponent,
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
