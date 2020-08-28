import Cookies from 'js-cookie';
export const TOKEN_KEY = "hallelujah-token";
export const EMAIL_KEY = "hallelujah-email";
export const isAuthenticated = () => {
  if (Cookies.get(TOKEN_KEY)){
    return true
  } 
  return false;
}
export const getToken = () => Cookies.get(TOKEN_KEY);
export const getEmail = () => Cookies.get(EMAIL_KEY);
export const login = (token, email) => {
  Cookies.set(TOKEN_KEY, token)
  Cookies.set(EMAIL_KEY, email)
};
export const logout = () => {
  Cookies.remove(TOKEN_KEY)
  Cookies.remove(EMAIL_KEY)
};
// TODO - Implementar Autorizacao (verificar autorizacao do token no backend)