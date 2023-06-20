import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if(!prefix) {
      throw Error("Prefixo não pode ser vazio");
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`
  }

  public getNumberOfGenertatedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  public generateUniqueId(): string {
    return uuidv4();
  }
}
