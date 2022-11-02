import { AuthComponent } from './auth/auth.component';

import { LoginFormComponent } from './login-form/login-form.component';

import { RegisterFormComponent } from './register-form/register-form.component';

import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';

import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';

export const AUTH_COMPONENTS = [
  AuthComponent,
  LoginFormComponent,
  RegisterFormComponent,
  ForgotPasswordFormComponent,
  ResetPasswordFormComponent,
];

export * from './auth/auth.component';
export * from './login-form/login-form.component';
export * from './register-form/register-form.component';
export * from './forgot-password-form/forgot-password-form.component';
export * from './reset-password-form/reset-password-form.component';
