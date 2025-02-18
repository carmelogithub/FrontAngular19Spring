import { Component, Input } from '@angular/core';
import { Tutorial } from '../tutorial';
import { TutorialServiceService } from '../tutorial-service.service';
import { ActivatedRoute,  Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tutorial-details',
  imports: [FormsModule],
  templateUrl: './tutorial-details.component.html',
  styleUrl: './tutorial-details.component.css'
})
export class TutorialDetailsComponent {

  @Input() viewMode=false;

  @Input() currentTutorial: Tutorial={
    title:'',
    description:'',
    published:false
  };

  constructor(private servicio:TutorialServiceService,
    private route:ActivatedRoute,
  private router:Router) { }

  ngOnInit(): void {
    if(!this.viewMode){
       this.getTutorial(this.route.snapshot.params['id']);
    }
   
    //console.log(this.currentTutorial.id);
  }

  getTutorial(id:string):void{
    this.servicio.get(id).subscribe({
      next: (data)=>{
        this.currentTutorial=data;
        console.log(data);
      }
  });
  }//cierra getTutorial

  deleteTutorial():void{
    console.log("eliminar tutorial");
    this.servicio.delete(this.currentTutorial.id).subscribe({
      next:(data)=>{
        //console.log(data);
        console.log("Tutorial eliminado ahora sí");
        this.router.navigate(['/tutorials']); //pendiente
      }
    });
  }//cierra deleteTutorial

  updateTutorial():void{
    console.log("actualizar tutorial");
    this.servicio.update(this.currentTutorial.id,this.currentTutorial).subscribe({
      next:(data)=>{
        console.log("Tutorial actualizado");
        this.router.navigate(['/tutorials']);
      }
    });
  }

}//cierra class
