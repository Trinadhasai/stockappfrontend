import { Component, Inject, OnInit, Optional } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { Company } from "src/app/company/company";
import { CompanyService } from "src/app/company/company.service";









@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css'],
 
  

})


export class UpdateCompanyComponent implements OnInit {

  newdata:any 
  compModel: Company = new Company();
  companyarray: Array<Company>=[];
  data: any;
  id: any;
  

  constructor(@Optional()@Inject(MAT_DIALOG_DATA)  data:Company,
           public dialogRef: MatDialogRef<UpdateCompanyComponent>,
          public companyService:CompanyService,
          public _Activatedroute:ActivatedRoute) {

            this._Activatedroute.paramMap.subscribe(params => {
              this.id = params.get('id');
    console.log(data);
    this.newdata=data;
  });
   
}
  

  close(): void {
    this.dialogRef.close(); //on close pass data to parent
   }

  ngOnInit(): void {
  }

  // updateCompany(companyCode:number)
  // {
  //   console.log("updated data",companyCode)
  //   this.companyService.updateCompany(this.compModel).subscribe(data=>
  //     {
  //       if(data){
  //         this.dialogRef.close(data);
  //       }
  //     },
  //     error=>
  //     {
  //       console.log(error);
  //     })
  //   }



    
  updateCompany(companyCode:number)
  {
    let comIndex :any;
    this.companyService.updateCompany(this.newdata,companyCode).subscribe(data=>
      {
        // comIndex = this.companyarray.findIndex(c=>c.companyCode === companyCode);
        
        //this.newdata = JSON.stringify(data);
        console.log(this.newdata);
        console.log(this.compModel);
        this.companyarray.push(this.newdata);
        alert('Update Company Details Successfull')
        if(data){
          this.dialogRef.close(data);
        }
       // this.viewAllCompanies();
      },
      // error=>
      // {
      //   console.log(error);
      // }
      )

  }


}









 
function companyCode(compModel: Company, companyCode: any) {
  throw new Error("Function not implemented.");
}

