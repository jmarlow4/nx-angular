import { Injectable } from '@angular/core';
import { SupabaseService } from '@nx-angular/xplat/core';
import {
  AuthError,
  AuthResponse,
  Session,
  User,
  UserResponse,
} from '@supabase/supabase-js';
import { combineLatest, from, map, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly sb: SupabaseService) {}

  init(): Observable<{
    userData: User | null;
    userError: AuthError | null;
    sessionData: Session | null;
    sessionError: AuthError | null;
  }> {
    return combineLatest([
      from(this.sb.client.auth.getUser()),
      from(this.sb.client.auth.getSession()),
    ]).pipe(
      map(
        ([userResponse, sessionResponse]: [
          UserResponse,
          { data: { session: Session | null }; error: AuthError | null }
        ]) => ({
          userData: userResponse.data.user,
          userError: userResponse.error,
          sessionData: sessionResponse.data.session,
          sessionError: sessionResponse.error,
        })
      )
    );
  }

  login(creds: { email: string; password: string }): Observable<AuthResponse> {
    return from(this.sb.client.auth.signInWithPassword(creds));
  }

  register(creds: {
    email: string;
    password: string;
  }): Observable<AuthResponse> {
    return from(this.sb.client.auth.signUp(creds));
  }

  logOut(): Observable<{ error: AuthError | null }> {
    return from(this.sb.client.auth.signOut());
  }
}
