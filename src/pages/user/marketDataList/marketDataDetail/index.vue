<template>
    <div class="container">
        <div class="header">
            <div class="dataWrap">
                <div class="dataList">
                    <div>查看总数</div>
                    <div>4</div>
                </div>
                <div class="dataList">
                    <div>分享总次数</div>
                    <div>8</div>
                </div>
                <div class="dataList">
                    <div>阅读总时长</div>
                    <div>56441</div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="contentWrap">
                <div class="top flex_row ">
                    <img src="/static/images/headImg.png" class="userImg" />
                    <div class="userInfo">
                        <div class="userName">胖墩</div>
                        <div class="date">上次登录时间:2019.12.8</div>
                    </div>
                    <div class="contactWrap">
                        <img src="/static/images/phone.png" class="phoneIcon" />
                        <img
                            src="/static/images/ercode_red.png"
                            class="ercodeIcon"
                        />
                    </div>
                </div>
                <div class="middle flex_row ">
                    <div class="numList">
                        <div class="num">7</div>
                        <div class="numTitle">阅读文章数</div>
                    </div>
                    <div class="line"></div>
                    <div class="numList">
                        <div class="num">1551</div>
                        <div class="numTitle">总阅读时长</div>
                    </div>
                    <div class="line"></div>
                    <div class="numList">
                        <div class="num">7</div>
                        <div class="numTitle">分享文章数</div>
                    </div>
                </div>
                <div class="bottom flex_row">
                    <div class="numBtn">
                        时长:454秒
                    </div>
                    <div class="numBtn">
                        次数:1次
                    </div>
                    <div class="numBtn">
                        分享:1次
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        mpvue.setNavigationBarTitle({ title: '数据详情' })
    }
}
</script>

<style lang="less" scoped>
.header {
    padding: 10px 0;
    .dataWrap {
        display: flex;
        flex-direction: row;
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
    }
    .dataList {
        text-align: center;
        & div:first-child {
            margin-bottom: 10px;
        }
    }
}

.main {
    .contentWrap {
        box-sizing: border-box;
        width: 95%;
        padding: 10px 20px;
        background-color: #fff;
        border-radius: 6px;
        overflow: hidden;
        margin: 0 auto;
        .top {
            padding: 5px 0;
            align-items: center;
            justify-content: space-between;
            .userImg {
                width: 44px;
                height: 44px;
                border-radius: 50%;
            }
            .userInfo {
                width: 60%;
                font-size: 12px;
                .userName {
                    font-weight: bold;
                }
                .date {
                    color: #5b5959;
                }
            }
            .contactWrap {
                .phoneIcon {
                    width: 11px;
                    height: 13px;
                }
                .ercodeIcon {
                    margin-left: 10px;
                    width: 13px;
                    height: 13px;
                }
            }
        }
        .middle {
            justify-content: space-between;
            margin: 10px auto;
            font-size: 12px;
            .numList {
                text-align: center;
                .num {
                    text-align: center;
                    font-size: 14px;
                    color: #fd4835;
                    margin-bottom: 6px;
                }
            }
            .line {
                width: 1px;
                height: 17px;
                background-color: #000000;
                opacity: 0.2;
            }
        }
        .bottom {
            justify-content: space-between;
            align-items: center;
            .numBtn {
                width: 94px;
                height: 24px;
                line-height: 24px;
                border-radius: 6px;
                text-align: center;
                font-size: 11px;
                border: solid 1px #fc4a35;
                color: #fc4a35;
            }
        }
    }
}
</style>
