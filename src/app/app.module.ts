import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule} from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import { CompanyComponent } from './company/company.component';
import { HeaderComponent } from './header/header.component';
import { StockComponent } from './stock/stock.component';
import { MatDemoComponent } from './mat-demo/mat-demo.component';
import { MatRippleModule } from '@angular/material/core';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';


   
    
    
    





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompanyComponent,
    StockComponent,
    

          MatDemoComponent,
                UpdateCompanyComponent,
                StockDetailComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,

    MatRippleModule,
    
    MatFormFieldModule,
    MatIconModule,
        
    
    MatInputModule
  ],

  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
