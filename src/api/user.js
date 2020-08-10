// user.js
import request from '../utils/request'

let baseUrl = 'https://api.it120.cc'

/* 
    示例
*/
export function xxx(data) {
    return request({
        url: `${baseUrl}`,
        method: 'get', //get || post
        data
    })
}
