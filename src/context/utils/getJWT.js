export default function getJWT() {
    return localStorage.getItem('user-token');
}