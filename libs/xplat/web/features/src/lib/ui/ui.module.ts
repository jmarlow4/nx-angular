import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

// libs
import { UISharedModule } from '@nx-angular/xplat/features';
import { UI_COMPONENTS } from './components';

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  UISharedModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatInputModule,
  MatTabsModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...UI_COMPONENTS],
  exports: [...MODULES, ...UI_COMPONENTS],
})
export class UIModule {}
