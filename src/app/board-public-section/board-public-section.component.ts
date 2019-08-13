import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card';
import { CardSelect } from '../models/card-select';

@Component({
  selector: 'app-board-public-section',
  templateUrl: './board-public-section.component.html',
  styleUrls: ['./board-public-section.component.css']
})
export class BoardPublicSectionComponent implements OnInit {
  @Output() cardSelectEvent = new EventEmitter<CardSelect>();
  @Input() cards: Array<Card>;
  @Input() isCardSelect: boolean;

  constructor() { }

  ngOnInit() {
  }

  onCardSelect(cardSelectModel: CardSelect) {
    this.cardSelectEvent.emit(cardSelectModel);
  }

  getSingleCards(): Array<Card> {
    return this.cards.filter(card => !card.groupId);
  }

  getCardGroupIds(): Array<string> {
    const groupIds = this.cards.map(card => card.groupId).filter(card => card != null || card !== undefined);
    if (groupIds) {
      const distinctGroupIds = [...new Set(groupIds)];

      return distinctGroupIds;
    }
  }
}
