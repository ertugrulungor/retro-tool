import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPrivateSectionComponent } from './board-private-section.component';

describe('BoardPrivateSectionComponent', () => {
  let component: BoardPrivateSectionComponent;
  let fixture: ComponentFixture<BoardPrivateSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardPrivateSectionComponent ]
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
