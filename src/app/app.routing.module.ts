import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BoardComponent } from './manager-board/board/board.component'
import { DashboardComponent } from './admin-dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: BoardComponent },
  { path: 'admin-dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }