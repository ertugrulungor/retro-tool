import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() text: string;
  score = 0;

  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.score = this.score + 1;
  }

  decrease() {
    this.score = this.score - 1;
  }
}
