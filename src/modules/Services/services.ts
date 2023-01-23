// @ts-ignore
import Service from '@/modules/Services/Service.ts';

/**
 * Login service send login data to server
 * @param login user login
 * @param password user password
 * @returns login response from server
 */
const loginService = async (login: string, password: string): Promise<any> => {
  const response = await Service.createRequest('POST', '/auth/login', { login, password });
  return response;
};

export default loginService;
