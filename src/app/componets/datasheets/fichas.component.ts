import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Modelcoche } from '../../models/modelcoche';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent {

  titulo:string="Ficha tecnica";
  coches: Modelcoche | undefined ;
  private carsUrl = '../assets/miscoches.json';

  constructor(private search:SearchService){}

  buscar(valor:string){
    valor=valor.toLowerCase();
    this.search.getJSON(valor).subscribe(
      data => {
        if(data){
          console.log(data);
          this.coches = data;
        }else{
          console.log(data);
          this.coches = new Modelcoche(0,"","","","","","","");
        }
      }
    );
  }

}
