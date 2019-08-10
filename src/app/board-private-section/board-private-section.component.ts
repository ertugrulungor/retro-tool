import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board-private-section',
  templateUrl: './board-private-section.component.html',
  styleUrls: ['./board-private-section.component.css']
})
export class BoardPrivateSectionComponent implements OnInit {
  @Output() cardSaveEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onCardSave(text: string) {
    this.cardSaveEvent.emit(text);
  }
}
