import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.css']
})
export class BoardHeaderComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
