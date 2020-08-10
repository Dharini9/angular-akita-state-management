import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLoginStore } from './postLogin/post-login.store';
import { PostLoginQuery } from './postLogin/post-login.query';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PostLoginStore,
    PostLoginQuery
  ],
  exports: []
})
export class StoreModule { }
