import { Component } from '@angular/core';

import { BaseComponent } from '@nx-angular/xplat/core';
import { AuthFacade, ThemeSelectFacade } from '@nx-angular/xplat/features';
import { User } from '@supabase/supabase-js';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'client-profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent extends BaseComponent {
  $user: Observable<User | null>;
  $theme!: Observable<'light' | 'dark'>;
  isDarkTheme = false;

  constructor(
    private authFacade: AuthFacade,
    private themeFacade: ThemeSelectFacade,
  ) {
    super();
    this.$user = this.authFacade.user$;
    this.$theme = themeFacade.theme$.pipe(
      tap((theme: 'light' | 'dark') => {
        this.isDarkTheme = theme === 'dark';
      }),
    );
  }

  logout() {
    this.authFacade.logout();
  }

  themeToggle(isDark: boolean) {
    this.themeFacade.selectTheme(isDark ? 'dark' : 'light');
  }
}
