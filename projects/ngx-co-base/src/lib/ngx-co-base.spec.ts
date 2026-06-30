import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSetupBase } from './ngx-co-base';

describe('NgxSetupBase', () => {
  let component: NgxSetupBase;
  let fixture: ComponentFixture<NgxSetupBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSetupBase]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NgxSetupBase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
