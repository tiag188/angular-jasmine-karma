/* tslint:disable:no-unused-variable */
/*
- O papel do Jasmine como framework de testes
- O papel do Karma como executor de testes
- Estrutura mínima para declaração de testes
- Teste de expectativas
- Evitando vícios na criação de testes
*/
import { TestBed, async, inject } from '@angular/core/testing';
import { UniqueIdService } from './unique-id.service';

//artefato que gostariamos de testar
describe(UniqueIdService.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniqueIdService]
    });
  });

  it('#generateUniqueIdWithPrefix should ...', inject([UniqueIdService], (service: UniqueIdService) => {
    expect(service).toBeTruthy();
  }));


  //condições de testes (it) -> 'xxx should xxx when xxx ...'
  //utilizar o template string para adicionar o método de forma dinâmica = `#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}`
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const mockValue = 'app';
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix(mockValue);
    expect(id).toContain(mockValue);
  })
});
