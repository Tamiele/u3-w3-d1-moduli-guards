import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccessoGuard implements CanActivate, CanActivateChild {
  constructor(private loginSvc: LoginService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Usa il valore attuale del BehaviorSubject per determinare se l'utente può accedere
    return this.loginSvc.login$.getValue();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Usa il valore attuale del BehaviorSubject per determinare se l'utente può accedere
    return this.loginSvc.login$.getValue();
  }
}
