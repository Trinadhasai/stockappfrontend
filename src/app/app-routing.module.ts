import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockComponent } from './stock/stock.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
 //{path:'',redirectTo:'/login'},
 {path:'<app-company></app-company>',component:CompanyComponent},
  {path:'stock/:id',component:StockComponent},
  { path: 'stockDetail/:id', component: StockComponent },

  //{ path: 'first-component', component:CompanyComponent },
 // { path: 'second-component', component:StockComponent }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
