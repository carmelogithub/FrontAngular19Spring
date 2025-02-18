import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19-spring';

  constructor(private toastr:ToastrService){}

  mostrar(){
    console.log("mostrar");
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
