import axios from 'axios';


//1 инстанс
const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL //передает адрес
})
//2 инстанс
const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

//для подстановки токена во 2 инстанс из LocalStorage по ключу token в поле
// header, который добавим при авторизации
const authInterceptor = config => {
  config.header.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}
// для запроса
$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}
