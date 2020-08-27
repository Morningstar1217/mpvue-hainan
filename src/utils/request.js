import siteinfo from '../siteinfo'
let host = siteinfo.siteroot

function request(method, data, header = {}) {
    wx.showLoading({
        title: '加载中'
    })
    return new Promise((resolve, reject) => {
        wx.login({
            timeout: 10000,
            success: res => {
                data = {
                    ...data,
                    sign: res.code,
                    i: siteinfo.acid,
                    m: siteinfo.name,
                    from: 'wxapp',
                    c: 'entry',
                    a: 'wxapp'
                }
                wx.request({
                    url: host,
                    method,
                    data,
                    headers: {
                        'content-type': 'application/json'
                    },
                    success: function (res) {
                        wx.hideLoading()
                        resolve(res.data)
                    },
                    fail: function (error) {
                        wx.hideLoading()
                        reject(false)
                    },
                    complete: function () {
                        wx.hideLoading()
                    }
                })
            },
            fail: err => {
                console.log(err)
            }
        })
    })
}

function get(obj) {
    return request('GET', obj)
}

function post(obj) {
    return request('POST', obj)
}

export default {
    request,
    get,
    post
}
