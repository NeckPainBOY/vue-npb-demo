import { request } from "../index";

export const getRoutes = request.get("/data/getRoutes");

console.log("getRoutes");
console.log(getRoutes);
