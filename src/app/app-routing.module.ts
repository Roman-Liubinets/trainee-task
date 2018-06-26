import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component'; 


const appRoutes: Routes = [
    { path: '', component: FirstPageComponent },
    { path: 'secondPage', component: SecondPageComponent },
    { path: 'thirdPage', component: ThirdPageComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}