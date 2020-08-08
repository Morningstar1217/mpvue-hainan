<template>
    <div class="container">
        <div class="header">
            <div class="menuWrap flex_row">
                <div class="menuList" @click="toSale">
                    <img
                        src="/static/images/sale.png"
                        style="width: 16px;height: 16px"
                    />
                    <span>交易通知</span>
                </div>
                <div class="menuList" @click="toLike">
                    <img
                        src="/static/images/like_red.png"
                        style="width: 15px;height:16px"
                    />
                    <span>点赞通知</span>
                </div>
                <div class="menuList" @click="toFens">
                    <img
                        src="/static/images/fens.png"
                        style="width: 16px;height: 15px"
                    />
                    <span>粉丝通知</span>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="messageWrap">
                <div
                    class="messageList flex_row"
                    :class="
                        touchIndex === index && touchFlag ? 'touchLeft' : ''
                    "
                    v-for="(item, index) in messageList"
                    :key="item.id"
                    @touchstart="touchStart(index, $event)"
                    @touchend="touchEnd(index, $event)"
                    @touchmove="touchMove(index, $event)"
                >
                    <div class="imgWrap">
                        <img :src="item.userImg" />
                        <div class="messageNum">{{ item.messageNum }}</div>
                    </div>
                    <div class="messageContent">
                        <div class="userName">{{ item.userName }}</div>
                        <div class="content">{{ item.content }}</div>
                    </div>
                    <div class="date">{{ item.date }}</div>
                    <div class="delBtn">删除</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messageList: [
                {
                    userImg: '/static/images/demo1.png',
                    messageNum: 2,
                    userName: '胖墩',
                    content: '这是一条消息',
                    date: '23:59'
                },
                {
                    userImg: '/static/images/demo1.png',
                    messageNum: 1,
                    userName: '胖墩',
                    content: '这是一条消息',
                    date: '9:15'
                },
                {
                    userImg: '/static/images/demo1.png',
                    messageNum: 4,
                    userName: '胖墩',
                    content: '这是一条消息',
                    date: '9:15'
                },
                {
                    userImg: '/static/images/demo1.png',
                    messageNum: 2,
                    userName: '胖墩',
                    content: '这是一条消息',
                    date: '9:15'
                }
            ],
            touchStartNum: '',
            touchIndex: '',
            touchFlag: false
        }
    },
    methods: {
        touchStart(index, e) {
            this.touchIndex === index ? '' : (this.touchFlag = false)
            this.touchIndex = index
            this.touchStartNum = e.clientX
        },
        touchEnd(index, e) {
            let touchEnd = e.clientX
        },
        touchMove(index, e) {
            if (this.touchStartNum - e.clientX >= 85) {
                this.touchFlag = true
            } else {
                this.touchFlag = false
            }
        },
        toSale() {
            mpvue.navigateTo({
                url: '/pages/message/mySaleMsg/main'
            })
        },
        toLike() {
            mpvue.navigateTo({
                url: '/pages/message/myLike/main'
            })
        },
        toFens() {
            mpvue.navigateTo({
                url: '/pages/message/myFens/main'
            })
        }
    },
    mounted() {
        wx.setNavigationBarTitle({
            title: '消息'
        })
    }
}
</script>

<style lang="less" scoped>
.container {
    background-color: #f2f2f2;
    height: 100%;
    .header {
        padding: 10px;
        .menuWrap {
            align-items: center;
            justify-content: space-between;
            background-color: #fff;
            padding: 15px 10px;
            border-radius: 5px;
            .menuList {
                img {
                    vertical-align: middle;
                    margin-top: -2px;
                    margin-right: 5px;
                }
            }
        }
    }
    .main {
        .messageWrap {
            box-sizing: border-box;
            width: 95%;
            margin: 0 auto;
            padding: 0 10px;
            background-color: #fff;
            border-radius: 5px;
            overflow: hidden;
            .messageList {
                position: relative;
                left: 0;
                justify-content: space-between;
                align-items: center;
                padding: 10px 0;
                height: 70px;
                border-bottom: 1px solid #f4f4f4;
                transition: 0.5s;
                &.touchLeft {
                    left: -75px;
                    transition: 0.5s;
                }
                &:last-child {
                    border-bottom: none;
                }
                .imgWrap {
                    position: relative;
                    img {
                        width: 47px;
                        height: 47px;
                        border-radius: 50%;
                    }
                    .messageNum {
                        position: absolute;
                        right: -2px;
                        top: -2px;
                        width: 17px;
                        height: 17px;
                        line-height: 17px;
                        text-align: center;
                        border-radius: 50%;
                        background-color: #fd4835;
                        color: #fff;
                        font-size: 12px;
                    }
                }
                .messageContent {
                    width: 70%;
                    font-size: 14px;
                    .userName {
                        color: #fd4835;
                    }
                    .content {
                        margin-top: 5px;
                        height: 20px;
                        line-height: 20px;
                        color: #999;
                        overflow: hidden;
                    }
                }
                .date {
                    width: 40px;
                    text-align: right;
                    font-size: 14px;
                    color: #999;
                }
                .delBtn {
                    position: absolute;
                    top: 0;
                    right: -85px;
                    width: 75px;
                    height: 90px;
                    line-height: 90px;
                    text-align: center;
                    font-size: 12px;
                    color: #fff;
                    background-color: #fd4835;
                }
            }
        }
    }
}
</style>
