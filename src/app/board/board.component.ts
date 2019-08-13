import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/card';
import { CardSelect } from '../models/card-select';
import { Guid } from '../utility/guid';
import { CardService } from '../service/card-service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() boardName: string;
  cards: Array<Card> = [];
  selectCardForGroup: Array<Card> = [];
  isCardSelect: boolean;

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  onCardSave(text: string) {
    const id = Guid.newGuid();
    const card = new Card();
    card.text = text;
    card.id = id;

    this.cards.push(card);
    this.cardService.cards = this.cards;
  }

  onCardSelect(cardSelectModel: CardSelect) {
    if (cardSelectModel.isSelected) {
      this.selectCardForGroup.push(cardSelectModel.cardModel);
    } else {
      this.selectCardForGroup = this.selectCardForGroup.filter(card => card.id !== cardSelectModel.cardModel.id);
    }
  }

  onCardSelectBegin(isCardSelect: boolean) {
    this.isCardSelect = isCardSelect;
  }

  groupOn() {
    let id = Guid.newGuid();

    if (this.selectCardForGroup.length > 1) {
      const groupIds = this.selectCardForGroup.map(card => card.groupId).filter(card => card != null || card !== undefined);
      if (groupIds) {
        const distinctGroupIds = [...new Set(groupIds)];

        if (distinctGroupIds.length > 1) {
          alert('two groups cannot be combined..');
          return;
        }

        if (distinctGroupIds.length === 1) {
          id = distinctGroupIds[0];
        }
      }

      for (const card of this.selectCardForGroup) {
        this.cards.find(c => c.id === card.id).groupId = id;
      }
    }

    this.isCardSelect = false;
    this.selectCardForGroup = [];
  }
}
