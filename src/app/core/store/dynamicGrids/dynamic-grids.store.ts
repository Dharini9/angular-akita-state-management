import { Store, StoreConfig } from '@datorama/akita';

export interface DynamicGridState {
    GridConfigData: GridConfigData[];
}

export interface GridConfigData {
    GridID: string;
    GridName: string;
    Columns: GridColumns[];
    PageIndex: number;
    PageSize: number;
    AllowedPageSizes: number[];
    FilterEnabled: boolean;
    IsShowColumnChooser: boolean;
}

export interface GridColumns {
    DataField: string;
    DataValue: string;
    DataType: string;
    ControlType: string;
    Visible: boolean;
    FilterOptions: any[];
    AllowSorting: boolean;
}

export function createGridInitialState(): DynamicGridState {
    return {
        GridConfigData: [
            {
                GridID: '',
                GridName: '',
                Columns: [],
                PageIndex: 0,
                PageSize: 10,
                AllowedPageSizes: [25, 50, 100, 200, 500],
                FilterEnabled: true,
                IsShowColumnChooser: true
            }
        ]
    };
}

@StoreConfig({ name: 'dynamic-grid' })
export class DynamicGridsStore extends Store<DynamicGridState> {
    constructor() {
        super(createGridInitialState());
    }
}
