import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import UserStore from './store/user-store';
import { User } from './types/user';
import DeviceStore from './store/device-store';
import { Devices } from './types/device';
import { brands, devices, types } from './mocks/devices';
import { Types } from './types/type';
import { Brands } from './types/brand';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

interface IStore {
  user: {
    isAuth: boolean,
    user: User, //| null
    setIsAuth: (a:boolean)=>void
  },
  devices: {
    types:Types,
    brands: Brands,
    devices:Devices,
    setDevices: (a:any[])=>void
  }
}

const defaultState:IStore = {
  user: {
    isAuth: false,
    user: {
      email: 'asd@m.ru',
      password: '123'
    },
    setIsAuth(){},
    // setUser(){}
  },
  devices: {
    types: types,
    brands: brands,
    devices: devices,
    // setTypes(){},
    // setBrands(){},
    setDevices(){}

  }
}

export const Context = createContext(defaultState);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      devices: new DeviceStore(),
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
