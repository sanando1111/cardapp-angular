import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../cards.service';
import { Cards } from 'src/app/shared/model/Cards.model';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private cardService:CardsService) { }

  ngOnInit() {
  }
  onClickSubmit(formData) {
    const cardadataObservable = this.cardService.addCards(formData)
 }


}
