import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { getSelectedTheme } from '@nx-angular/xplat/features';

// xplat
import { WebBaseComponent } from '@nx-angular/xplat/web/features';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';

@Component({
  selector: 'client-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends WebBaseComponent {
  constructor(
    private store: Store,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    super();
    this.store
      .select(getSelectedTheme)
      .pipe(
        tap((theme: 'light' | 'dark') => {
          if (theme === 'light') {
            this.renderer.addClass(this.document.body, 'light');
            this.renderer.removeClass(this.document.body, 'dark');
          }
          if (theme === 'dark') {
            this.renderer.addClass(this.document.body, 'dark');
            this.renderer.removeClass(this.document.body, 'light');
          }
        })
      )
      .subscribe();
  }
}
