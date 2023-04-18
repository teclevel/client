import { makeAutoObservable } from 'mobx';//работа с MOBX store
import { Types } from '../types/type';
import { Brands } from '../types/brand';
import { Devices } from '../types/device';
import { devices } from '../mocks/devices';


export default class DeviceStore {
  _types: Types;
  _brands: Brands;
  _devices: Devices;

  constructor() {
    this._types = [
      { id: 1, name: 'электромеханическое' },
      { id: 2, name: 'тепловое' },
      { id: 3, name: 'другое' }
    ]

    this._brands = [
      { id: 1, name: 'winterhalter' },
      { id: 2, name: 'kromo' },
      { id: 3, name: 'rational' }
    ];

    this._devices = devices

    makeAutoObservable(this);//следит за изменением переменных, и перерендеривает страницу
  }

  setTypes(types: Types) {//action
    this._types = types;
  }

  setBrands(brands: Brands) {//action
    this._brands = brands;
  }

  setDevises(devises: Devices) {//action
    this._devices = devises;
  }

  get types() {
    return this._types //компьютед ф-ции.вызываются, когда переменная внутри была изменена
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }
}
