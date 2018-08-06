import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      {id: 11, name: 'Hulk'},
      {id: 12, name: 'Thor'},
      {id: 13, name: 'Black Panther'},
      {id: 14, name: 'Black Widow'},
      {id: 15, name: 'Captain America'},
      {id: 16, name: 'Vision'},
      {id: 17, name: 'Ant Man'},
      {id: 18, name: 'Wasp'},
      {id: 19, name: 'Doctor Strange'},
      {id: 20, name: 'Thanos'}
    ];
    return {heroes};
  }
}
