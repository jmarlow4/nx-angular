import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { BaseComponent } from '@nx-angular/xplat/core';

@Component({
  selector: 'client-theme-switcher',
  templateUrl: 'theme-switcher.component.html',
})
export class ThemeSwitcherComponent extends BaseComponent {
  @Output() themeChange: EventEmitter<boolean> = new EventEmitter();
  @Input() isDarkTheme!: boolean;

  toggleTheme(event: MatSlideToggleChange) {
    this.themeChange.emit(event.checked);
  }
}
