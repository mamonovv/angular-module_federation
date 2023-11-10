import { TestBed } from '@angular/core/testing';

import { ProductsLibService } from './products-lib.service';

describe('ProductsLibService', () => {
  let service: ProductsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
