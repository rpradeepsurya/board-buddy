import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../models/column.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input()  column!: Column;

  constructor() { }

  ngOnInit(): void {
  }

}
