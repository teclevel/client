import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../routes";
import { Context } from '../../index'
import NavBar from "../nav-bar/NavBar";
import { observer } from 'mobx-react-lite';


function App(): JSX.Element {
  const { user } = useContext(Context)
  console.log('user.isAuth-', user.isAuth);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        {
          user.isAuth && publicRoutes.map(({ path, Component }) =>
            <Route
              key={path}
              path={path}
              element={<Component />}
            />
          )
        }
      </Routes>
    </BrowserRouter>
  )
}

export default observer(App);
