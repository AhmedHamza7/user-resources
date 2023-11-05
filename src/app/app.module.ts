import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { StoreModule } from '@ngrx/store';
import { showFixedTimeCounter } from './store/store';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicInfoComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    NgxDropzoneModule,
    StoreModule.forRoot({showFixed: showFixedTimeCounter})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
