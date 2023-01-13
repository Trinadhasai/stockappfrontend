

import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatDemoComponent } from "src/app/mat-demo/mat-demo.component";
import { stock } from '../stock/stockmodel';
import { StockService } from '../stock/stock.service';
import { Company } from '../company/company';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  id: any;

  newdata:any 
  companyModel :Company = new Company();
  stockModel: stock = new stock();
  Stockarray: Array<stock>=[];
  viewAllCompanies: Array<Company>=[];
  

  constructor(@Optional()@Inject(MAT_DIALOG_DATA)  data:stock,
       public dialogRef: MatDialogRef<StockDetailComponent>,
       public stockService:StockService,
      public _Activatedroute:ActivatedRoute)
     {
     this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
      console.log(data);
    this.newdata=data;
  });

   }


   close(): void {
    this.dialogRef.close(); //on close pass data to parent
   }

  ngOnInit(): void {
    
   
  }


  addStockPrice(companyCode:Company)
  {
    
    this.stockService.addstock(this.stockModel,this.newdata).subscribe(data=>
      {
        this.newdata = JSON.stringify(data);
        console.log(data);
        this.Stockarray.push(this.newdata);
        console.log(this.Stockarray);
        alert('Stock Price updated successfully');
        if(data){
          this.dialogRef.close(data);
        }
        
      },
      
      error=>
      {
        console.log(error);
        alert('Stock Price updated not successfully enter proper value in numbers')
      }
      )

  }

}
