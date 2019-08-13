import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card';
import { CardService } from '../service/card-service';
import { CardSelect } from '../models/card-select';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})
export class CardGroupComponent implements OnInit {
  @Output() cardSelectEvent = new EventEmitter<CardSelect>();
  @Input() cardGroupId: string;
  @Input() isCardGroupSelect: boolean;
  cards: Array<Card>;
  selectCard: boolean;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cards = this.cardService.cards.filter(card => card.groupId === this.cardGroupId);
  }

  getDefaultCard(): Card {
    return this.cards[0];
  }

  getCardsScore(): number {
    return this.cards.map(card => card.score).reduce((a, b) => a + b, 0);
  }

  onCardSelectedChange() {
    this.selectCard = !this.selectCard;

    const cardSelect = new CardSelect();
    cardSelect.cardModel = this.cards[0];
    cardSelect.isSelected = this.selectCard;

    this.cardSelectEvent.emit(cardSelect);
  }
}
