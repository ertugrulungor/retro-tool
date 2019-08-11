import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardComponent } from './new-card.component';
import { FormsModule } from '@angular/forms';

describe('NewCardComponent', () => {
  let component: NewCardComponent;
  let fixture: ComponentFixture<NewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCardComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
