import { Component, NgModule } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string = '';
  password:string = '';
  constructor(
    public AuthService:AuthService,
  ){

  }
  ngOnInit():void{
    // console.log(this.AuthService.user)
    // if (this.AuthService.user) {
    //   this.AuthService.router.navigateByUrl("/")
    // }
    //else{
    //   this.AuthService.router.navigateByUrl("/auth/login")
    // }
  }
  login(){
    if(!this.email){
      alert("NECESITAS DIGITAR UN CORREO ELECTRONICO")
    }
    if (!this.password) {
      alert("NECESITAS DIGITAR UNA CONTRASEÑA")
    }
    this.AuthService.login_streaming(this.email,this.password).subscribe((resp:any)=>{
      console.log(resp)
      if (resp) {
        this.AuthService.router.navigateByUrl("/")
      }else{
        alert("LAS CREDENCIALES SON INCORRECTAS")
      }
    })
  }

}
