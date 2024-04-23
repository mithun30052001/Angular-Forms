import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RadioGroupInputComponent } from './radio/radio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { HttpClientModule } from '@angular/common/http';
import { ValidationErrorsComponent } from './validation-errors/validation-errors.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { MobileNumberComponent } from './mobile-number/mobile-number.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileTransformPipe } from './pipes/mobile-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextInputComponent,
    DropdownComponent,
    RadioGroupInputComponent,
    CheckboxComponent,
    TextAreaComponent,
    MobileNumberComponent,
    ValidationErrorsComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MobileTransformPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
