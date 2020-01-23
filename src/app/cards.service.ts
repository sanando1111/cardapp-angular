import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Cards } from './shared/model/Cards.model';
import { Observable, throwError } from 'rxjs';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpParams} from  "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiUrl = "http://localhost:8091/allcards";
  //private addCardsUrl = "http://localhost:8091/addproduct";
  //private addCardsUrl = "http://localhost:8091/updateproduct";
  private addCardsUrl =  "http://localhost:8091/deleteproduct";
  private allTaxProducts="http://localhost:8091/alltaxproducts";
  private productDetails="http://localhost:8091/getproductdetails";
  public summaries: any[];
  constructor(private http: HttpClient) { }
  public getCardRequest() {
    return this.http.get(this.apiUrl);
  }
   public addCards(cards: Cards) {
    this.http.post(this.addCardsUrl, cards).subscribe(response => console.log(response))
  } 

  public getAllTaxProducts()
  {
    return this.http.get(this.allTaxProducts)
  }
  public getProductDetails(productName:string)
  {
    console.log('Api:'+productName)
    //const  params = new  HttpParams().set('_page', "1").set('_limit', "1");
    const params=new HttpParams().set('productName',productName)
      return this.http.get(this.productDetails,{params})
  }

}

