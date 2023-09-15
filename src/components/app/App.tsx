import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes, authRoutes } from "../../routes";
import { Context } from '../../index'
import NavBar from "../nav-bar/NavBar";
import { observer } from 'mobx-react-lite';
import { check } from "../../http/userApi";
import { Spinner } from "react-bootstrap";


function App(): JSX.Element {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then(
        data => {
          console.log('прошла проверка ', data, 'токен: ', localStorage.getItem('token'))
          user.setUser(data);
          user.setIsAuth(true);
        })
      .catch(() => {
        alert('Вы вышли из аккаунта')
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"border"} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        {
          user.isAuth &&
          authRoutes.map(({ path, Component }) =>
            <Route
              key={path}
              path={path}
              element={<Component />}
            />
          )
        }
        {
          publicRoutes.map(({ path, Component }) =>
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
