import { $authHost, $host } from "./index.js";
import jwt_decode from 'jwt-decode';

export const registration = async(email, password) => {
  const response = await $host.post('api/user/registration', { email, password, role: 'ADMIN' })
  return response
}

export const login = async(email, password) => {
  const response = await $host.post('api/user/login', { email, password})
  return response
}

export const check = async() => {
  const response = await $host.post('api/user/registration')
  return response
}