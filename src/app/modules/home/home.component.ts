import { Component } from '@angular/core';

declare var $:any;
declare function HOME_INIT([]):any;
declare function INIT_SWIPER([]):any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit():void{
    setTimeout(()=>{
      HOME_INIT($);
      INIT_SWIPER($);
    },50);
  }
}
