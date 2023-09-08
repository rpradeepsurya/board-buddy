import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { DashboardService } from '../dashboard.service';

export interface PeriodicElement {
  position: number;
  name: string;
  ToDo: number;
  Progress: number;
  Completed: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Surya', ToDo: 4, Progress: 2, Completed: 12 },
  { position: 2, name: 'Mathew', ToDo: 6, Progress: 1, Completed: 20 },
  { position: 3, name: 'John', ToDo: 2, Progress: 2, Completed: 11 },
  { position: 4, name: 'Dave', ToDo: 1, Progress: 0, Completed: 4 },
  { position: 5, name: 'Baron', ToDo: 5, Progress: 3, Completed: 8 },
  { position: 6, name: 'Mathew', ToDo: 6, Progress: 1, Completed: 20 },
  { position: 7, name: 'Baron', ToDo: 5, Progress: 3, Completed: 8 },
  { position: 8, name: 'John', ToDo: 2, Progress: 2, Completed: 11 },
  { position: 9, name: 'Surya', ToDo: 4, Progress: 2, Completed: 12 },
  { position: 10, name: 'Dave', ToDo: 1, Progress: 0, Completed: 4 },
  
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart: Array<Object> = [];
  cards: Array<Array<number>> = [];
  pieChart: Array<Object> = [];

  displayedColumns: string[] = ['position', 'name', 'ToDo', 'Progress', 'Completed'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }


}
