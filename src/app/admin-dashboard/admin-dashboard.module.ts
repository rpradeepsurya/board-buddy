import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardService } from './dashboard.service';
import { AreaComponent } from './area/area.component';
import { CardComponent } from './card/card.component';
import { PieComponent } from './pie/pie.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { AdminDashboardRoutingModule } from './admin-dashboard.routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
  ],
  providers: [
    DashboardService
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    AdminDashboardRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class AdminDashboardModule { }
