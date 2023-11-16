import { Component, OnInit, ViewChild } from '@angular/core';
import { PowerBIReportEmbedComponent } from 'powerbi-client-angular';
import { IReportEmbedConfiguration, models, service, Embed } from 'powerbi-client';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-powerbi-dashboard',
  templateUrl: './powerbi-dashboard.component.html',
  styleUrls: ['./powerbi-dashboard.component.scss']
})
export class PowerbiDashboardComponent implements OnInit{
  reportConfig: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNmUyYTk0MjYtN2RkZS00OTE4LTgxZjctZDkwYjllNTZlNmQ0IiwidCI6IjRlMmY1NzE2LTk0ZDMtNGViMC1hZjIyLWI4OTljOTFmN2NkMyIsImMiOjEwfQ%3D%3D',
    tokenType: models.TokenType.Embed,
    accessToken: '',
    settings: undefined,
  };
  @ViewChild(PowerBIReportEmbedComponent)
  reportObj!: PowerBIReportEmbedComponent;
  eventHandlersMap = new Map([
    [
      'loaded',
      () => {
        const report = this.reportObj.getReport();
        report.setComponentTitle('Embedded report');
      },
    ],
    ['rendered', () => console.log('Report has rendered')],
    [
      'error',
      (event?: service.ICustomEvent<any>) => {
        if (event) {
          console.error(event.detail);
        }
      },
    ],
    ['visualClicked', () => console.log('visual clicked')],
    ['pageChanged', (event) => ''],
  ]) as Map<
    string,
    (event?: service.ICustomEvent<any>, embeddedEntity?: Embed) => void | null
  >;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.embedReport();
  }

  embedReport(){
     this.reportConfig = {
        ...this.reportConfig,
         accessToken: 'token',
         id: 'reportId',
         embedUrl: this.reportConfig.embedUrl,
      };
  }

  displayToast(message: string) {
    this.toastr.success(message);
  }

// setDataSelectedEvent(): void {
//   console.log('Button clicked');
//   this.eventHandlersMap = new Map<string, (event?: service.ICustomEvent<any>, embeddedEntity?: Embed) => void | null>([
//     ...this.eventHandlersMap,
//     ['dataSelected', (event) => {
//       this.displayToast('Data selected: ' + JSON.stringify(event));
//       console.log(event);
//     }],
//   ]);
// }


}

