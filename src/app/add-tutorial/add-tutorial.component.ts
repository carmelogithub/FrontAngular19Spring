import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TutorialServiceService } from '../tutorial-service.service';
import { Tutorial } from '../tutorial';

@Component({
  selector: 'app-add-tutorial',
  imports: [FormsModule],
  templateUrl: './add-tutorial.component.html',
  styleUrl: './add-tutorial.component.css'
})
export class AddTutorialComponent {

tutorial:Tutorial = {
  title:'',
  description:'',
  published:false
}

  constructor(private servicio:TutorialServiceService) { }
  
  saveTutorial(){
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };
    this.servicio.create(data).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    }
    );//cierra subscribe
    this.tutorial = {
      title:'',
      description:''
    };

  }//cierra saveTutorial
}//cierra clase
