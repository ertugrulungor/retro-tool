import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../models/card';
import { CardSelect } from '../models/card-select';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() cardSelectEvent = new EventEmitter<CardSelect>();
  @Input() cardModel: Card;
  @Input() isCardSelect: boolean;
  selectCard = false;

  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.cardModel.score = this.cardModel.score + 1;
  }

  decrease() {
    this.cardModel.score = this.cardModel.score - 1;
  }

  onCardSelectedChange() {
    this.selectCard = !this.selectCard;
    const cardSelectModel = new CardSelect();
    cardSelectModel.cardModel = this.cardModel;
    cardSelectModel.isSelected = this.selectCard;

    this.cardSelectEvent.emit(cardSelectModel);
  }
}
