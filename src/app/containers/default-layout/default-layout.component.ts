import { Component } from '@angular/core';

import { navItems } from './_nav';
import { IconSetService } from '@coreui/icons-angular';
import { cilListNumbered, cilPaperPlane, brandSet } from '@coreui/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {

  public navItems = navItems;

  constructor(public iconSet: IconSetService) {
    iconSet.icons = { cilListNumbered, cilPaperPlane, ...brandSet };
  }
}
