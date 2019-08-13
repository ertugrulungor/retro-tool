import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { BoardComponent } from '../board/board.component';
import { BoardHeaderComponent } from '../board-header/board-header.component';
import { BoardPublicSectionComponent } from '../board-public-section/board-public-section.component';
import { BoardPrivateSectionComponent } from '../board-private-section/board-private-section.component';
import { CardComponent } from '../card/card.component';
import { NewCardComponent } from '../new-card/new-card.component';
import { FormsModule } from '@angular/forms';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LayoutComponent,
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
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
