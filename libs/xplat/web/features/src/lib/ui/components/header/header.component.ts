import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { HeaderBaseComponent } from '@nx-angular/xplat/features';

@Component({
  selector: 'client-web-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class WebHeaderComponent extends HeaderBaseComponent {
  @Output() themeChange: EventEmitter<boolean> = new EventEmitter();
  @Input() routes: {
    [name: string]: {
      path: string;
      icon: string;
      navLabel: string;
      order: number;
    };
  } = {};
  @Input() isMobile: boolean | null = false;
  @Input() isDarkTheme!: boolean;

  url = '';

  routeAscOrder = (
    a: KeyValue<string, { order: number }>,
    b: KeyValue<string, { order: number }>
  ): number => {
    return a.value.order < b.value.order
      ? -1
      : b.value.order < a.value.order
      ? 1
      : 0;
  };

  toggleTheme(event: MatSlideToggleChange) {
    this.themeChange.emit(event.checked);
  }
  changeActive(url: string) {
    this.url = url;
  }
}
