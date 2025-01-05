import { post } from "./requester";

const BASE_URL = 'http://localhost:3000/api/users';

export const login = (email, password) => post(`${BASE_URL}/login`, { email, password });

export const register = (email, password) => post(`${BASE_URL}/register`, { email, password });