import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import { HeaderComponent } from './components/header/header.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
    imports: [ReactiveFormsModule, FormsModule],
    exports: [ReactiveFormsModule, FormsModule, NgxPermissionsModule],
    declarations: []
})

export class SharedModule {}