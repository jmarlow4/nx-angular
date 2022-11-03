import { Component } from '@angular/core';

import { BaseComponent } from '@nx-angular/xplat/core';

@Component({
  selector: 'client-profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent extends BaseComponent {
  constructor() {
    super();
  }
}
