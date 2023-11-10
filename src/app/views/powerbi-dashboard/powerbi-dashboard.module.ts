import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { PowerbiDashboardRoutingModule } from './powerbi-dashboard-routing.module';

import { WidgetsModule } from '../widgets/widgets.module';
import { PowerbiDashboardComponent } from './powerbi-dashboard.component';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    PowerbiDashboardRoutingModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    WidgetsModule,
    PowerBIEmbedModule,
    ToastrModule.forRoot()
  ],
  declarations: [PowerbiDashboardComponent]
})
export class PowerbiDashboardModule {
}
