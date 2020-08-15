import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLoginStore } from './postLogin/post-login.store';
import { PostLoginQuery } from './postLogin/post-login.query';
import { DynamicGridsStore } from './dynamicGrids/dynamic-grids.store';
import { DynamicGridsQuery } from './dynamicGrids/dynamic-grids.query';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PostLoginStore,
    PostLoginQuery,
    DynamicGridsStore,
    DynamicGridsQuery
  ],
  exports: []
})
export class StoreModule { }
