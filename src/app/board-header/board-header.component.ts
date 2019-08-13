import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.css']
})
export class BoardHeaderComponent implements OnInit {
  @Output() cardSelectEvent = new EventEmitter<boolean>();
  @Output() groupOnEvent = new EventEmitter<boolean>();
  @Input() name: string;
  @Input() isCardSelect: boolean;

  constructor() { }

  ngOnInit() {
  }

  cardSelect() {
    this.isCardSelect = !this.isCardSelect;
    this.cardSelectEvent.emit(this.isCardSelect);
  }

  groupOn() {
    this.groupOnEvent.emit(true);
  }
}
