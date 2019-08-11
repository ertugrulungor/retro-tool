import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPrivateSectionComponent } from './board-private-section.component';
import { NewCardComponent } from '../new-card/new-card.component';
import { FormsModule } from '@angular/forms';

describe('BoardPrivateSectionComponent', () => {
  let component: BoardPrivateSectionComponent;
  let fixture: ComponentFixture<BoardPrivateSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardPrivateSectionComponent, NewCardComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPrivateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
