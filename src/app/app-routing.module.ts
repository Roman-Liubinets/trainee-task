import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
// import { FirstPageComponent } from './first-page/first-page.component';
// import { SecondPageComponent } from './second-page/second-page.component';
// import { ThirdPageComponent } from './third-page/third-page.component';
// import { NotFoundComponent } from './not-found/not-found.component';




export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
//     { path: 'firstPage', component: FirstPageComponent },
//     { path: 'secondPage', component: SecondPageComponent },
//     { path: 'thirdPage', component: ThirdPageComponent },
//     { path: '**', component: NotFoundComponent }
    {path: 'system', loadChildren: './auth/system/system.module#SystemModule'}
  ];


  

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}