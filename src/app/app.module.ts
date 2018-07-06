import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    NotFoundComponent,
    SearchPipe,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AuthModule
  ],
  providers: [CrudService, UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
