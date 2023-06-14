import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {

  token:string="";

  constructor(private auth:AuthService,private router: Router,private toastr: ToastrService){}

  submitForm(user:string,pass:string)  {
    this.auth.login(user,pass).subscribe(
      data => {
        //console.log(data);
        if (data) {
          console.log('Usuario autenticado');
          ////////
          this.token = this.auth.getAuth();
          console.log(this.token);
          this.router.navigate(['/home']);
        } else {
          this.toastr.error("Usuario y/o clave incorrecta", 'Failed', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          console.log('Autenticación fallida');
        }
    });
  }
}


/*
    this.auth.login(user,pass).subscribe(
      (response: any) => {

        if (response.authenticated) {
          console.log('Usuario autenticado');
          //this.respuesta="ok";
        } else {
          console.log('Autenticación fallida');
          this.respuesta="ko";
        }
      },
      (error: any) => {
        console.error('Error en la solicitud:', error);
        this.respuesta="no se"
      }
    );
*/


  /*
  submitForm(form:NgForm)  {
    this.print("aceptar");

    const user=form.value.username;
    const pass=form.value.password;

    this.auth.login(user,pass).subscribe(
      (response: any) => {

        if (response.authenticated) {
          console.log('Usuario autenticado');
          this.respuesta="ok";
        } else {
          console.log('Autenticación fallida');
          this.respuesta="ko";
        }
      },
      (error: any) => {
        console.error('Error en la solicitud:', error);
        this.respuesta="no se"
      }
    );
  }
  */

