import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from "../shared/shared.module";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { SystemRoutingModule } from "./system-routing.module";
import { FirstPageComponent } from "../../first-page/first-page.component";
import { SecondPageComponent } from "../../second-page/second-page.component";
import { ThirdPageComponent } from "../../third-page/third-page.component";
import { NotFoundComponent } from "../../not-found/not-found.component";
import { SystemComponent } from "./system.component";
import { HeaderComponent } from "../shared/components/header/header.component";
import { DropdownDirective } from "../shared/directives/dropdown.directive";




@NgModule({
    imports: [
        CommonModule, 
        SharedModule,
        SystemRoutingModule,
        MatTableModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule
    ],
    declarations: [
        FirstPageComponent,
        SecondPageComponent,
        ThirdPageComponent,
        NotFoundComponent,
        SystemComponent,
        HeaderComponent,
        DropdownDirective
    ]  
})

export class SystemModule {}