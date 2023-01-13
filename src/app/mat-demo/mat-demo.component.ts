import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../company/company';
import { CompanyService } from '../company/company.service';
import { StockDetailComponent } from '../stock-detail/stock-detail.component';
import { stock } from '../stock/stockmodel';

@Component({
  selector: 'app-mat-demo',
  templateUrl: './mat-demo.component.html',
  styleUrls: ['./mat-demo.component.css']
})
export class MatDemoComponent implements OnInit {
  //data:{} | any;
  compModel: Company = new Company();
  companyarray: Array<Company>=[];
  masterarray: Array<Company>=[];
  stockarray:Array<stock>=[];
  
 data:any;
 
  constructor(@Optional()@Inject(MAT_DIALOG_DATA)  data:Company,
  public dialogRef: MatDialogRef<StockDetailComponent>,
  public companyService:CompanyService,
 public _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
  }




  addCompanyDetails(): void
  {
    this.companyService.addCompany(this.compModel).subscribe(data=>
      {
        console.log(data);
        // if(data){
        //   this.viewAllCompanies();
        // }
        this.data = JSON.stringify(data);
        this.companyarray.push(this.data);
        alert('New Company Registration Successfull');
        if(data){
          this.dialogRef.close(data);
        }
        
      },
      error=>{
        alert('New Company Registration NotSuccessfull');

          console.log(error);
         }
      )


  }

  close(): void {
    this.dialogRef.close(); //on close pass data to parent
   }
}
