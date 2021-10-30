import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { ProgramComponent } from './program.component';
import { FacultyComponent } from './faculty.component';
import { ApplicationComponent } from './application.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ResourceComponent } from './resource.component';
const routes: Routes = [
  {path : 'home',component: HomeComponent},
  {path : 'news',component : NewsComponent},
  {path : 'course',component : ProgramComponent},
  {path : 'faculty',component : FacultyComponent},
  {path : 'register',component: ApplicationComponent},
  {path : 'contact',component:ContactComponent},
  {path : 'resource',component:ResourceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
