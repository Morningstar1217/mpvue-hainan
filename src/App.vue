<script>
export default {
    created() {
        let logs
        if (mpvuePlatform === 'my') {
            logs = mpvue.getStorageSync({ key: 'logs' }).data || []
            logs.unshift(Date.now())
            mpvue.setStorageSync({
                key: 'logs',
                data: logs
            })
        } else {
            logs = mpvue.getStorageSync('logs') || []
            logs.unshift(Date.now())
            mpvue.setStorageSync('logs', logs)
        }
    },
    log() {
        console.log(`log at:${Date.now()}`)
    },
    onLaunch() {
        this.getWxAppDetail()
        this.getBottomConfig()
    },
    methods: {
        getWxAppDetail() {
            let params = {
                do: 'GetConfig'
            }

            this.$http
                .get(params)
                .then(res => {
                    wx.setStorage({
                        key: 'config',
                        data: res.data
                    })
                    wx.setNavigationBarTitle({
                        title: res.data.headtitle
                    })
                    wx.setNavigationBarColor({
                        frontColor: '#ffffff',
                        backgroundColor: res.data.headcolor,
                        animation: {
                            duration: 0,
                            timingFunc: 'linear'
                        },
                        success: result => {},
                        fail: () => {},
                        complete: () => {}
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getBottomConfig() {
            let params = {
                do: 'GetBottommenu'
            }
            this.$http
                .get(params)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style lang="less">
@f2: #f2f2f2;
page {
    background-color: @f2;
}

.hr {
    width: 100%;
    height: 5px;
    background-color: @f2;
}

.flex_row {
    display: flex;
    flex-direction: row;
}

.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
* {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
}
</style>
