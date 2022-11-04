import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesecundariaComponent } from './partesecundaria.component';

describe('PartesecundariaComponent', () => {
  let component: PartesecundariaComponent;
  let fixture: ComponentFixture<PartesecundariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartesecundariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartesecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
