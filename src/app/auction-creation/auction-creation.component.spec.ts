import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionCreationComponent } from './auction-creation.component';

describe('AuctionCreationComponent', () => {
  let component: AuctionCreationComponent;
  let fixture: ComponentFixture<AuctionCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
