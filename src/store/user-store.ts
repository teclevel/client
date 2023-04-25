import { makeAutoObservable } from 'mobx';//работа с MOBX store
import { User } from '../types/user';

/* type User = {
  email: string;
  password: string | number;
}
 */
export default class UserStore {
  _isAuth: boolean;
  _user: User;

  constructor() {
    this._isAuth = false;
    this._user = { email: '', password: '' };
    makeAutoObservable(this);//следит за изменением переменных, и перерендеривает страницу
  }

  setIsAuth(bool: boolean):void {//action
    this._isAuth = bool;
  }

  setUser(user: User):void { // action
    this._user = user;
  }

  get isAuth() {
    return this._isAuth //компьютед ф-ции.вызываются, когда переменная внутри была изменена
  }

  get user() {
    return this._user
  }
}
