import { Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AddEditLegoComponent } from './add-edit-lego/add-edit-lego.component';
import { ViewAllLegosComponent } from './view-all-legos/view-all-legos.component';
import { ViewLegoComponent } from './view-lego/view-lego.component';
import { LegoAngularService } from './lego-angular.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';
}
