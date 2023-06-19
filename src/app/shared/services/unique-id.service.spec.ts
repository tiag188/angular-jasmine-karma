/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UniqueIdService } from './unique-id.service';

//artefato que gostariamos de testar
describe('Service: UniqueId', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniqueIdService]
    });
  });

  //condições de testes (it) -> 'should ...'
  it('should ...', inject([UniqueIdService], (service: UniqueIdService) => {
    expect(service).toBeTruthy();
  }));
});
