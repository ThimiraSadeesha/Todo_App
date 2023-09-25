import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { authGuard } from './gaurd/auth.guard';



const routes: Routes = [
  {

    path: '',
    component: HomeComponent,
    canActivate: []
  },
  {

    path: 'login',
    component: LoginComponent
  },
  {

    path: 'register',
    component: RegisterComponent
  },
  {

    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  },
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
