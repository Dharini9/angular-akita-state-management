import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { PostLoginQuery } from '../core/store/postLogin/post-login.query';
import { DynamicGridsService } from '../core/services/dynamic-grids.service';
import { Config } from '../core/enums/config';
import { DynamicGridsQuery } from '../core/store/dynamicGrids/dynamic-grids.query';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  displayName = 'this is display name';
  emailID: string;

  gridConfigData = Config.initialActivityToDateGridConfig;
  gridColumns: any[] = [];
  fixedColumns = ['ActivityID', 'Subject', 'Type', 'ActivityTypeID'];

  constructor(
    private dataService: DataService,
    private dynamicGridsServie: DynamicGridsService,
    private postLoginQuery: PostLoginQuery,
    private dynamicGridsQuery: DynamicGridsQuery
  ) { }

  ngOnInit() {
    this.getGridConfiguration();

    this.postLoginQuery.selectName$.subscribe(displayName => {
      if (displayName) {
        this.displayName = displayName;
      }
    });

    this.postLoginQuery.loginDetails$.subscribe(state => {
      this.emailID = state.UserEmail;
    });

    this.dynamicGridsQuery.dynamicGridsConfig$.subscribe(state => {
      if (state.GridConfigData && state.GridConfigData.length) {
        const gridConfig = JSON.parse(JSON.stringify(state.GridConfigData.find(gridConfig => gridConfig.GridID === 'ActivityToDate')));
        if (gridConfig) {
          // ------ convert property into lowercase as Camel Case is not supported by DevExtreme
          gridConfig.Columns.map(column => {
            if (column.FilterOptions && column.FilterOptions.length) {
              const filters = [];
              column.FilterOptions.map(filterOption => {
                filters.push({
                  value: filterOption.Value,
                  text: filterOption.Text
                });
                return filterOption;
              });
              column.FilterOptions = filters;
            }
            return column;
          });

          this.gridConfigData.allowedPageSizes = gridConfig.AllowedPageSizes;
          this.gridConfigData.filterEnabled = gridConfig.FilterEnabled;
          this.gridConfigData.gridColumns = gridConfig.Columns;
          this.gridConfigData.isShowColumnChooser = gridConfig.IsShowColumnChooser;
          this.gridConfigData.pageIndex = gridConfig.PageIndex;
          this.gridConfigData.pageSize = gridConfig.PageSize;
          // ------


          // ------ configure grid column objects with custom templates
          this.gridConfigData.gridColumns.forEach((column) => {
            const columnObj = {};
            // if (column.DataType === DateTime.DateTime) {
            //   columnObj['format'] = this.genericService.getDateTimeFormat(DateTime.DateTime);
            // }
            columnObj['dataField'] = column.DataField;
            columnObj['dataType'] = column.DataType;
            columnObj['caption'] = column.DataValue;
            columnObj['visible'] = column.Visible;
            columnObj['headerFilter'] = {};
            columnObj['headerFilter']['dataSource'] = column.FilterOptions;
            columnObj['headerFilter']['allowSearch'] = true;
            columnObj['showInColumnChooser'] = (!this.fixedColumns.includes(column.DataField));
            columnObj['allowReordering'] = (!this.fixedColumns.includes(column.DataField));
            columnObj['fixed'] = !columnObj['allowReordering'];
            columnObj['allowHeaderFiltering'] = (column.FilterOptions && column.FilterOptions.length > 0);
            // template for columns which are to be provided custom template ----
            let TemplateName = '';
            switch (column.DataField) {
              case Config.scheduleType:
                TemplateName = 'scheduleTypeCellTemplate';
                break;
              case Config.clientName:
                TemplateName = 'clientCellTemplate';
                break;
              case Config.contacts:
                TemplateName = 'contactCellTemplate';
                break;
              case Config.jobOrders:
              case Config.jobOrder:
                TemplateName = 'jobOrderCellTemplate';
                break;
              case Config.recruiters:
              case Config.recruiter:
                TemplateName = 'recruitersCellTemplate';
                break;
              case Config.note:
                TemplateName = 'noteCellTemplate';
                break;
            }
            columnObj['cellTemplate'] = TemplateName;
            // console.log(columnObj);
            this.gridColumns.push(columnObj);
          });

          console.log(this.gridConfigData);
          // -----
        }
      }
    });
  }

  getGridConfiguration() {
    this.dataService.commonGetApiCall('http://demo7880871.mockable.io/GetGridConfiguration').subscribe(result => {
      if (result['Code'] === 200) {
        if (result['Data']['GridConfigData']) {
          this.dynamicGridsServie.storeGridConfiguration(result['Data']['GridConfigData']);
        }
      }
    });
  }

}
