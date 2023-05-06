import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {path:'trans',component:TransactionsComponent},
  {path:'dashb',component:DashboardComponent},
  {path:'reg',component:RegisterComponent},
  {path:'',component:LoginComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
