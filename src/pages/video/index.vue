<template>
    <div class="container">
        <div class="header flex_row">
            <div
                class="menuList"
                :class="selectedIndex === 0 ? 'selected' : ''"
                @click="changeMenu(0)"
            >
                最新发布
            </div>
            <div
                class="menuList"
                :class="selectedIndex === 1 ? 'selected' : ''"
                @click="changeMenu(1)"
            >
                浏览次数
            </div>
            <div
                class="menuList"
                :class="selectedIndex === 2 ? 'selected' : ''"
                @click="changeMenu(2)"
            >
                分享次数
            </div>
        </div>
        <div class="main">
            <div class="adImg">
                <img src="/static/images/5de89a24a5f9a.jpg" />
            </div>
            <div class="contentWrap">
                <div
                    class="contentList"
                    v-for="item in circleList"
                    :key="item.id"
                >
                    <img :src="item.imgUrl" class="circleImg" mode="widthFix" />
                    <div class="circleTitle">{{ item.title }}</div>
                    <div class="userInfo">
                        <div class="left flex_row">
                            <img :src="item.userImg" />
                            <div class="userName">{{ item.userName }}</div>
                        </div>
                        <div class="right flex_row">
                            <img
                                src="/static/images/loveIcon_gray.png"
                                class="loveIcon"
                            />
                            <span>{{ item.likeNum }}</span>
                        </div>
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
            selectedIndex: 0,
            circleList: [
                {
                    imgUrl: '/static/images/demo1.png',
                    title: '这里的风景真的好呀~',
                    price: 64,
                    likeNum: 28,
                    userName: '胖墩',
                    userImg: '/static/images/headImg.png'
                },
                {
                    imgUrl: '/static/images/demo3.png',
                    title: '这里的风景真的好呀~',
                    price: 64,
                    likeNum: 28,
                    userName: '胖墩',
                    userImg: '/static/images/headImg.png'
                },
                {
                    imgUrl: '/static/images/demo1.png',
                    title: '这里的风景真的好呀~',
                    price: 64,
                    likeNum: 28,
                    userName: '胖墩',
                    userImg: '/static/images/headImg.png'
                },
                {
                    imgUrl: '/static/images/demo3.png',
                    title: '这里的风景真的好呀~',
                    price: 64,
                    likeNum: 28,
                    userName: '胖墩',
                    userImg: '/static/images/headImg.png'
                },
                {
                    imgUrl: '/static/images/demo1.png',
                    title: '这里的风景真的好呀~',
                    price: 64,
                    likeNum: 28,
                    userName: '胖墩',
                    userImg: '/static/images/headImg.png'
                },
                {
                    imgUrl: '/static/images/demo3.png',
                    title: '这里的风景真的好呀~',
                    price: 64,
                    likeNum: 28,
                    userName: '胖墩',
                    userImg: '/static/images/headImg.png'
                }
            ]
        }
    },
    mounted() {
        wx.setNavigationBarTitle({
            title: '视频'
        })
    },
    methods:{
      changeMenu(index){
        this.selectedIndex = index
      }
    }
}
</script>

<style lang="less" scoped>
.header {
    justify-content: space-around;
    align-items: center;
    height: 48px;
    background-color: #fff;
    .menuList {
        font-size: 14px;
        &.selected {
            color: #fd4835;
        }
    }
}
.main {
    height: 100%;
    background-color: #f2f2f2;
    padding: 10px 0;
    .adImg {
        position: relative;
        width: 95%;
        max-height: 150px;
        margin: 0 auto 10px;
        img {
            width: 100%;
            max-height: 150px;
            border-radius: 6px;
            vertical-align: middle;
        }
    }
    .contentWrap {
        padding: 0 10px;
        -webkit-column-count: 2;
        column-count: 2;
        -webkit-column-gap: 10px;
        column-gap: 10px;
        .contentList {
            width: 100%;
            display: inline-block;
            margin-bottom: 10px;
            border-radius: 6px;
            overflow: hidden;
            background-color: #fff;
            .circleImg {
                width: 100%;
                vertical-align: middle;
            }
            .circleTitle {
                box-sizing: border-box;
                width: 173px;
                height: 28px;
                line-height: 18px;
                font-size: 13px;
                padding: 5px;
                overflow: hidden;
            }
            .priceWrap {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 96%;
                margin: 0 auto;
                border-bottom: 1px solid #d9d8d8;
                .price {
                    font-size: 15px;
                    color: #fd4835;
                    font-weight: bold;
                }
                .likeNum {
                    font-size: 12px;
                    color: #868686;
                }
            }
            .userInfo {
                display: flex;
                flex-direction: row;
                align-items: center;
                font-size: 11px;
                justify-content: space-between;
                padding: 5px;
                .left {
                    align-items: center;
                    img {
                        border-radius: 50%;
                        width: 25px;
                        height: 25px;
                        margin-right: 10px;
                    }
                }
                .right {
                    align-items: center;
                    img {
                        width: 12px;
                        height: 10px;
                        margin-right: 5px;
                        margin-top: -2px;
                    }
                }
            }
            .surePersonWrap {
                color: #67adfb;
                img {
                    width: 14px;
                    height: 10px;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>
