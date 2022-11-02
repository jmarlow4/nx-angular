import { Component } from '@angular/core';

import { BaseComponent } from '@nx-angular/xplat/core';

@Component({
  selector: 'client-reset-password-form',
  templateUrl: 'reset-password-form.component.html',
})
export class ResetPasswordFormComponent extends BaseComponent {
  constructor() {
    super();
  }
}
