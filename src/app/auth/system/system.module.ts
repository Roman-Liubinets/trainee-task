import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { SystemRoutingModule } from "./system-routing.module";
import { FirstPageComponent } from "../../first-page/first-page.component";
import { SecondPageComponent } from "../../second-page/second-page.component";
import { ThirdPageComponent } from "../../third-page/third-page.component";
import { NotFoundComponent } from "../../not-found/not-found.component";
import { SystemComponent } from "./system.component";

@NgModule({
    imports: [
        CommonModule, 
        SharedModule,
        SystemRoutingModule
    ],
    declarations: [
        FirstPageComponent,
        SecondPageComponent,
        ThirdPageComponent,
        NotFoundComponent,
        SystemComponent
    ]  
})

export class SystemModule {}