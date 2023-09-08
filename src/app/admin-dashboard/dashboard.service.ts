import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Low Priority',
      data: [5, 6, 8, 9, 14, 21, 32]
      }, 
      {
        name: 'Medium Priority',
        data: [1, 1, 5, 7, 9, 11, 17]
      },
      {
        name: 'Critical',
        data: [3, 2, 1, 2, 3, 1, 5]
      },
      {
        name: 'High Priority',
        data: [2, 2, 1, 2, 1, 1, 2]
      }
    ];
  }

  cards() {
    return [[71, 20, 45, 85], [77, 74, 73, 76], [86, 89, 87, 92.5]];
  }

  pieChart() {
    return [{
      name: 'Completed',
      y: 59,
      sliced: true,
      selected: true
    }, {
      name: 'To Do',
      y: 11
    }, {
      name: 'In Progress',
      y: 20
    },{
      name: 'Review',
      y: 10
    }];
  }
}
