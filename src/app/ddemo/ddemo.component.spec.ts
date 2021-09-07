import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdemoComponent } from './ddemo.component';

describe('DdemoComponent', () => {
  let component: DdemoComponent;
  let fixture: ComponentFixture<DdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
