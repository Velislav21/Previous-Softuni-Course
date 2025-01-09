export const getAccessToken = () => {
    const authJSON = localStorage.getItem('auth');

    if(!authJSON) {
        return '';
    }
    const authData = JSON.parse(authJSON);
    console.log(authData)
    return authData?.accessToken;
}