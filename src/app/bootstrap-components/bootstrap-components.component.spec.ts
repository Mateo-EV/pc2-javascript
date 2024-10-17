import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapComponentsComponent } from './bootstrap-components.component';

describe('BootstrapComponentsComponent', () => {
  let component: BootstrapComponentsComponent;
  let fixture: ComponentFixture<BootstrapComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
