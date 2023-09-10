const regEx = {
  id: (text) => {
    const re = /^[a-zA-Z0-9]{3,20}$/;
    return re.test(String(text).toLowerCase());
  },

  email: (text) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(text).toLowerCase());
  },

  name: (text) => {
    const re = /^[A-Za-z0-9가-힣]{1,12}$/;
    return re.test(String(text));
  },

  pw: (text) => {
    const re = /^[A-Za-z0-9가-힣!.@#$%^&*]{8,20}$/;
    return re.test(String(text));
  },
};

export default regEx;
