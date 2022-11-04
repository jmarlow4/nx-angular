import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';

import { HeaderBaseComponent } from '@nx-angular/xplat/features';

@Component({
  selector: 'client-web-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class WebHeaderComponent extends HeaderBaseComponent {
  @Input() routes: {
    [name: string]: {
      path: string;
      icon: string;
      navLabel: string;
      order: number;
    };
  } = {};
  @Input() isMobile: boolean | null = false;

  url = '';

  routeAscOrder = (
    a: KeyValue<string, { order: number }>,
    b: KeyValue<string, { order: number }>,
  ): number => {
    return a.value.order < b.value.order
      ? -1
      : b.value.order < a.value.order
      ? 1
      : 0;
  };

  changeActive(url: string) {
    this.url = url;
  }
}
