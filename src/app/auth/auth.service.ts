import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticate = false;

  get userIsAuthenticated(){
    // eslint-disable-next-line no-underscore-dangle
    return this._userIsAuthenticate;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() { }

  login(){
    // eslint-disable-next-line no-underscore-dangle
    this._userIsAuthenticate = true;
  }

  logout(){
    // eslint-disable-next-line no-underscore-dangle
    this._userIsAuthenticate = false;
  }
}
