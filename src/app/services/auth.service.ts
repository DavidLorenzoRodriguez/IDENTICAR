import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private usersUrl = '../assets/data/users.json'; // Ruta del archivo JSON con los usuarios
  token:string="";

  constructor(private http: HttpClient,private router:Router) {
    /* test */

    //this.print("invoca servicio");
    this.getJSON().subscribe(data => {
    //console.log(data);
    });
  }

  /* test*/

  public getJSON(): Observable<any> {
    return this.http.get(this.usersUrl);
  }



  login(username: string, password: string): Observable<Boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        if(!!user) this.token=user.username;
        return !!user; // Devuelve true si el usuario y contraseña coinciden
      })
    );
  }

  getAuth():string{
    return this.token;
  }

  logout(){
    this.token="";
    this.router.navigate(["/index"]);
  }
}
