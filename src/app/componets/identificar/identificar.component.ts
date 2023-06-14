import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-identificar',
  templateUrl: './identificar.component.html',
  styleUrls: ['./identificar.component.css']
})
export class IdentificarComponent {

  titulo:string="Identificar coche";
  base64Output: string | ArrayBuffer | null | undefined;
  capture:boolean=false;

  constructor(private toastr: ToastrService){}

  onFileSelected(event:Event) {
    const target = event.target as HTMLInputElement;
    if (!target.files) return;

    const file = target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64Output = reader.result;
      this.capture=true;
      console.log(reader.result);
    };
  }

  upload(){
    this.toastr.success("El archivo se ha subido", '¡Correcto!', {
      timeOut: 3000, positionClass: 'toast-top-center'
    });
  }

}
