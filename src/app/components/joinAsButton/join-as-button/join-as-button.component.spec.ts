import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAsButtonComponent } from './join-as-button.component';

describe('JoinAsButtonComponent', () => {
  let component: JoinAsButtonComponent;
  let fixture: ComponentFixture<JoinAsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinAsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinAsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
