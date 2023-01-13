import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { stock } from '../stock/stockmodel';


import { Company } from './company';




@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient)
  { }
  companies : Company[] |any;

  private apiGet: string  = `http://localhost:8081/api/v1.0/market/company/getall`;
  private apiPost: string = `http://localhost:8081/api/v1.0/market/company/register`;
  private apiDel : string = `http://localhost:8081/api/v1.0/market/company/delete`;
  private apiGett: string = `http://localhost:8081/api/v1.0/market/company/info`;
  private apiPut : string  = 'http://localhost:8081/api/v1.0/market/company/put';
 

    addCompany(company: Company ): Observable<Company>{
      
      console.log(company);
      return this.http.post<Company>(this.apiPost, company);
    }

    getAllCompanies(): Observable<Array<Company>> {
      return this.http.get<Array<Company>>(this.apiGet);
    }

    deleteCompany(companyCode: number): Observable<Company>{
      console.log(`${this.apiDel}/${companyCode}`)
      alert('Deleted Company Successfull');
      return this.http.delete<Company>(`${this.apiDel}/${companyCode}`);
      alert('Deleted Company Successfull');
    }

    showById(companyCode: number): Observable<Company>{
      console.log(`${this.apiGett}/${companyCode}`)
      return this.http.get<Company>(`${this.apiGett}/${companyCode}`);
    }

    
  //   updateCompany(companyCode:number): Observable<Company>{
  //     console.log(`${this.apiPut}/${companyCode}`)
  //    return this.http.post<Company>(this.apiPut/`${companyCode}`);
  //  }

 // updateCompany(company: Company,id:number): Observable<Company>{
    updateCompany(company: Company,id:any): Observable<Company>{
    let apiPut: string = "http://localhost:8081/api/v1.0/market/company/put/";
    console.log(company);
    apiPut=apiPut+id;

    let headers = new HttpHeaders()
            .set('Content-Type', 'application/json');
            const options = {
              
              headers: headers,
              observe: 'response' as const
          }
   //return this.http.get<Observable>(apiGet);
    return this.http.put<Company>(apiPut,company).pipe(
      map((res:any)=>{
        return res;
    })
    //return this.http.post<Company>(`${apiPut}`,company);
 
    );
  }
 
 
   
 
    
 }
 
