import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loginAccess() {
    this.login$.next(true);
  }
}
