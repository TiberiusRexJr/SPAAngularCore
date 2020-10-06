
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AddEditLegoComponent } from './add-edit-lego/add-edit-lego.component';
import { ViewAllLegosComponent } from './view-all-legos/view-all-legos.component';
import { ViewLegoComponent } from './view-lego/view-lego.component';
import { LegoAngularService } from './lego-angular.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ViewAllLegosComponent,
    ViewLegoComponent,
    AddEditLegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LegoAngularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
