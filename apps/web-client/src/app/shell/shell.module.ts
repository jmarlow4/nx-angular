import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell.routing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../features/shared/shared.module';
import { ShellComponent } from './components';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, SharedModule, ShellRoutingModule, MatSidenavModule],
})
export class ShellModule {}
