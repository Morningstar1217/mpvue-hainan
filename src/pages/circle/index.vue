<template>
    <div class="container">
        <div class="header">
            <div class="searchWrap">
                <input
                    type="text"
                    placeholder="请输入关键词搜索"
                    class="searchInput"
                    placeholder-style="color: #000 !important;opacity: 0.5;"
                />
                <img
                    src="/static/images/search_iconBlack.png"
                    class="searchIcon"
                />
            </div>
            <div class="menuBigWrap">
                <div class="menuWrap" ref="menuWrap">
                    <scroll-view scroll-x="true" class="content" ref="content">
                        <div
                            v-for="(item, index) in menuList"
                            @click="changeMenu(index)"
                            :key="item.id"
                            :class="selectedIndex === index ? 'selected' : ''"
                        >
                            {{ item.title }}
                        </div>
                    </scroll-view>
                </div>
                <div class="menuIconWrap" @click="maskFlag = true">
                    <img src="/static/images/more_red.png" class="menuIcon" />
                </div>
            </div>
        </div>
        <div class="main">
            <div class="adImg">
                <img src="/static/images/user.png" />
            </div>
            <div class="contentWrap">
                <div
                    class="contentList"
                    v-for="item in circleList"
                    :key="item.id"
                >
                    <img :src="item.imgUrl" mode="widthFix" class="circleImg" />
                    <div class="circleTitle">{{ item.title }}</div>
                    <div class="priceWrap">
                        <div class="price">￥{{ item.price }}</div>
                        <div class="likeNum">{{ item.likeNum }}人有兴趣</div>
                    </div>
                    <div class="userInfo">
                        <img :src="item.userImg" />
                        <div class="userInfoWrap">
                            <div class="userName">{{ item.userName }}</div>
                            <div class="surePersonWrap">
                                <img src="/static/images/surePeople.png" />
                                <span>实名认证</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="toRelease">
            <div>
                <img src="/static/images/edit.png" />
            </div>
            <div class="slideText">我要发布</div>
        </div>
        <div class="maskWrap" v-if="maskFlag">
            <div class="maskMenuWrap">
                <div class="close" @click="maskFlag = false">
                    <img src="/static/images/close.png" />
                </div>
                <div class="myMenu">
                    <div class="title flex_row">
                        <div class="titleText">
                            我的分类<span>点击进入分类</span>
                        </div>
                        <div class="editMenu" @click="delFlag = !delFlag">
                            {{ delFlag ? '完成' : '编辑' }}
                        </div>
                    </div>
                    <div class="myMenuWrap flex_row">
                        <div
                            class="myMenuList"
                            v-for="item in myMenuList"
                            :key="item.id"
                        >
                            {{ item.title }}
                            <img
                                src="/static/images/del.png"
                                class="delImg"
                                v-if="delFlag"
                            />
                        </div>
                    </div>
                </div>
                <div class="myMenu">
                    <div class="title flex_row">
                        <div class="titleText">
                            更多分类<span>点击添加分类</span>
                        </div>
                    </div>
                    <div class="myMenuWrap flex_row">
                        <div
                            class="myMenuList"
                            v-for="item in myMenuList"
                            :key="item.id"
                        >
                            + {{ item.title }}
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
            menuList: [
                {
                    id: 0,
                    title: '全部'
                },
                {
                    id: 1,
                    title: '经验之谈'
                },
                {
                    id: 2,
                    title: '创业故事'
                },
                {
                    id: 3,
                    title: '采访专栏'
                },
                {
                    id: 4,
                    title: '家庭情感'
                },
                {
                    id: 5,
                    title: '经验之谈'
                }
            ],
            selectedIndex: 0,
            circleList: [
                {
                    imgUrl: '/static/images/user.png',
                    title: '这里的风景真的好呀~',
                    price: 64,
                    likeNum: 28,
                    userName: '胖墩',
                    userImg: '/static/images/headImg.png'
                },
                {
                    imgUrl: '/static/images/user.png',
                    title: '这里的风景真的好呀~',
                    price: 64,
                    likeNum: 28,
                    userName: '胖墩',
                    userImg: '/static/images/headImg.png'
                },
                {
                    imgUrl: '/static/images/user.png',
                    title: '这里的风景真的好呀~',
                    price: 64,
                    likeNum: 28,
                    userName: '胖墩',
                    userImg: '/static/images/headImg.png'
                },
                {
                    imgUrl: '/static/images/user.png',
                    title: '这里的风景真的好呀~',
                    price: 64,
                    likeNum: 28,
                    userName: '胖墩',
                    userImg: '/static/images/headImg.png'
                },
                {
                    imgUrl: '/static/images/user.png',
                    title: '这里的风景真的好呀~',
                    price: 64,
                    likeNum: 28,
                    userName: '胖墩',
                    userImg: '/static/images/headImg.png'
                }
            ],
            myMenuList: [
                {
                    title: '女性'
                },
                {
                    title: '女性'
                },
                {
                    title: '女性'
                },
                {
                    title: '女性'
                },
                {
                    title: '女性'
                }
            ],
            delFlag: false,
            maskFlag: false
        }
    },
    methods: {
        changeMenu(index) {
            this.selectedIndex = index
        }
    },
    mounted() {
        wx.setNavigationBarTitle({
            title: '圈子'
        })
    }
}
</script>

<style scoped lang="less">
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 80;
    .searchWrap {
        position: relative;
        width: 100%;
        padding: 10px 0;
        .searchInput {
            width: 92%;
            height: 26px;
            margin: 0 auto;
            background-color: #f2f2f2;
            border-radius: 13px;
            color: #000;
            outline: none;
            border: none;
            padding-left: 10px;
            font-size: 12px;
        }
        .searchIcon {
            position: absolute;
            right: 30px;
            top: 50%;
            transform: translateY(-50%);
            width: 13px;
            height: 15px;
        }
    }
    .menuBigWrap {
        position: relative;
        color: #fd4835;
        .menuWrap {
            width: 90%;
            overflow: hidden;
            white-space: nowrap;
            .content {
                width: 100%;
                padding: 0 0 0 40rpx;
                margin-left: -40rpx;
                font-size: 28rpx;
                div {
                    display: inline-block;
                    width: 120rpx;
                    height: 80rpx;
                    line-height: 80rpx;
                    margin-right: 20rpx;
                    text-align: center;
                    &:first-child {
                        width: 40px;
                        &.selected {
                            width: 60px;
                            font-size: 18px;
                        }
                    }
                    &.selected {
                        font-size: 18px;
                        width: 80px;
                    }
                }
            }
        }
        .menuIconWrap {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
            width: 5%;
            text-align: center;
            .menuIcon {
                width: 13px;
                height: 11px;
            }
        }
    }
}
.main {
    height: 100%;
    background-color: #f2f2f2;
    padding: 100px 0 10px;
    .adImg {
        position: relative;
        width: 95%;
        max-height: 180px;
        margin: 0 auto 10px;
        img {
            width: 100%;
            max-height: 180px;
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
                img {
                    width: 29px;
                    height: 29px;
                    border-radius: 3px;
                }
                .userInfoWrap {
                    width: 78%;
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
.maskWrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
    .maskMenuWrap {
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        background-color: #fff;
        .myMenuList {
            position: relative;
            .delImg {
                position: absolute;
                right: -4px;
                top: -4px;
                width: 16px;
                height: 16px;
                vertical-align: middle;
            }
        }
        .close {
            img {
                width: 15px;
                height: 15px;
                vertical-align: middle;
            }
        }
        .myMenu {
            .title {
                height: 40px;
                align-items: center;
                justify-content: space-between;
                .titleText {
                    font-weight: bold;
                    span {
                        font-size: 12px;
                        margin-left: 5px;
                        color: #999;
                    }
                }
                .editMenu {
                    width: 45px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    color: #ff0000;
                    border-radius: 10px;
                    border: solid 1px #ff0000;
                    font-size: 14px;
                }
            }
            .myMenuWrap {
                align-items: center;
                justify-content: space-between;
                flex-flow: wrap;
                .myMenuList {
                    width: 75px;
                    height: 40px;
                    margin-top: 10px;
                    line-height: 40px;
                    text-align: center;
                    background-color: #f6f6f6;
                    text-align: center;
                    border-radius: 3px;
                    font-size: 14px;
                    color: #242424;
                }
            }
        }
    }
}
.toRelease {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    right: 10px;
    bottom: 200px;
    width: 33px;
    background-color: #fd4835;
    border-radius: 5px;
    color: #fff;
    font-size: 12px;
    padding: 5px 0;
    img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
    .slideText {
        text-align: center;
        width: 20px;
        vertical-align: middle;
    }
}
</style>
