import { Routes } from '@angular/router';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';

export const routes: Routes = [
    {path:'tutorials',component:TutorialsListComponent},
    {path: 'tutorials/:id', component:TutorialDetailsComponent},
    {path:'add',component:AddTutorialComponent}
];
