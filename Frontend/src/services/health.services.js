 
 import api  from '../lib/axios.js'
 
export async function cheakHealth(){

     const data=   await   api.get('/health')
     return data.data

}