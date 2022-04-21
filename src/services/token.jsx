function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
	const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken
}

function removeToken(){
	sessionStorage.removeItem('token'); 
}

export { setToken, getToken, removeToken };