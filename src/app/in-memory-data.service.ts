import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clients = [
      { id: 11, name: 'Mr. Nice', longitude: -86.7231602513, latitude: 41.7930671862},
      { id: 12, name: 'Narco', longitude: -86.6311283131, latitude: 41.7943974487},
      { id: 13, name: 'Bombasto', longitude: -86.6628819511, latitude: 41.7357887154},
      { id: 14, name: 'Celeritas', longitude: -88.7285988897, latitude: 42.0115985088},
      { id: 15, name: 'Magneta' , longitude: -87.7090567368, latitude: 41.0117196518},
      { id: 16, name: 'RubberMan', longitude: -87.9997466265, latitude: 42.0119763841}
    ];
    return {clients};
  }
}
