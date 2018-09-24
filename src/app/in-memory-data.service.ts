import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clients = [
      { id: 110, name: 'Nice Plaza', city: 'Chicago', longitude: -86.7231602513, latitude: 41.7930671862, address: '100 Consumme RD, Toronto', contact: '800-888-001', asking:251,sold:298},
      { id: 120, name: 'Narco Condo', city: 'Chicago', longitude: -86.6311283131, latitude: 41.7943974487, address: '200 Consumme RD, Toronto', contact: '800-888-002', asking:126,sold:129},
      { id: 130, name: 'Bombasto Center', city: 'Chicago', longitude: -86.6628819511, latitude: 41.7357887154, address: '300 Consumme RD, Toronto', contact: '800-888-003', asking:367,sold:369},
      { id: 140, name: 'Celeritas Home', city: 'Chicago', longitude: -88.7285988897, latitude: 42.0115985088, address: '400 Consumme RD, Toronto', contact: '800-888-005', asking:112,sold:176},
      { id: 150, name: 'Magneta Plaza' , city: 'Chicago', longitude: -87.7090567368, latitude: 41.0117196518, address: '500 Consumme RD, Toronto', contact: '800-888-006', asking:123,sold:234},
      { id: 160, name: 'Rubber Man', city: 'Chicago', longitude: -87.9997466265, latitude: 42.0119763841, address: '600 Consumme RD, Toronto', contact: '800-888-007', asking:123,sold:234},
      { id: 170, name: 'Toronto DT', city: 'Toronto', longitude: -79.3832, latitude: 43.6532, address: '700 Consumme RD, Toronto', contact: '800-888-008', asking:1000,sold:1009},
      { id: 180, name: 'Civilian House', city: 'Toronto', longitude: -79.2832, latitude: 43.7532, address: '800 Consumme RD, Toronto', contact: '800-888-009', asking:789,sold:890}
    ];
    return {clients};
  }
}
