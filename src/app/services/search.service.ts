import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Modelcoche } from '../componets/modelcoche';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private Url = '../assets/miscoches.json';

  constructor(private http: HttpClient) {
    /* test */
    //this.print("invoca servicio");
    //this.getJSON().subscribe(data => {
    //console.log(data);
    //});
  }

  /* test*/
  public getJSON(content:string): Observable<Modelcoche> {
    return this.http.get<any>(this.Url).pipe(
      map(mapa => {
        const c = mapa.find((m: { modelo: string; }) => m.modelo.includes(content) ||m.modelo.includes(content.toUpperCase()) || m.modelo===content);
        return c; // Devuelve true si el modelo de coche existe
      })
    );
  }

}
