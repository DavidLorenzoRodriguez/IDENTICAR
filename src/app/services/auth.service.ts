import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = '../data/users.json'; // Ruta del archivo JSON con los usuarios

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        return !!user; // Devuelve true si el usuario y contraseña coinciden
      })
    );
  }
}
