// @ts-ignore
import Service from '@/modules/Services/Service.ts';

/**
 * Login service send login data to server
 * @param login user login
 * @param password user password
 * @returns login response from server
 */
const loginService = async (email: string, password: string): Promise<any> => {
  const response = await Service.createRequest('POST', '/auth/login', { email, password });
  return response;
};

/**
 * Send register new user data to server
 * @param username username
 * @param email email
 * @param password password
 * @param repeatPassword repeat password
 * @returns register response
 */
// eslint-disable-next-line max-len
const registerService = async (username: string, email: string, password: string, repeatPassword: string): Promise<any> => {
  const response = await Service.createRequest('POST', '/auth/register', {
    username, email, password, repeatPassword,
  });

  return response;
};

export { loginService, registerService };
