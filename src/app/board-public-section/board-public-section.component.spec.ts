import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPublicSectionComponent } from './board-public-section.component';
import { CardComponent } from '../card/card.component';

describe('BoardPublicSectionComponent', () => {
  let component: BoardPublicSectionComponent;
  let fixture: ComponentFixture<BoardPublicSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardPublicSectionComponent, CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPublicSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
