// import { observer } from 'mobx-react-lite';
// import { useContext, useState } from 'react';
// import { Card, Container } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { NavLink, useLocation } from 'react-router-dom';
// import { Context } from '../../store/user-store';
// import { login, registration } from '../http/userApi';
// import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const';


// const Auth = observer(() => {
//   const {user}=useContext(Context);
//   const location = useLocation();
//   const isLogin = location.pathname === LOGIN_ROUTE;
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const click = async () => {
//     let data;
//     if (isLogin) {
//       data = await login(email, password);
//     } else {
//       data = await registration(email, password);
//       console.log(data);
//     }
//     user.setUser(user);
//     user.setIsAuth(true)
//   }
//   return (
//     <Container
//       className='d-flex justify-content-center align-item-center'
//       style={{ height: window.innerHeight - 54 }}//высота окна браузера минус Navbar
//     >
//       <Card
//         className='p-5 m-auto'
//       >
//         <h2 className='m-auto mb-4'>
//           {
//             isLogin ? 'Авторизация' : 'Регистрация'
//           }
//         </h2>
//         <Form
//           className='d-flex flex-column'
//         >
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               autoComplete='on'
//             />
//           </Form.Group>

//           <div className='d-flex justify-content-between'>
//             {
//               isLogin ?
//                 <NavLink to={REGISTRATION_ROUTE} className='me-4'>
//                   Зарегистрироваться
//                 </NavLink>
//                 :
//                 <NavLink to={LOGIN_ROUTE} className='me-4'>
//                   Войти
//                 </NavLink>

//             }
//             <Button
//               variant="primary"
//               type="submit"
//               onClick={click}
//             >
//               {
//                 isLogin ? 'Войти' : 'Регистрация'
//               }
//             </Button>
//           </div>
//         </Form>

//       </Card>
//     </Container>
//   );
// });

// export default <Auth />;
function Auth(): JSX.Element {
  return (
    <>
    Auth
    </>
  )
}
export default Auth;
