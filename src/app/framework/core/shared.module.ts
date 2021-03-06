// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule, LAYOUT_CONFIG } from '@angular/flex-layout';

// libs
import { TranslateModule } from '@ngx-translate/core';

export const APP_LAYOUT_CONFIG = {
  addFlexToParent: true,
  addOrientationBps: false,
  disableDefaultBps: false,
  disableVendorPrefixes: false,
  serverLoaded: false,
  useColumnBasisZero: false
};

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    TranslateModule
  ],
  providers: [
    {
      provide: LAYOUT_CONFIG,
      useValue: APP_LAYOUT_CONFIG
    }
  ]
})
export class SharedModule {
}
