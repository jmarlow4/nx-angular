import { Directive } from '@angular/core';
// libs
import { BaseComponent } from '@nx-angular/xplat/core';

@Directive()
export abstract class WebBaseComponent extends BaseComponent {
  /**
   * Define common root app component behavior for all web apps here
   */
}
