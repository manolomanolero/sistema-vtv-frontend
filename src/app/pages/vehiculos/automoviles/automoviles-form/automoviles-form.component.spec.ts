import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomovilesFormComponent } from './automoviles-form.component';

describe('AutomovilesFormComponent', () => {
  let component: AutomovilesFormComponent;
  let fixture: ComponentFixture<AutomovilesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomovilesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomovilesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
