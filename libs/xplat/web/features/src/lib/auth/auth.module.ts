import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '@nx-angular/xplat/features';
import { UIModule } from '../ui/ui.module';

import {
  AuthComponent,
  AUTH_COMPONENTS,
  ForgotPasswordFormComponent,
  LoginFormComponent,
  RegisterFormComponent,
  ResetPasswordFormComponent,
} from './components';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginFormComponent,
      },
      {
        path: 'register',
        component: RegisterFormComponent,
      },
      {
        path: 'forgot',
        component: ForgotPasswordFormComponent,
      },
      {
        path: 'reset',
        component: ResetPasswordFormComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'prefix',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), UIModule, AuthModule],
  declarations: [...AUTH_COMPONENTS],
  exports: [...AUTH_COMPONENTS],
})
export class WebAuthModule {}
