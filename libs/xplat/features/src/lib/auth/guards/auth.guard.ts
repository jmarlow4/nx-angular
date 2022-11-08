import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthFacade } from '../';
import { filter, map, Observable, skipUntil } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authFacade: AuthFacade) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authFacade.user$.pipe(
      skipUntil(
        this.authFacade.initialized$.pipe(filter((init) => init === true)),
      ),
      map((user) => {
        return !!user;
      }),
    );
  }
}
