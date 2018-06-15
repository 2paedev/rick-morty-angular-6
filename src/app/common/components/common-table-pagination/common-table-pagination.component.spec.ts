import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTablePaginationComponent } from './common-table-pagination.component';

describe('CommonTablePaginationComponent', () => {
  let component: CommonTablePaginationComponent;
  let fixture: ComponentFixture<CommonTablePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonTablePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
