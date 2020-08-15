import { Query } from '@datorama/akita';
import { DynamicGridsStore, DynamicGridState } from './dynamic-grids.store';

export class DynamicGridsQuery extends Query<DynamicGridState> {

    dynamicGridsConfig$ = this.select();

    constructor(protected dynamicGridsStore: DynamicGridsStore) {
        super(dynamicGridsStore);
    }
}
