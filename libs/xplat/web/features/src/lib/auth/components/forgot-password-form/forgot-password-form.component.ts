import { Component } from '@angular/core';

import { BaseComponent } from '@nx-angular/xplat/core';

@Component({
  selector: 'client-forgot-password-form',
  templateUrl: 'forgot-password-form.component.html',
})
export class ForgotPasswordFormComponent extends BaseComponent {
  constructor() {
    super();
  }
}
