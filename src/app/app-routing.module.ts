import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { NotFoundComponent } from './not-found/not-found.component';




export const appRoutes: Routes = [
    { path: '', component: SecondPageComponent },
    { path: 'firstPage', component: FirstPageComponent },
    { path: 'secondPage', component: SecondPageComponent },
    { path: 'thirdPage', component: ThirdPageComponent },
    { path: '**', component: NotFoundComponent }
  ];


  

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}