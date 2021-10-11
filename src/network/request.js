import axios from "axios";

// instance本身就是一个promise，所以可以不封装promise了
export function request(config){
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    // timeout: 10000
  })
// 全局拦截
  // axios.interceptors.request
// 请求拦截
instance.interceptors.request.use(config=>{
  // console.log(config);
  return config
},err=>{
  console.log(err);
  return err
})
  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
    return err
  })
 return instance(config)
}