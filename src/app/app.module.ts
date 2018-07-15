import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';



import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchPipe } from './app.pipe';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from './crud.service';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './auth/shared/services/user.service';
import { AuthService } from './auth/shared/services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AddComponent } from './dialog/add/add.component';
import { EditComponent } from './dialog/edit/edit/edit.component';
import { DeleteComponent } from './dialog/delete/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    // FirstPageComponent,
    // SecondPageComponent,
    // ThirdPageComponent,
    // NotFoundComponent,
    SearchPipe,
    EditPageComponent,
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AuthModule,
    NgxPermissionsModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [CrudService, UsersService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [AddComponent, EditComponent, DeleteComponent]
})
export class AppModule { }
