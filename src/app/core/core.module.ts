import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTextBoxModule, DxButtonModule, DxValidatorModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DxTextBoxModule,
    DxButtonModule,
    DxValidatorModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DxTextBoxModule,
    DxButtonModule,
    DxValidatorModule
  ]
})
export class CoreModule { }
