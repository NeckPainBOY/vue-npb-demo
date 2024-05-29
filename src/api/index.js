import { createAxiosByInterceptors } from "./request";

export const request = createAxiosByInterceptors({
  baseURL: "http://192.168.31.200:8080/",
});
