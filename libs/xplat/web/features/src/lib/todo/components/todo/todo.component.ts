import { Component } from '@angular/core';

import { BaseComponent } from '@nx-angular/xplat/core';

@Component({
  selector: 'client-todo',
  templateUrl: 'todo.component.html',
})
export class TodoComponent extends BaseComponent {
  constructor() {
    super();
  }
}
