import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginauthGuard } from './loginauth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent,

    
  },
  {
    path:'Home' , component:HomeComponent , canActivate:[LoginauthGuard],
  },

  {
    path:'**',component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [LoginComponent,HomeComponent,PageNotFoundComponent];

