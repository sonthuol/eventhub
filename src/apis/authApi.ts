import axiosClient from './axiosClient';

class AuthApi {
  HandleAuthentication = async (
    url: string,
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: any,
  ) => {
    return await axiosClient(`/auth${url}`, {
      method: method ?? 'GET',
      data,
    });
  };
}

const authenticationApi = new AuthApi();

export default authenticationApi;
