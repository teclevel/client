import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../index';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../../const';
import { login, registration } from '../../http/userApi';

function Auth() {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;//данные пользователя

      if (isLogin) {
        data = await login(email, password);//запрос на авторизацию(уже есть аккаунт)
        console.log('прошла авторизация', data);
      } else {
        data = await registration(email, password);//запрос на регистрацию
        console.log('прошла регистрация', data);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(MAIN_ROUTE);

    } catch (e: any) {
      alert(e.response.data.message)//сообщения определенные на сервере
    }
  }

  return (
    <Container
      className='d-flex justify-content-center align-item-center'
      style={{ height: window.innerHeight - 54 }}//высота окна браузера минус Navbar
    >
      <Card
        className='p-5 m-auto'
      >
        <h2 className='m-auto mb-4'>
          {
            isLogin ? 'Авторизация' : 'Регистрация'
          }
        </h2>
        <Form
          className='d-flex flex-column'
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete='on'
            />
          </Form.Group>

          <div className='d-flex justify-content-between'>
            {
              isLogin ?
                <>
                  Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} className='me-4'>
                    Зарегистрируйся
                  </NavLink>
                </>
                :
                <>
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE} className='me-4'>
                    Войти
                  </NavLink>
                </>

            }
            <Button
              variant="primary"
              onClick={click}
            >
              {
                isLogin ? 'Войти' : 'Зарегистрироваться'
              }
            </Button>
          </div>
        </Form>

      </Card>
    </Container>
  );
};

export default observer(Auth);
