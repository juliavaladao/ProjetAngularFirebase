import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NatalPage } from './natal.page';

describe('NatalPage', () => {
  let component: NatalPage;
  let fixture: ComponentFixture<NatalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NatalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
