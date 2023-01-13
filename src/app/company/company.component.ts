import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { MatDemoComponent } from '../mat-demo/mat-demo.component';
import { StockDetailComponent } from '../stock-detail/stock-detail.component';
import { StockComponent } from '../stock/stock.component';
import { stock } from '../stock/stockmodel';
import { UpdateCompanyComponent } from '../update-company/update-company.component';
import { Company } from './company';
import { CompanyService } from './company.service';





@Component({
  selector: 'app-company',
  
  
  templateUrl:'./company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  id: any;

  constructor(private http: HttpClient, public companyService:CompanyService,
    public dialog: MatDialog,
    private router: Router, private route: ActivatedRoute,
    private activatedroute:ActivatedRoute) { }

  data:{} | any;
  compModel: Company = new Company();
  companyarray: Array<Company>=[];
  masterarray: Array<Company>=[];
  stockarray:Array<stock>=[];

 


  ngOnInit(): void {
    this.viewAllCompanies();
    this.activatedroute.params.subscribe(params => {​​​​​​ 
      console.log( params)
    this.id=params['id']
    if(this.id != null){
      this.viewAllCompanies();
    }
     }​​​​​​);
   

  }

  // addCompanyDetails(): void
  // {
  //   this.companyService.addCompany(this.compModel).subscribe(data=>
  //     {
  //       // if(data){
  //       //   this.viewAllCompanies();
  //       // }
  //       this.data = JSON.stringify(data);
  //       this.companyarray.push(this.data);
  //       alert('New Company Registration Successfull');
  //       this.viewAllCompanies();
  //     },
  //     error=>{
  //       alert('New Company Registration NotSuccessfull');

  //         console.log(error);
  //        }
  //     )


  // }

 



  viewAllCompanies(): void                                                        
  {
    this.companyService.getAllCompanies().subscribe(data=>
      {
        console.log(Object.values(data));
        this.companyarray = Object.values(data);
        this.masterarray =  Object.values(data);
        console.log(this.companyarray);
      },
       error=>{
         console.log(error);
       }
    )
  }




  deleteCompany(companyCode:number)
  {
    this.companyService.deleteCompany(companyCode).subscribe(data=>
     

      
      {
        //  let comIndex = this.companyarray.findIndex(c=>c.companyCode === companyCode);
        //  console.log('Deleted Company Successfull' )
        //  console.log('comIndex', comIndex)
        //  this.companyarray=  this.companyarray.slice(comIndex,1);
        // alert('Deleted Company Successfull');
        // console.log('this.companyarray', this.companyarray)
        // if(data){
        //   alert('Deleted Company Successfull');
        //  this.viewAllCompanies();
       // }
        
      },
       error=>
       {
        
        this.viewAllCompanies();
       }
      )

    

  }




  searchCompany (event: any) 
  {
    console.log(event.target.value)
    if (!event.target.value) {
      this.masterarray = this.companyarray
    } else {
      this.masterarray = this.companyarray.filter(data => data.companyCode == event.target.value)
      console.log('this.companyarray', this.companyarray)
      console.log('this.companyarray', this.masterarray)
    }
  }
 



  // updateCompany(companyCode:number)
  // {
  //   this.companyService.updateCompany(this.compModel).subscribe(data=>
  //     {
  //       let comIndex = this.companyarray.findIndex(c=>c.companyCode === companyCode);
  //       this.data = JSON.stringify(data);
  //       this.companyarray.push(this.data);
  //       alert('Update Company Details Successfull')
  //       this.viewAllCompanies();
  //     },
  //     // error=>
  //     // {
  //     //   console.log(error);
  //     // }
  //     )

  // }


  
  openUpdateDilog(item:Company){
    console.log("clickdata",item)
    const dialogRef = this.dialog.open(UpdateCompanyComponent, {
      width: '400px',
       data:item,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.viewAllCompanies();
      }
     
    });
  }


   addStockPrice(companyCode:Company){

    this.router.navigate(['/stockDetail']);

   }

  openAddDilog(item:Company){
    console.log("clickdata",item)
    const dialogRef = this.dialog.open(StockDetailComponent, {
      width: '350px',
       data:item,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.viewAllCompanies();
      }
     
    });
  }
 

  openRegisterDilog(){
    console.log("clickdata")
    const dialogRef = this.dialog.open(MatDemoComponent, {
      width: '400px',
       //data:item,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.viewAllCompanies();
      }
     
    });
  }
 
}
 
