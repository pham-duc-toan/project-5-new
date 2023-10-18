function deleteCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
export default deleteCookie;
// ví dụ Sử dụng hàm để xóa cookie có tên là 'token'
// deleteCookie('token');
