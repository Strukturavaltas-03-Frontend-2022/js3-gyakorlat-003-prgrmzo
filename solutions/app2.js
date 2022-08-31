const cookieHandler = {
  getAll() {
    let cookiesObj = {};
    const cookies = document.cookie.split("; ");
    cookies.forEach((cookie) => {
      const c = cookie.split("=");
      cookiesObj[c[0]] = c[1];
    });
    return cookiesObj;
  },
  toSessionStorage() {
    const cookiesObj = this.getAll();
    Object.entries(cookiesObj).forEach(([key, value]) => {
      sessionStorage.setItem(key, value);
    });
  },
  flush() {
    const cookiesObj = this.getAll();
    Object.keys(cookiesObj).forEach((key) => {
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  },
};

export { cookieHandler };
