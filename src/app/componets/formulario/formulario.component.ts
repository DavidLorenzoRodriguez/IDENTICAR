import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {

  username:string="";
  password:string="";
/*
  constructor(private authService: AuthService){}

  onLoginClick(): void {
    this.authService.login(this.username, this.password).subscribe(
      authenticated => {
        if (authenticated) {
          // Realiza acciones cuando el inicio de sesión es exitoso
          console.log('Inicio de sesión exitoso');
        } else {
          // Realiza acciones cuando el inicio de sesión falla
          console.log('Usuario o contraseña incorrectos');
        }
      },
      error => {
        // Manejo de errores
        console.log('Error al realizar el inicio de sesión', error);
      }
    );
  }
*/
}
