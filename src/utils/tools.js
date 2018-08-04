import axios from 'axios'
import qs from 'qs'
const host='http://www.51toufang.com/public/sendSms'
const $post=(url,body)=>{
   return axios.post(`${host}${url}`,qs.stringify(body)).then(res=>res)
}
const $get=(url,body)=>{
    return axios.get(`${host}${url}`,{params:body}).then(res=>res)
 }
export default{
    $post,
    $get
}