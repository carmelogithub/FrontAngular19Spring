import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TutorialServiceService } from '../tutorial-service.service';
import { Tutorial } from '../tutorial';
import { TutorialDetailsComponent } from '../tutorial-details/tutorial-details.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tutorials-list',
  imports: [NgFor,TutorialDetailsComponent,RouterLink],
  templateUrl: './tutorials-list.component.html',
  styleUrl: './tutorials-list.component.css'
})
export class TutorialsListComponent {
tutorials:any[]=[];
currentId=-1;
currentTutorial:Tutorial={};
title='';

  constructor(private servicio:TutorialServiceService) { }

  ngOnInit(): void {
    this.servicio.getAll().subscribe((data)=>{this.tutorials=data});
    console.log(this.tutorials);
  }
  setActiveTutorial(tutorial:Tutorial, index:number):void{
    //console.log(tutorial);
    this.currentTutorial=tutorial;
    //this.currentId=tutorial.id;
    this.currentId=index;
  }
}//cierra clas
