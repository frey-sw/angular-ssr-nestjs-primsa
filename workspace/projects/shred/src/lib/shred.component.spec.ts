import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShredComponent } from './shred.component';

describe('ShredComponent', () => {
  let component: ShredComponent;
  let fixture: ComponentFixture<ShredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
