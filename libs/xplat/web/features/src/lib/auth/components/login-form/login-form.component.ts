import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BaseComponent } from '@nx-angular/xplat/core';
import { AuthFacade } from '@nx-angular/xplat/features';

@Component({
  selector: 'client-login-form',
  templateUrl: 'login-form.component.html',
})
export class LoginFormComponent extends BaseComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authFacade: AuthFacade) {
    super();
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    this.authFacade.login(this.loginForm.value);
  }
}
