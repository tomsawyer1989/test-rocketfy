import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';

import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule
    ],
    exports: [],
    declarations: [
        MainLayoutComponent,
        HeaderComponent
    ]
})
export class LayoutModule { }