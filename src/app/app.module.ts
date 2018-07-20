import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';


import { FormsModule } from '@angular/forms';
import { SearchPipe } from './app.pipe';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import { CrudService } from './content/services/crud.service';
// import { EditPageComponent } from './content/edit-page/edit-page.component';
import { AuthModule } from './auth/auth.module';
// import { UsersService } from './auth/shared/services/user.service';
// import { AuthService } from './auth/shared/services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { CrudService } from './shared/services/crud.service';
import { UsersService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { AddComponent } from './system/dialog/add/add.component';
import { EditComponent } from './system/dialog/edit/edit/edit.component';
import { DeleteComponent } from './system/dialog/delete/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    // FirstPageComponent,
    // SecondPageComponent,
    // ThirdPageComponent,
    // NotFoundComponent,
    SearchPipe,
    // EditPageComponent,
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
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [CrudService, UsersService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [AddComponent, EditComponent, DeleteComponent]
})
export class AppModule { }
