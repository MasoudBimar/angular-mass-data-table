import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassDataTableComponent } from './mass-data-table.component';

describe('MassDataTableComponent', () => {
  let component: MassDataTableComponent;
  let fixture: ComponentFixture<MassDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MassDataTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
