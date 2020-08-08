// user.js
import request from '../utils/request'
import { config } from '../config'
let bsseUrl = config.api_base_url

/* 
    示例
*/
export function xxx(data) {
    return request({
        url: `${bsseUrl}`,
        method: 'get', //get || post
        data
    })
}
