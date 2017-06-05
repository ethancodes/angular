import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let zeroes = [
      {id: 11, name: 'Mr. Nice', failures: 1 },
      {id: 12, name: 'Friendly', failures: 2 },
      {id: 13, name: 'Polite', failures: 4 },
      {id: 14, name: 'Helpful', failures: 8 },
      {id: 15, name: 'Cheerful', failures: 16 },
    ];
    return {zeroes};
  }
}