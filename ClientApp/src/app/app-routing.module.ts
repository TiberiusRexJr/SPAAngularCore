import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditLegoComponent } from './add-edit-lego/add-edit-lego.component';
import { ViewAllLegosComponent } from './view-all-legos/view-all-legos.component';
import { ViewLegoComponent } from './view-lego/view-lego.component';


const routes: Routes = [
{path: '', component: ViewAllLegosComponent, pathMatch: 'full'},
{path: 'viewLego/:id', component: ViewLegoComponent },
{path: 'add', component: AddEditLegoComponent},
{path: 'edit', component: AddEditLegoComponent },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
