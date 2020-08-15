import { Injectable } from '@angular/core';
import { DynamicGridsStore } from '../store/dynamicGrids/dynamic-grids.store';

@Injectable({
  providedIn: 'root'
})
export class DynamicGridsService {

  constructor(
    private dynamicGridsStore: DynamicGridsStore
  ) { }

  storeGridConfiguration(gridConfiguration) {
    this.dynamicGridsStore.update(state => {
      return {
        ...state,
        GridConfigData: gridConfiguration
      };
    });
  }
}
