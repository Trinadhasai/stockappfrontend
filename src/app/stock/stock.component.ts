import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { stock } from './stockmodel';
import { StockService} from './stock.service';
import { Company } from '../company/company';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  minStockprice: any;
  maxStockPrice: any;
  stockSumPrice:any;
  avgStockPrice: number|any;
  company: any;
  id: any;
  companyarray: any;
  
 // AllStocks: any;

  
  constructor(private http: HttpClient, private stockService:StockService ,private activatedroute:ActivatedRoute) {
   

   }

  data:{} | any;
  stockModel: stock = new stock();
  stockarray: Array<stock>=[];
  masterarray: Array<Company>=[];



  ngOnInit(): void {
   
   
    
  this.activatedroute.params.subscribe(params => {​​​​​​ 
    console.log( params)
  this.id=params['id']
  if(this.id != null){
    this.viewAllstocks(this.id);
  }
   }​​​​​​);
    

  }

 

  viewAllstocks(id: any)
  {
    this.stockService.getAllStocks(id).subscribe(
      data=>{
        console.log(data);
        this.companyarray = data.body;
        this.stockarray = data.body.stockPriceHistory;
        console.log(this.companyarray);

        console.log(this.stockarray);
        this.stockarray.sort((a:any,b:any)=>{
          return a.stockPrice- b.stockPrice;
        })
        this.minStockprice=this.stockarray[0].stockPrice;
        this.maxStockPrice=this.stockarray[this.stockarray.length-1].stockPrice;
        this.stockSumPrice=0;
        //this.avgStockPrice=0;
        this.stockarray.forEach(st=>{
           
          this.stockSumPrice=this.stockSumPrice + st.stockPrice;
          
        });
        this.avgStockPrice=this.stockSumPrice/this.stockarray.length;
      },
      error=>{
        console.log(error);
      }
    )
  }

 
  // getCompanyDetails(companyCode:number){
  //   this.stockService. getAllStocks(id).subscribe({
  //     next:(data) => {
  //       this.data=JSON.stringify(data);
  //       let details =JSON.parse(this.data);
  //       this.company=details['body']['responseObj'];
  //       console.log(this.company)
  //       this.stockarray=details['body']['responseObj']['stock'];
  //       console.log(this.stockarray);

  //       this.stockarray.sort((a:any,b:any)=>{
  //         return a.stockPrice- b.stockPrice;
  //       })
  //       this.minStockprice=this.stockarray[0].stockPrice;
  //       this.maxStockPrice=this.stockarray[this.stockarray.length-1].stockPrice;

  //       this.stockarray.forEach(stock=>{
  //         this.stockSumPrice=this.stockSumPrice + stock.stockPrice
  //       });
  //       this.avgStockPrice=this.stockSumPrice/this.stockarray.length;
  //     }
  //   })
  
  
  
    
  // }
}

