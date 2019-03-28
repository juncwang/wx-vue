import axios from 'axios'
import router from './router';

axios.interceptors.request.use( config => {
    if(localStorage.wxToken) config.headers.token = localStorage.wxToken
    return config
}, err => {
    return Promise.reject(err)
})

axios.interceptors.response.use( res => {
    return res
}, err => {
    const { status } = err.response
    
    if(status == 401){
        localStorage.removeItem('wxToken')
        router.push('/login')
    }
    alert(err.response.data.msg)
    return Promise.reject(err)
})

export default axios