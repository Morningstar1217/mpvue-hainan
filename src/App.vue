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

        let params = {
            do: 'GetConfig'
        }

        this.$http
            .get(params)
            .then(res => {
                this.globalData = res.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    log() {
        console.log(`log at:${Date.now()}`)
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
