import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent  } from "./modules/auth/login/login.component";


const routes: Routes = [
  { path : '' , component :  LoginComponent },
  { path : 'home' , loadChildren : './modules/home/home.module#HomeModule'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
