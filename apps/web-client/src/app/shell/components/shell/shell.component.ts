import { Component, Inject, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { BaseComponent } from '@nx-angular/xplat/core';
// xplat

import { Observable } from 'rxjs';
import { filter, map, startWith, takeUntil, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { appRoutes } from '../../app-shell.routes';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { getSelectedTheme, selectTheme } from '@nx-angular/xplat/features';

@Component({
  selector: 'client-shell',
  templateUrl: 'shell.component.html',
})
export class ShellComponent extends BaseComponent implements OnInit {
  $isMobile!: Observable<boolean>;
  $theme!: Observable<'light' | 'dark'>;

  isDarkTheme = false;
  routes = appRoutes;

  constructor(
    private bpObs: BreakpointObserver,
    private router: Router,
    private store: Store,
    @Inject(DOCUMENT) private document: Document
  ) {
    super();
  }

  ngOnInit(): void {
    this.$theme = this.store.select(getSelectedTheme).pipe(
      tap((theme: 'light' | 'dark') => {
        this.isDarkTheme = theme === 'dark';
      })
    );

    this.$isMobile = this.bpObs
      .observe(['(max-width: 599px)'])
      .pipe(map((bpState: BreakpointState) => bpState.matches));

    (this.router.events as Observable<RouterEvent>)
      .pipe(
        startWith(new NavigationEnd(NaN, this.router.url, this.router.url)),
        takeUntil(this.destroy$),
        filter((event) => event instanceof NavigationEnd),
        map((event: RouterEvent) => event.url)
      )
      .subscribe((url) => {
        console.log({ url: url.slice(1) });
      });
  }

  handleThemeToggle(isDark: boolean) {
    this.store.dispatch(selectTheme({ theme: isDark ? 'dark' : 'light' }));
  }
}
