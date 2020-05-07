import { BehaviorSubject, Observable } from "rxjs";
import { login } from "../../../api";

const Storage = {
  get authToken (): string|null {
    return localStorage.getItem(this.Keys.TOKEN)
  },
  set authToken(token: string|null) {
    localStorage.setItem(this.Keys.TOKEN, token!!)
  },
  clear() {
    Object.keys(this.Keys).forEach(k => localStorage.removeItem(k))
  },
  Keys: {
    TOKEN: 'token'
  }
}

export enum AuthStatus {
  AUTHORIZED,
  UNAUTHORIZED,
  UNDEFINED,
}

export class AuthService {
  private _authStatus = new BehaviorSubject<AuthStatus>(AuthStatus.UNDEFINED)
  private _authToken = new BehaviorSubject<string|null>(null)
  authStatus: Observable<AuthStatus> = this._authStatus
  authToken: Observable<string|null> = this._authToken

  constructor() {
    if (Storage.authToken) {
      this._authStatus.next(AuthStatus.AUTHORIZED)
      this._authToken.next(Storage.authToken)
    } else {
      this._authStatus.next(AuthStatus.UNAUTHORIZED)
    }
  }

  login = async ({ user, password }) => {
    try {
      const token = await login(user, password)
      console.log(token)
      Storage.authToken = token

      this._authStatus.next(AuthStatus.AUTHORIZED)
      this._authToken.next(token)
    } catch {
      this._authStatus.next(AuthStatus.UNAUTHORIZED)
      throw new Error() // cambiar
    }
  }

  logout = () => {
   Storage.clear()
   this._authStatus.next(AuthStatus.UNAUTHORIZED)
  }

  static default = new AuthService()
}
