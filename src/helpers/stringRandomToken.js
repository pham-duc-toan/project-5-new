function randomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
// //ví dụ
// const token = randomString(30);
// console.log(token); // In ra chuỗi ngẫu nhiên có độ dài 30 ký tự
export default randomString;