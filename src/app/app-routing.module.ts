import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemFormComponent } from './tem-form/tem-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'temp-form',component:TemFormComponent},
  {path:'reactive-form',component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
