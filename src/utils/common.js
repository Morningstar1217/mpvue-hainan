/* 
    修改页面颜色及标题
*/
export function changeTitle() {
    wx.getStorage({
        key: 'config',
        success: res => {
            wx.setNavigationBarTitle({
                title: res.data.headtitle
            })
            wx.setNavigationBarColor({
                frontColor: '#ffffff',
                backgroundColor: res.data.headcolor,
                animation: {
                    duration: 0,
                    timingFunc: 'linear'
                }
            })
        }
    })
}
