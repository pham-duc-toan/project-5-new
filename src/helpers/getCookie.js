function getCookieValue(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Kiểm tra xem cookie có chứa tên cần tìm hay không
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    // Trả về null nếu không tìm thấy cookie
    return null;
  }
export default getCookieValue;