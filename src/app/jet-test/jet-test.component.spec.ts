import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JetTestComponent } from './jet-test.component';

describe('JetTestComponent', () => {
  let component: JetTestComponent;
  let fixture: ComponentFixture<JetTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JetTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JetTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
