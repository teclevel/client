import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../../routes";
import { Context } from '../../index'
import NavBar from "../nav-bar/NavBar";


function App(): JSX.Element {
  const { user } = useContext(Context)
  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        {
          user.isAuth && routes.map(({ path, Component }) =>
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

export default App;
