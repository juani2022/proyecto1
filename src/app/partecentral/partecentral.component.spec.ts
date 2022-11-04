import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartecentralComponent } from './partecentral.component';

describe('PartecentralComponent', () => {
  let component: PartecentralComponent;
  let fixture: ComponentFixture<PartecentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartecentralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartecentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
