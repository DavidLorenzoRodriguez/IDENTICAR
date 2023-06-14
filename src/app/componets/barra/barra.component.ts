import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit{

  token:string="";
  islogin:boolean=false;
  islogout:boolean=true;

  constructor(private auth:AuthService){}

  ngOnInit(): void {
    this.isLoged();
    console.log(this.token);
  }

  public login(): void {
    // Lógica de inicio de sesión
    this.auth.login;
    //this.token= this.auth.getAuth();
    if(this.token!=="") {
      this.islogin=true;
      this.islogout=false;
    }else{
      this.islogin=false;
      this.islogout=true;
    }
  }

  logout():void{
    if(this.token!=="") {
      this.islogin=true;
      this.islogout=false;
    }else{
      this.islogin=false;
      this.islogout=true;
    }
    this.auth.logout();
  }

  isLoged(){
        this.token= this.auth.getAuth();
        if(this.token!=="") {
          this.islogin=true;
          this.islogout=false;
        }else{
          this.islogin=false;
          this.islogout=true;
        }
  }


}
