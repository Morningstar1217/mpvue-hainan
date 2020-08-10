<template>
    <div class="container">
        <div class="header">
            <div class="userImg">
                <img src="/static/images/user.png" />
            </div>
            <div class="right">
                <div class="userName">胖墩</div>
                <div class="vipLevel">您不是VIP会员</div>
                <div class="vipLevel">成为VIP后享受全站功能</div>
            </div>
        </div>
        <div class="main">
            <div class="title">
                <img src="/static/images/joinVip/vip1.png" />
                <div>VIP充值</div>
            </div>
            <div ref="menuWrap">
                <div class="vipPriceWrap" ref="content">
                    <div
                        class="vipPriceList"
                        :class="priceIndex === 0 ? 'selected' : ''"
                        @click="changePrice(0)"
                    >
                        <div class="vipTitle">连续包月</div>
                        <div class="vipPrice">￥<span>58</span></div>
                        <div class="vipText">到期自动续费可随时取消</div>
                    </div>
                    <div
                        class="vipPriceList"
                        :class="priceIndex === 1 ? 'selected' : ''"
                        @click="changePrice(1)"
                    >
                        <div class="vipTitle">半年会员</div>
                        <div class="vipPrice">￥<span>299</span></div>
                        <div class="vipOldPrice">￥348</div>
                        <div class="saveMoney">立省49元</div>
                    </div>
                    <div
                        class="vipPriceList"
                        :class="priceIndex === 2 ? 'selected' : ''"
                        @click="changePrice(2)"
                    >
                        <div class="vipTitle">一年会员</div>
                        <div class="vipPrice">￥<span>588</span></div>
                        <div class="vipOldPrice">￥696</div>
                        <div class="saveMoney">立省108元</div>
                    </div>
                </div>
            </div>
            <div class="joinBtn">
                立即加入
            </div>
            <div class="title">
                <img src="/static/images/joinVip/vip2.png" />
                <div>会员权益</div>
            </div>
            <div class="vipPower">
                <div class="powerList" v-for="item in menuList" :key="item.id">
                    <div class="powerListImg">
                        <img :src="item.imgUrl" />
                    </div>
                    <div class="powerTitleWrap">
                        <div>{{ item.title }}</div>
                        <div class="desc">{{ item.desc }}</div>
                    </div>
                </div>
            </div>
            <div class="title">
                <img src="/static/images/joinVip/vip2.png" />
                <div>会员使用说明</div>
            </div>
            <div class="vipHelp">
                <div
                    class="vipHepList"
                    v-for="item in vipHelpList"
                    :key="item.id"
                >
                    {{ index + 1 }}、{{ item.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [
                {
                    title: '文章采集',
                    desc: '热文采集&自主发布',
                    imgUrl: '/static/images/joinVip/menu1.png'
                },
                {
                    title: '海报生成',
                    desc: '在线生成海报',
                    imgUrl: '/static/images/joinVip/menu2.png'
                },
                {
                    title: '视频采集',
                    desc: '5G试戴短视频风口',
                    imgUrl: '/static/images/joinVip/menu3.png'
                },
                {
                    title: '商品发布',
                    desc: '精彩个人主页售货',
                    imgUrl: '/static/images/joinVip/menu4.png'
                },
                {
                    title: '谁看了我',
                    desc: '朋友圈谁对你文章或产品有兴趣',
                    imgUrl: '/static/images/joinVip/menu5.png'
                },
                {
                    title: '在线客服',
                    desc: '无需添加微信即可在线聊天',
                    imgUrl: '/static/images/joinVip/menu6.png'
                },
                {
                    title: '广告展位',
                    desc: '让你的广告悄无声息默默绽放',
                    imgUrl: '/static/images/joinVip/menu7.png'
                },
                {
                    title: '雷达数据',
                    desc: '谁点开你的文章马上知道',
                    imgUrl: '/static/images/joinVip/menu8.png'
                }
            ],
            vipHelpList: [
                {
                    content: '会员内容会员内容会员内容会员内容'
                },
                {
                    content: '会员内容会员内容会员内容会员内容'
                },
                {
                    content: '会员内容会员内容会员内容会员内容'
                },
                {
                    content: '会员内容会员内容会员内容会员内容'
                }
            ],
            priceIndex: 0
        }
    },
    methods: {
        changePrice(index) {
            this.priceIndex = index
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px 0;
    width: 95%;
    margin: 10px auto;
    background-image: linear-gradient(
        90deg,
        #f47d2b 0%,
        #f96330 36%,
        #fd4835 100%
    );
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    .userImg {
        width: 63px;
        height: 63px;
        margin-right: 30px;
        margin-left: 30px;
        overflow: hidden;
        border-radius: 50%;
        img {
            width: 63px;
            height: 63px;
        }
    }
}
.main {
    padding-bottom: 10px;
    .title {
        display: flex;
        width: 95%;
        height: 20px;
        margin: 10px auto;
        flex-direction: row;
        align-items: center;
        img {
            width: 15px;
            height: 13px;
            margin-right: 10px;
        }
    }
    .vipPriceWrap {
        width: 95%;
        margin: 10px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .vipPriceList {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 110px;
            height: 120px;
            padding: 10px;
            border-radius: 6px;
            font-size: 13px;
            border: solid 1px rgba(213, 213, 213, 0.6);
            text-align: center;
            &.selected {
                border: solid 1px rgba(253, 72, 53, 0.6);
                background-color: #ffe5e2;
            }
            .vipPrice {
                color: #fd4835;
                margin-top: 4px;
                span {
                    font-size: 22px;
                }
            }
            .vipText {
                margin-top: 4px;
                color: #666;
                font-size: 12px;
            }
            .vipOldPrice {
                font-size: 12px;
                color: #666;
                text-decoration: line-through;
            }
            .saveMoney {
                width: 81px;
                height: 21px;
                background-color: #fd4835;
                border-radius: 10px;
                text-align: center;
                line-height: 21px;
                color: #fff;
            }
        }
    }
    .joinBtn {
        width: 237px;
        height: 44px;
        line-height: 44px;
        margin: 20px auto;
        text-align: center;
        background-color: #fd4835;
        color: #fff;
        font-size: 17px;
        border-radius: 22px;
    }
    .vipPower {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        justify-content: space-around;
        align-items: center;
        width: 95%;
        margin: 10px auto;
        .powerList {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            width: 46%;
            height: 82px;
            margin-top: 10px;
            background-color: #f7f7f7;
            border-radius: 6px;
            font-size: 12px;
            .powerListImg {
                img {
                    width: 42px;
                    height: 42px;
                }
            }
            .powerTitleWrap {
                text-align: center;
                font-size: 14px;
                .desc {
                    width: 100px;
                    margin-top: 5px;
                    font-size: 10px;
                    color: #000;
                    opacity: 0.5;
                }
            }
        }
    }
    .vipHelp {
        box-sizing: border-box;
        width: 92%;
        padding: 10px;
        margin: 0 auto;
        background-color: #f7f7f7;
        border-radius: 5px;
        font-size: 12px;
        .vipHepList {
            height: 20px;
            line-height: 20px;
        }
    }
}
</style>
