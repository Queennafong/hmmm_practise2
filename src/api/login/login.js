import axios from 'axios'
let instance = axios.create({
    baseURL='http://127.0.0.1/heimamm/public',
    withCredentials:true
})

export function sendsms(data){
    return instance({
        url:'/sendsms',
        method:'post',
        data
    })
}