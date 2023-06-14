export class Modelcoche {
  find(arg0: (m: { modelo: string; }) => boolean) {
    throw new Error('Method not implemented.');
  }
  id: number;
  logo:string;
  marca: string;
  modelo: string;
  potencia:string;
  carburante:string;
  foto:string;
  pdf:string;


  constructor(id:number,logo:string,marca: string, modelo:string,potencia:string,carburante:string,foto:string,pdf:string) {
      this.id = id;
      this.logo=logo;
      this.marca = marca;
      this.modelo = modelo;
      this.potencia = potencia;
      this.carburante = carburante;
      this.foto=foto;
      this.pdf=pdf;

  }
}
