import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [ReactiveFormsModule, FormsModule],
    exports: [ReactiveFormsModule, FormsModule],
    declarations: []
})

export class SharedModule {}