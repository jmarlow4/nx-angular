import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@nx-angular/xplat/web/features';

@Component({
  selector: 'client-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
