import { Component } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';
declare var $:any;
declare function HOME_INIT([]):any;
declare function INIT_SWIPER([]):any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    public AuthService:AuthService,
  ){

  }
  ngOnInit():void{
    setTimeout(()=>{
      HOME_INIT($);
      INIT_SWIPER($);
    },50);

    // if (!this.AuthService.user) {
    //   this.AuthService.router.navigateByUrl("/auth/login")
    // }
  }
}
