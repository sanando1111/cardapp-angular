import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { CardsService } from '../../cards.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  //template: `<ejs-dropdownlist id='ddlelement' #samples [dataSource]='data' [placeholder]='placeholder'></ejs-dropdownlist>`,
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  public summaries: {};
  public productDetail:{}
  ngOnInit() {
    //this.getOrders();

    this.cardsService.getAllTaxProducts().subscribe(
    data=>this.summaries=data
    )
    
  }
  
  constructor(private formBuilder: FormBuilder,private cardsService: CardsService) {
  }
   getOrders(){
   return this.cardsService.getAllTaxProducts();
  }

  onChangeProductName(productName:string)
  {
    console.log(productName)
    return this.cardsService.getProductDetails(productName).subscribe(
    data=> this.productDetail=data
  )
  }
  onsubmit()
  {
    console.log("Submitting request");
  }

}
  

