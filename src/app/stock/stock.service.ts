import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Company } from '../company/company';
import { stock } from './stockmodel';



@Injectable({
  providedIn: 'root'
})
export class StockService {
  Math: any;
  
  getAllstocks() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient)
  { }
  stocks : stock[] |any;

 
 
  
  addstock(stock:stock,id:any): Observable<stock>{
    let apiPost: string = "http://localhost:8081/api/v1.0/market/stock/add/";
    console.log(stock);
    apiPost=apiPost+id;
    return this.http.post<stock>(`${apiPost}`,stock);
  }

  getAllStocks(id:any):  Observable<any>{
   let apiGet   = "http://localhost:8081/api/v1.0/market/company/info/";
    //console.log(id,this.apiGet,this.apiGet+id)
    apiGet=apiGet+id;
    
    let headers = new HttpHeaders()
            .set('Content-Type', 'application/json');
            const options = {
              
              headers: headers,
              observe: 'response' as const
          }
   //return this.http.get<Observable>(apiGet);
    return this.http.get(apiGet,options).pipe(
    map((res)=>{
        return res;
    })
);
 }


  

   
}
