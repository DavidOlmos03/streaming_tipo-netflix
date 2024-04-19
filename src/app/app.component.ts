import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var $:any;                        //para declarar o llamar plantillas de js
declare function HOME_INIT([]):any;
declare function INIT_SWIPER([]):any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'streaming_tipo-nexflit';

  constructor(){

  }

  ngOnInit():void {
    setTimeout(()=>{
      HOME_INIT($);
      INIT_SWIPER($);
    },50)
  }
}
