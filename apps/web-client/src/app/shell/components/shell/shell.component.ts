import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseComponent } from '@nx-angular/xplat/core';
import { appRoutes } from '../../app-shell.routes';

@Component({
  selector: 'client-shell',
  templateUrl: 'shell.component.html',
})
export class ShellComponent extends BaseComponent {
  $isMobile!: Observable<boolean>;

  routes = appRoutes;

  constructor(private bpObs: BreakpointObserver) {
    super();
    this.$isMobile = this.bpObs
      .observe(['(max-width: 599px)'])
      .pipe(map((bpState: BreakpointState) => bpState.matches));
  }
}
