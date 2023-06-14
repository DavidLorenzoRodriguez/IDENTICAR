import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelcoche } from '../modelcoche';


@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})

export class CochesComponent {
  titulo="Mis coches"
  coches: Modelcoche[] = [];
  private carsUrl = '../assets/miscoches.json'; // Ruta del archivo JSON con los usuarios

  ngOnInit(){
    /* test */
    this.getJSON().subscribe(
      data => {
        this.coches = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  constructor(private http: HttpClient) {
  }

  /* test*/
  public getJSON(): Observable<any[]> {
    return this.http.get<any[]>(this.carsUrl);
  }


}
