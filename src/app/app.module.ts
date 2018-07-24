import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { CrudService } from './shared/services/crud.service';
import { UsersService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { AddComponent } from './system/dialog/add/add.component';
import { EditComponent } from './system/dialog/edit/edit/edit.component';
import { DeleteComponent } from './system/dialog/delete/delete/delete.component';
import { AuthGuard } from './shared/services/auth.guard';
import { ConfirmAddComponent } from './system/dialog/confirm/confirm-add/confirm-add.component';
import { ConfirmEditComponent } from './system/dialog/confirm/confirm-edit/confirm-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ConfirmAddComponent,
    ConfirmEditComponent
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
  providers: [CrudService, UsersService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [AddComponent, EditComponent, DeleteComponent, ConfirmAddComponent, ConfirmEditComponent]
})
export class AppModule { }
