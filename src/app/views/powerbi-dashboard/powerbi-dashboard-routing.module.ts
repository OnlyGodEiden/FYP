import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PowerbiDashboardComponent } from './powerbi-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: PowerbiDashboardComponent,
    data: {
      title: $localize`Dashboard`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerbiDashboardRoutingModule {
}
