import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../cards.service';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})
export class CarddetailsComponent implements OnInit {

  constructor(private api:CardsService){
  }
  carddata:any=[];

  ngOnInit()
  {
    const cardadataObservable = this.api.getCardRequest();
    cardadataObservable.subscribe(data => {
      for (const d of (data as any)) {
        this.carddata.push({
          id: d.id,
          cardNumber: d.cardNumber,
          cardType: d.cardType,
          bankName: d.bankName,
          platform: d.platform,
          active: d.active

        });
      }
      console.log(this.carddata);
    });
  }

}
