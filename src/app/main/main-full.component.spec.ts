import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFullComponent } from './main-full.component';

describe('MainFullComponent', () => {
  let component: MainFullComponent;
  let fixture: ComponentFixture<MainFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
