import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressAuctionsComponent } from './in-progress-auctions.component';

describe('InProgressAuctionsComponent', () => {
  let component: InProgressAuctionsComponent;
  let fixture: ComponentFixture<InProgressAuctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressAuctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressAuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
