import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BaseComponent } from '@nx-angular/xplat/core';
import { AuthFacade } from '@nx-angular/xplat/features';

@Component({
  selector: 'client-register-form',
  templateUrl: 'register-form.component.html',
})
export class RegisterFormComponent extends BaseComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authFacade: AuthFacade) {
    super();
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  onRegister() {
    this.authFacade.register(this.registerForm.value);
  }
}
