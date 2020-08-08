<template>
    <div class="container">
        <div class="main">
            <div class="title">我的广告设置</div>
            <div class="settingWrap">
                <div class="settingList" @click="changeSetting(0)">
                    <div class="settingListText">顶部有跑马灯广告</div>
                    <div class="settingImg">
                        <img
                            :src="settingFlag0? '/static/images/selected.png' : '/static/images/noSelected.png'"
                        />
                    </div>
                </div>
                <div class="settingList" @click="changeSetting(1)">
                    <div class="settingListText">顶部图片广告</div>
                    <div class="settingImg">
                        <img
                            :src="settingFlag1? '/static/images/selected.png' : '/static/images/noSelected.png'"
                        />
                    </div>
                </div>
                <div class="settingList" @click="changeSetting(2)">
                    <div class="settingListText">底部图片广告</div>
                    <div class="settingImg">
                        <img
                            :src="settingFlag2? '/static/images/selected.png' : '/static/images/noSelected.png'"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            settingFlag0: false,
            settingFlag1: false,
            settingFlag2: false
        }
    },
    methods: {
        changeSetting(index) {
            switch (index) {
                case 0:
                    this.settingFlag0 = !this.settingFlag0
                    break
                case 1:
                    this.settingFlag1 = !this.settingFlag1
                    break
                default:
                    this.settingFlag2 = !this.settingFlag2
                    break
            }
        }
    },
    mounted() {
        mpvue.setNavigationBarTitle({ title: '广告设置' })
    }
}
</script>

<style lang="less" scoped>
.main {
    .title {
        height: 44px;
        line-height: 44px;
        padding: 0 10px;
        color: #878787;
    }
    .settingWrap {
        padding: 0 10px;
        background-color: #fff;
        .settingList {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 44px;
            border-bottom: 1px solid #f4f4f4;
            .settingListText {
                font-size: 13px;
            }
            .settingImg {
                img {
                    width: 42px;
                    height: 24px;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>
