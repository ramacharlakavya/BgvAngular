import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchByIdComponent } from './search-by-id/search-by-id.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SetStatusComponent } from './set-status/set-status.component';
import { LoginSucessComponent } from './login-sucess/login-sucess.component';


const routes: Routes = [
  {path:'',redirectTo:'/LoginComponent',pathMatch:'full'},
  {path:'app-login',component:LoginComponent},
  {
    path: 'app-login-sucess',
    component: LoginSucessComponent,
    children: [
      {path:'app-search-by-id',component:SearchByIdComponent},
      {path:'app-search-by-name',component:SearchByNameComponent},
      {path:'app-set-status',component:SetStatusComponent}
      ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





