import { Component } from '@angular/core';

import { BaseComponent } from '@nx-angular/xplat/core';

@Component({
  selector: 'client-auth',
  templateUrl: 'auth.component.html',
})
export class AuthComponent extends BaseComponent {
  links: string[] = ['login', 'register'];
  constructor() {
    super();
  }
}
