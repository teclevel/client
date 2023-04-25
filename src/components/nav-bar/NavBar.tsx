import React, { useContext } from "react"
import { Context } from "../../index";
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MAIN_ROUTE, AUTH_ROUTE } from "../../const";
import { observer } from 'mobx-react-lite';
import { useNavigate } from "react-router-dom";
// import { MAIN_ROUTE } from "../../const";

function NavBar() {
  const { user } = useContext(Context);
  console.log(user)
  
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={MAIN_ROUTE}>На главную</NavLink>
        {user.isAuth ?
          <Nav className='ml-auto'>
            <Button variant={'outline-light'} onClick={()=>navigate(AUTH_ROUTE)}>Админ панель</Button>
            <Button variant={'outline-light'} onClick={()=>navigate(AUTH_ROUTE)}className='ms-2'>Войти</Button>
          </Nav>
          :
          <Nav className='ml-auto'>
            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  )
}

export default observer(NavBar);


