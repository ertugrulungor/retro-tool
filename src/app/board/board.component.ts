import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() boardName: string;
  cards: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  onCardSave(text: string) {
    this.cards.push(text);
  }
}
