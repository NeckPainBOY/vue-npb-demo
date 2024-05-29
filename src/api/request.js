import axios from "axios";

// axios 拦截器 简单封装
export const createAxiosByInterceptors = (config) => {
  const instance = axios.create({
    timeout: 1000, // 超时
    withCredentials: true, // 跨域携带cookie
    ...config,
  });

  // 请求拦截器
  instance.interceptors.request.use(
    function (config) {
      // 发送前做什么
      console.log("config:", config);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      // 响应返回数据
      console.log("reponse:", response);
      const { code, data } = response.data;
      if (code === 200) return data;
      else if (code === 401) {
        return Promise.reject(response);
      } else {
        return Promise.reject(response);
      }
    },
    function (error) {
      if (error.response && error.response.status === 401) {
        return Promise.reject(error);
      }
    }
  );
  return instance;
};
