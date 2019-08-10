import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPublicSectionComponent } from './board-public-section.component';

describe('BoardPublicSectionComponent', () => {
  let component: BoardPublicSectionComponent;
  let fixture: ComponentFixture<BoardPublicSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardPublicSectionComponent ]
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
