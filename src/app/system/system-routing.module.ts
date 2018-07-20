import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SystemComponent } from "./system.component";
import { FirstPageComponent } from "./first-page/first-page.component";
import { SecondPageComponent } from "./second-page/second-page.component";
import { ThirdPageComponent } from "./third-page/third-page.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuard } from "../shared/services/auth.guard";


const appRoutes: Routes = [
    {path: '', component: SystemComponent, canActivate: [AuthGuard], children: [
      { path: 'first', component: FirstPageComponent },
      { path: 'second', component: SecondPageComponent },
      { path: 'third', component: ThirdPageComponent },
      { path: '**', component: NotFoundComponent } 
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]  
})

export class SystemRoutingModule {}