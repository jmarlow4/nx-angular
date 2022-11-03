import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../features/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../features/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ShellRoutingModule {}
