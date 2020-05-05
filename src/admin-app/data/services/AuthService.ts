import { BehaviorSubject, Observable } from "rxjs";
import { login } from "../../api";

export enum AuthStatus {
  AUTHORIZED,
  UNAUTHORIZED,
  UNDEFINED,
}

export class AuthService {
  private _authStatus = new BehaviorSubject<AuthStatus>(AuthStatus.UNDEFINED)
  authStatus: Observable<AuthStatus> = this._authStatus

  login =  async ({ user, password }) => {
    const { token } = await login({ user, password })
    Storage.authToken = token

    this._authStatus.next(AuthStatus.AUTHORIZED)
    return
  }

  logout = () => {
   Storage.clear()
   this._authStatus.next(AuthStatus.UNAUTHORIZED)
  }

  static default = new AuthService()
}

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
