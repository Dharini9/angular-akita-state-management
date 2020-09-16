import { Component, OnInit, Input } from '@angular/core';
import { DynamicGridsQuery } from '../core/store/dynamicGrids/dynamic-grids.query';
import { Config } from '../core/enums/config';
import CustomStore from 'devextreme/data/custom_store';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-generic-grid',
  templateUrl: './generic-grid.component.html',
  styleUrls: ['./generic-grid.component.scss']
})
export class GenericGridComponent implements OnInit {

  @Input() gridConfigData;

  gridColumns: any[] = [];
  fixedColumns = ['ActivityID', 'Subject', 'Type', 'ActivityTypeID'];
  dataStore: any = {};

  constructor(
    private dynamicGridsQuery: DynamicGridsQuery,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataStore.store = new CustomStore({
      key: ['ActivityID', 'ActivityTypeID'],
      load: (loadOptions: any) => {
        return this.dataService.commonGetApiCall('http://demo7880871.mockable.io/GetActivityToDateData')
          .toPromise()
          .then((data) => {
            return {
              data: data['Data']['ActivityToDateRecruiterVM'] || [],
              totalCount: data['Data']['TotalCount']
            };
          }).catch(error => { throw new Error('Data Loading Error'); });
      }
    });
  }

  onEditorPrepare(e) {
    // to make search filter apply only on Enter keypress
    if (e.parentType === 'filterRow') {
      e.editorOptions.onEnterKey = (arg) => {
        e.element.querySelector('.dx-apply-button').click('dxclick');
      };
    }
  }

  saveState = (state) => {
    // store state in local storage
    // this.localStroage.setItem('ClientActivityToDateGridState', state);
  }

  loadState = () => {
    /**return this.getGridState().then((data: any) => {
      if (data && data.columns && data.columns.length) {
        data.columns.forEach((column: any) => {
          if (column.visible && !this.fixedColumns.includes(column.dataField) && !this.selectedColumnData.includes(column.dataField)) {
            this.selectedColumnData.push(column.dataField);
          }
        });
      } else if (data.gridColumns && data.gridColumns.length) {
        data.gridColumns.forEach((gridColumn: any) => {
          if (gridColumn.Visible && !this.fixedColumns.includes(gridColumn.dataField) && !this.selectedColumnData.includes(gridColumn.DataField)) {
            this.selectedColumnData.push(gridColumn.DataField);
          }
        });
      }
      return data;
    }).catch(error => { throw error.errorMsg; });*/
  }

  getGridState() {
    /**return new Promise((resolve, reject) => {
      const gridState = this.checkIfActivityToDateGridStateExist();
      if (gridState) {
        gridState.selectedRowKeys = [];
        // If we have ATD grid for Recruiters, need to get the external filters state also
        if (this.sectionData['subSectionData']['StrID'] === RecruitersSubSectionStep.RUA_ActivityToDate) {
          if (gridState.externalFiltersState) {
            this.setExternalFiltersState({ ...gridState.externalFiltersState });
          }
        }
        resolve(gridState);
      } else if (this.gridConfig) {
        // If we do not have any state stored then need to set filters with default values
        if (this.sectionData['subSectionData']['StrID'] === RecruitersSubSectionStep.RUA_ActivityToDate) {
          this.assignDefaultSelectedValuesToExternalFilters();
        }
        resolve(this.gridConfig);
      } else {
        // If we do not have any state stored then need to set filters with default values
        if (this.sectionData['subSectionData']['StrID'] === RecruitersSubSectionStep.RUA_ActivityToDate) {
          this.assignDefaultSelectedValuesToExternalFilters();
        }
        reject({ errorMsg: 'State Not Found' });
      }
    });*/
  }

}
