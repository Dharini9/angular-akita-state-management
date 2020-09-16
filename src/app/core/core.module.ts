import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTextBoxModule, DxButtonModule, DxValidatorModule, DxDataGridModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DxTextBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxDataGridModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DxTextBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxDataGridModule
  ]
})
export class CoreModule { }
