import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { BoardHeaderComponent } from '../board-header/board-header.component';
import { BoardPublicSectionComponent } from '../board-public-section/board-public-section.component';
import { BoardPrivateSectionComponent } from '../board-private-section/board-private-section.component';
import { CardComponent } from '../card/card.component';
import { NewCardComponent } from '../new-card/new-card.component';
import { FormsModule } from '@angular/forms';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoardComponent,
        BoardHeaderComponent,
        BoardPublicSectionComponent,
        BoardPrivateSectionComponent,
        CardComponent,
        NewCardComponent
      ],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
