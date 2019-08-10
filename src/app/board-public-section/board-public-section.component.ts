import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board-public-section',
  templateUrl: './board-public-section.component.html',
  styleUrls: ['./board-public-section.component.css']
})
export class BoardPublicSectionComponent implements OnInit {
  @Input() cards: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
