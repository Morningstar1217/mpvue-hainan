<template>
    <div class="container">
        <div class="header">
            <div class="dataWrap flex_row">
                <img src="/static/images/user.png" class="userImg" />
                <div class="userInfo">
                    <div class="userName">胖墩</div>
                    <div class="isVipWrap flex_row">
                        <div class="isVip">您是尊贵VIP会员</div>
                        <div class="addAd" @click="toAdText">添加广告</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="adWrap">
                <div class="title">
                    跑马灯文字广告<span>（请勿超过17个汉字）</span>
                </div>
                <div class="adListWrap">
                    <div class="adList">
                        <div class="adText">
                            ① 宝妈传，打造宝妈传奇。
                        </div>
                        <div class="adConsole flex_row">
                            <div>删除</div>
                            <div>修改</div>
                            <div>已审核</div>
                        </div>
                    </div>
                    <div class="adList">
                        <div class="adText">
                            ② 宝妈传，打造宝妈传奇。
                        </div>
                        <div class="adConsole flex_row">
                            <div>删除</div>
                            <div>修改</div>
                            <div>已审核</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="adWrap">
                <div class="title">
                    顶部图片广告位<span>（680*300像素最佳）</span>
                </div>
                <div class="adListWrap">
                    <div class="adList">
                        <div class="adImg">
                            <img src="/static/images/user.png" />
                        </div>
                        <div class="adConsole flex_row">
                            <div>删除</div>
                            <div>修改</div>
                            <div>已审核</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="adWrap">
                <div class="title">
                    底部图片广告位<span>（680*300像素最佳）</span>
                </div>
                <div class="adListWrap">
                    <div class="adList">
                        <div class="adImg">
                            <img src="/static/images/user.png" />
                        </div>
                        <div class="adConsole flex_row">
                            <div>删除</div>
                            <div>修改</div>
                            <div>已审核</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toAdText() {
            mpvue.navigateTo({
                url: '/pages/user/myAd/adText/main'
            })
        }
    },
    mounted() {
        mpvue.setNavigationBarTitle({ title: '我的广告' })
    }
}
</script>

<style lang="less" scoped>
.header {
    padding: 10px 0;
    .dataWrap {
        align-items: center;
        justify-content: space-around;
        padding: 30px 0;
        width: 95%;
        background-image: linear-gradient(
            90deg,
            #f47d2b 0%,
            #f96330 36%,
            #fd4835 100%
        );
        margin: 0 auto;
        border-radius: 6px;
        color: #fff;
        font-size: 16px;
        .userImg {
            width: 73px;
            height: 73px;
            border-radius: 50%;
            vertical-align: middle;
        }
        .userInfo {
            width: 65%;
            .userName {
                font-size: 22px;
            }
            .isVipWrap {
                align-items: center;
                margin-top: 5px;
                .addAd {
                    width: 77px;
                    height: 26px;
                    line-height: 26px;
                    border-radius: 6px;
                    border: solid 1px #ffffff;
                    text-align: center;
                    font-size: 15px;
                    margin-left: 10px;
                }
            }
        }
    }
}
.main {
    .adWrap {
        box-sizing: border-box;
        width: 95%;
        margin: 0 auto 10px;
        padding: 0 10px;
        background-color: #fff;
        border-radius: 5px;
        .title {
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #d9d8d8;
            span {
                color: #999;
            }
        }
        .adListWrap {
            padding: 10px 0;
            .adList {
                .adText {
                    height: 30px;
                    line-height: 30px;
                    overflow: hidden;
                }
                .adImg {
                    margin: 0 auto;
                    img {
                        max-height: 200px;
                        width: 100%;
                    }
                }
                .adConsole {
                    flex-direction: row-reverse;
                    padding: 10px 0;
                    div {
                        padding: 2px 5px;
                        text-align: center;
                        font-size: 12px;
                        border: 1px solid #7d7d7d;
                        margin-left: 15px;
                    }
                }
            }
        }
    }
}
</style>
