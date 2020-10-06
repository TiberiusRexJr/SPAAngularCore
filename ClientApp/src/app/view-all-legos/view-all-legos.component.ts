import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { LegoAngularService } from '../lego-angular.service';
import { Lego } from '../../Models/Legos';


@Component({
  selector: 'app-view-all-legos',
  templateUrl: './view-all-legos.component.html',
  styleUrls: ['./view-all-legos.component.scss']
})
export class ViewAllLegosComponent implements OnInit {
allLegos$: Observable<Lego[]>;

  constructor(private legoService: LegoAngularService) {
  }

  ngOnInit(): void {
    this.loadAllLegos();
  }
  loadAllLegos(): void {
    this.allLegos$ = this.legoService.getAllLegos();
  }
  deleteLego(serialNumber): void {
    const answer = confirm('Do you really wanna delete' + serialNumber + '?');
    if (answer){
      this.legoService.deleteLego(serialNumber).subscribe((data) => {this.loadAllLegos(); });
    }
  }

}
