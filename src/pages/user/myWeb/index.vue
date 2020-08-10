<template>
    <div class="container">
        <div class="header">
            <div class="top">
                <img src="/static/images/user.png" class="userImg" />
                <div class="userInfo">
                    <div class="userName">胖墩</div>
                    <div class="telphone">电话：13100000000</div>
                    <div class="city">城市：荆州</div>
                    <div class="watch">+关注</div>
                    <img src="/static/images/ercode.png" class="ercode" />
                </div>
            </div>
            <div class="middle">
                努力为了更好的明天，加油吧！
            </div>
            <div class="bottom">
                <span>超赞:100</span>
                <span>粉丝:100</span>
                <span>文章:100</span>
                <span>视频:100</span>
            </div>
            <div class="filterWrap"></div>
        </div>
        <div class="main">
            <div class="menuWrap">
                <div
                    class="menuList"
                    :class="menuIndex === 0 ? 'selected' : ''"
                    @click="changeMenu(0)"
                >
                    微站
                </div>
                <div
                    class="menuList"
                    :class="menuIndex === 1 ? 'selected' : ''"
                    @click="changeMenu(1)"
                >
                    宝贝
                </div>
                <div
                    class="menuList"
                    :class="menuIndex === 2 ? 'selected' : ''"
                    @click="changeMenu(2)"
                >
                    动态
                </div>
                <div
                    class="menuList"
                    :class="menuIndex === 3 ? 'selected' : ''"
                    @click="changeMenu(3)"
                >
                    视频
                </div>
            </div>
            <!-- 微站 -->
            <div class="menuContentWrap" v-if="menuIndex === 0">
                <div
                    class="menuContentList"
                    v-for="item in articleList"
                    :key="item.id"
                >
                    <div class="left">
                        <div class="title">
                            {{ item.title }}<span class="joinStock">入库</span>
                        </div>
                        <div class="dataWrap">
                            <span class="date">{{ item.date }}</span>
                            <img
                                src="/static/images/watched.png"
                                class="watchIcon"
                            />
                            <span class="date">{{ item.watchNum }}</span>
                            <img
                                src="/static/images/like.png"
                                class="likeIcon"
                            />
                            <span class="date">{{ item.likeNum }}</span>
                        </div>
                    </div>
                    <div class="right">
                        <img :src="item.imgUrl" />
                    </div>
                </div>
            </div>
            <!-- 宝贝 -->
            <div class="goodWrap flex_row" v-if="menuIndex === 1">
                <div class="goodList" v-for="item in goods" :key="item.id">
                    <img :src="item.goodImg" />
                    <div class="goodTitle">{{ item.title }}</div>
                    <div class="price">￥{{ item.price }}</div>
                </div>
            </div>
            <!-- 动态 -->
            <div class="dynamicWrap" v-if="menuIndex === 2">
                <div
                    class="dynamicList flex_row"
                    v-for="item in dynamicList"
                    :key="item.id"
                >
                    <div class="left">
                        <div class="dynamicDate">
                            {{ item.mouth }}月<span>{{ item.day }}日</span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="title">{{ item.title }}</div>
                        <div class="dynamicInfo flex_row" v-if="item.imgUrl">
                            <img :src="item.imgUrl" />
                            <div class="goodInfo">
                                <div class="goodName">{{ item.goodTitle }}</div>
                                <div class="price">￥{{ item.price }}</div>
                            </div>
                        </div>
                        <div class="talkWrap" v-else>
                            <div class="talkContent">
                                {{ item.talkContent }}
                            </div>
                            <div class="desc">{{ item.desc }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 视频 -->
            <div class="vedioWrap flex_row" v-if="menuIndex === 3">
                <div class="vedioList" v-for="item in vedioList" :key="item.id">
                    <img :src="item.imgUrl" />
                    <div class="loveNum">
                        <img src="/static/images/love.png" />
                        {{ item.loveNum }}
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
            articleList: [
                {
                    title: '惯子如害子，九大惯子特征，家长必看家长必看家长必看',
                    date: '2019-06-10',
                    watchNum: 154,
                    likeNum: 100,
                    imgUrl: '/static/images/user.png'
                },
                {
                    title: '惯子如害子，九大惯子特征，家长必看家长必看家长必看',
                    date: '2019-06-10',
                    watchNum: 154,
                    likeNum: 100,
                    imgUrl: '/static/images/user.png'
                },
                {
                    title: '惯子如害子，九大惯子特征，家长必看家长必看家长必看',
                    date: '2019-06-10',
                    watchNum: 154,
                    likeNum: 100,
                    imgUrl: '/static/images/user.png'
                }
            ],
            goods: [
                {
                    title: '这里的风景真的好呀~',
                    goodImg: '/static/images/user.png',
                    price: 19
                },
                {
                    title: '这里的风景真的好呀~',
                    goodImg: '/static/images/user.png',
                    price: 19
                },
                {
                    title: '这里的风景真的好呀~',
                    goodImg: '/static/images/user.png',
                    price: 19
                }
            ],
            dynamicList: [
                {
                    title: '上新了1个宝贝',
                    mouth: '12',
                    day: '02',
                    imgUrl: '/static/images/user.png',
                    goodTitle: '宝贝宝贝宝贝宝贝宝贝宝贝宝贝宝贝宝贝',
                    price: 64
                },
                {
                    title: '收到1条评价',
                    mouth: '12',
                    day: '02',
                    talkContent: '顶下挺好的',
                    desc: '来自南京市的买家'
                }
            ],
            vedioList: [
                {
                    imgUrl: '/static/images/user.png',
                    loveNum: '12W'
                },
                {
                    imgUrl: '/static/images/user.png',
                    loveNum: '12W'
                },
                {
                    imgUrl: '/static/images/user.png',
                    loveNum: '12W'
                }
            ],
            menuIndex: 0
        }
    },
    methods: {
        changeMenu(index) {
            this.menuIndex = index
        }
    },
    mounted() {}
}
</script>

<style lang="less" scoped>
.header {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 186px;
    padding: 10px 20px;
    z-index: 10;
    color: #fff;
    .filterWrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: blur(5px);
        background-image: url('https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        background-size: cover;
        z-index: -1;
        background-color: red;
    }
    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        .userImg {
            width: 63px;
            height: 63px;
            border: 3px solid #ffffff99;
            border-radius: 50%;
        }
        .userInfo {
            position: relative;
            width: 75%;
            .telphone,
            .city {
                font-size: 14px;
                margin-top: 5px;
            }
            .watch,
            .ercode {
                position: absolute;
                right: 10px;
            }
            .watch {
                top: 0;
                width: 59px;
                height: 24px;
                line-height: 24px;
                background-color: #fd4835;
                border-radius: 12px;
                text-align: center;
                font-size: 14px;
            }
            .ercode {
                top: 55px;
                width: 13px;
                height: 13px;
            }
        }
    }
    .middle {
        font-size: 12px;
    }
    .bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 13px;
        margin-top: 10px;
    }
}
.main {
    .menuWrap {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 0 20px;
        .menuList {
            &.selected {
                position: relative;
                font-size: 18px;
                height: 45px;
                line-height: 45px;
                &::before {
                    position: absolute;
                    content: '';
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 34px;
                    height: 3px;
                    background-color: #fd4835;
                    border-radius: 2px;
                }
            }
        }
    }
    .menuContentWrap {
        padding: 0 10px;
        .menuContentList {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #d9d8d8;
            .left {
                .title {
                    font-size: 14px;
                    height: 36px;
                    line-height: 18px;
                    .joinStock {
                        width: 33px;
                        height: 15px;
                        line-height: 15px;
                        font-size: 12px;
                        border-radius: 4px;
                        border: solid 1px #fd4835;
                        margin-left: 10px;
                        color: #fd4835;
                        padding: 0 4px;
                    }
                }
            }
            .right {
                img {
                    width: 109px;
                    height: 65px;
                    border-radius: 4px;
                }
            }
            .dataWrap {
                margin-top: 8px;
                font-size: 13px;
                color: #00000080;
                img {
                    width: 13px;
                    height: 8px;
                    margin-left: 8px;
                    &.likeIcon {
                        width: 9px;
                        height: 10px;
                    }
                }
            }
        }
    }
    .goodWrap,
    .vedioWrap {
        align-items: center;
        justify-content: space-between;
        flex-flow: wrap;
        padding: 10px;
        background-color: #f2f2f2;
        .vedioList {
            width: 48%;
            border-radius: 5px;
            background-color: #fff;
            margin-bottom: 10px;
            & > img {
                width: 100%;
                vertical-align: middle;
            }
        }
    }
    .goodWrap {
        .goodList {
            width: 48%;
            border-radius: 5px;
            background-color: #fff;
            margin-bottom: 10px;
            img {
                width: 100%;
                vertical-align: middle;
            }
            .goodTitle {
                padding: 0 10px;
                height: 30px;
                line-height: 30px;
                font-size: 13px;
                font-weight: bold;
                overflow: hidden;
            }
            .price {
                padding: 0 10px;
                height: 30px;
                line-height: 30px;
                font-size: 15px;
                font-weight: bold;
                overflow: hidden;
                color: #fd4835;
            }
        }
    }
    .dynamicWrap {
        padding: 10px 0 10px 10px;
        .dynamicList {
            align-items: flex-start;
            margin-bottom: 15px;
            .left {
                width: 18%;
                font-weight: bold;
                .dynamicDate {
                    height: 30px;
                    line-height: 30px;
                    span {
                        font-size: 12px;
                        font-weight: normal;
                    }
                }
            }
            .right {
                width: 82%;
                .title {
                    height: 30px;
                    line-height: 30px;
                    font-size: 15px;
                }
                .dynamicInfo {
                    background-color: #fff;
                    justify-content: space-between;
                    img {
                        width: 100px;
                        height: 100px;
                        vertical-align: middle;
                    }
                    .goodInfo {
                        width: 63%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: 90px;
                        padding: 5px 0;
                        margin-left: 10px;
                        .goodName {
                            width: 100%;
                            max-width: 200px;
                            height: 44px;
                            line-height: 22px;
                            overflow: hidden;
                        }
                        .price {
                            font-size: 15px;
                            color: #fd4835;
                        }
                    }
                }
                .talkWrap {
                    padding: 10px;
                    background-color: #fff;
                    border-radius: 5px 0 0 5px;
                    .talkContent {
                        font-size: 18px;
                    }
                    .desc {
                        font-size: 12px;
                        color: #414040;
                    }
                }
            }
        }
    }
    .vedioWrap {
        .vedioList {
            position: relative;
            overflow: hidden;
            .loveNum {
                position: absolute;
                bottom: 4px;
                left: 4px;
                color: #fff;
                font-size: 12px;
                img {
                    width: 15px;
                    height: 15px;
                    vertical-align: middle;
                    margin-top: -2px;
                }
            }
        }
    }
}
</style>
