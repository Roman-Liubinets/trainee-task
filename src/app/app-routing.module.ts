import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { FirstPageComponent } from './system/first-page/first-page.component';
// import { SecondPageComponent } from './second-page/second-page.component';
// import { ThirdPageComponent } from './third-page/third-page.component';
// import { NotFoundComponent } from './not-found/not-found.component';
import { SystemComponent } from "./system/system.component";




export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: 'system', component: SystemComponent }
    // { path: 'firstPage', component: FirstPageComponent },
//     { path: 'secondPage', component: SecondPageComponent },
//     { path: 'thirdPage', component: ThirdPageComponent },
//     { path: '**', component: NotFoundComponent }
    {path: 'system', loadChildren: './system/system.module#SystemModule'}
  ];


  

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})

export class AppRoutingModule {}