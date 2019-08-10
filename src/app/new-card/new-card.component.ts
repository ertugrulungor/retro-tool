import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {
  @Output() cardSaveEvent = new EventEmitter<string>();
  cardText = '';

  constructor() { }

  ngOnInit() {
  }

  addNewCard() {
    this.cardSaveEvent.emit(this.cardText);
    this.cardText = '';
  }
}
