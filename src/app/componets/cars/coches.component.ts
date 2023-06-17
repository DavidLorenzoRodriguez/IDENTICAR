import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelcoche } from '../../models/modelcoche';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})


export class CochesComponent {
  titulo="Mis coches"
  coches: Modelcoche[] = [];
  usuario:string="";
  private carsUrl = ""; // Ruta del archivo JSON con los usuarios


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

  constructor(private http: HttpClient,auth:AuthService) {
    this.usuario = auth.getAuth();
  }

  /* test*/
  public getJSON(): Observable<any[]> {
    this.carsUrl = '../assets/data/'+this.usuario+'.json';
    return this.http.get<any[]>(this.carsUrl);
  }


}
