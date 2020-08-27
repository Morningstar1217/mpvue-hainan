<template>
    <div class="container">
        <div class="header">
            <div class="searchWrap">
                <input
                    type="text"
                    placeholder="请输入关键词搜索"
                    class="searchInput"
                    placeholder-style="color: #fff;opacity:0.5;"
                />
                <img src="/static/images/search_icon.png" class="searchIcon" />
            </div>
            <div class="menuBigWrap">
                <div class="menuWrap" ref="menuWrap">
                    <scroll-view scroll-x="true" class="content" ref="content">
                        <div
                            v-for="(item, index) in menuList"
                            @click="changeMenu(index)"
                            :key="index"
                            :class="selectedIndex === index ? 'selected' : ''"
                        >
                            {{ item.title }}
                        </div>
                    </scroll-view>
                </div>
                <div class="menuIconWrap" @click="maskFlag = true">
                    <img src="/static/images/more.png" class="menuIcon" />
                </div>
            </div>
        </div>
        <div class="main">
            <div class="adImg">
                <img src="/static/images/user.png" />
            </div>
            <div class="mainMenuWrap">
                <div
                    class="menuList"
                    :style="defaultColor"
                    v-for="(item, index) in menuList2"
                    :key="index"
                >
                    <img :src="item.imgUrl" />
                    <div>{{ item.title }}</div>
                </div>
            </div>
            <div class="hr"></div>
            <!-- <div class="articleWrap">
                <div
                    class="articleList"
                    v-for="(item, index) in articleList"
                    :key="index"
                    @touchstart="touchStart(index, $event)"
                    @touchend="touchEnd(index, $event)"
                    @touchmove="touchMove(index, $event)"
                    @click="toDetail(item)"
                >
                    <div class="left">
                        <div class="title">{{ item.title }}</div>
                        <div class="leftBottom">
                            <span class="isTop">{{
                                item.isTop ? '置顶' : ''
                            }}</span>
                            <span class="tag">{{ item.tag }}</span>
                            <span class="commentNum"
                                >{{ item.commentNum }}万评论</span
                            >
                            <span class="date">{{ item.date }}</span>
                        </div>
                    </div>
                    <div class="right">
                        <img :src="item.imgUrl" />
                    </div>
                    <div
                        class="articleMenu"
                        :class="showIndex === index && showFlag ? 'show' : ''"
                    >
                        <div class="top">
                            点击品牌名，将文章入品牌库
                        </div>
                        <div class="middle flex_row">
                            <div
                                class="brandList"
                                :class="brandIndex === ind ? 'selected' : ''"
                                v-for="(item, ind) in myBrand"
                                :key="ind"
                                @click.stop="changeBrand(ind)"
                            >
                                {{ item.title }}
                            </div>
                        </div>
                        <div class="bottom">
                            入库后的文章即会同步显视到您的个人微站
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="adImg">
                <img src="/static/images/user.png" />
                <div class="toDetail">查看详情</div>
            </div>
            <div class="articleWrap">
                <div
                    class="articleList"
                    v-for="(item, index) in articleList"
                    :key="index"
                    @touchstart="touchStart(index, $event)"
                    @touchend="touchEnd(index, $event)"
                    @touchmove="touchMove(index, $event)"
                    @click="toDetail(item)"
                >
                    <div class="left">
                        <div class="title">{{ item.title }}</div>
                        <div class="leftBottom">
                            <span class="isTop">{{
                                item.isTop ? '置顶' : ''
                            }}</span>
                            <span class="tag">{{ item.tag }}</span>
                            <span class="commentNum"
                                >{{ item.commentNum }}万评论</span
                            >
                            <span class="date">{{ item.date }}</span>
                        </div>
                    </div>
                    <div class="right">
                        <img :src="item.imgUrl" />
                    </div>
                    <div
                        class="articleMenu"
                        :class="showIndex === index && showFlag ? 'show' : ''"
                    >
                        <div class="top">
                            点击品牌名，将文章入品牌库
                        </div>
                        <div class="middle flex_row">
                            <div
                                class="brandList"
                                :class="brandIndex === ind ? 'selected' : ''"
                                v-for="(item, ind) in myBrand"
                                :key="ind"
                                @click.stop="changeBrand(ind)"
                            >
                                {{ item.title }}
                            </div>
                        </div>
                        <div class="bottom">
                            入库后的文章即会同步显视到您的个人微站
                        </div>
                    </div>
                </div>
            </div>
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
                            v-for="(item, index) in myMenuList"
                            :key="index"
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
                            v-for="(item, index) in myMenuList"
                            :key="index"
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
            menuList2: [
                {
                    id: 0,
                    imgUrl: '/static/images/user.png',
                    title: '最新资讯'
                },
                {
                    id: 0,
                    imgUrl: '/static/images/user.png',
                    title: '最新资讯'
                },
                {
                    id: 0,
                    imgUrl: '/static/images/user.png',
                    title: '最新资讯'
                },
                {
                    id: 0,
                    imgUrl: '/static/images/user.png',
                    title: '最新资讯'
                },
                {
                    id: 0,
                    imgUrl: '/static/images/user.png',
                    title: '最新资讯'
                },
                {
                    id: 0,
                    imgUrl: '/static/images/user.png',
                    title: '最新资讯'
                },
                {
                    id: 0,
                    imgUrl: '/static/images/user.png',
                    title: '最新资讯'
                },
                {
                    id: 0,
                    imgUrl: '/static/images/user.png',
                    title: '最新资讯'
                }
            ],
            articleList: [
                {
                    id: 0,
                    title: '惯子如害子，九大惯子特征，家长必看',
                    tag: '女性',
                    date: '刚刚',
                    imgUrl: '/static/images/user.png',
                    commentNum: 29.8,
                    isTop: true
                },
                {
                    id: 1,
                    title: '惯子如害子，九大惯子特征，家长必看',
                    tag: '育儿',
                    date: '2019-12-07',
                    imgUrl: '/static/images/user.png',
                    commentNum: 29.8,
                    isTop: true
                }
            ],
            selectedIndex: 0,
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
            maskFlag: false,
            showIndex: '',
            showFlag: false,
            myBrand: [
                {
                    title: '阿咪多'
                },
                {
                    title: '阿咪多'
                },
                {
                    title: '阿咪多'
                }
            ],
            brandIndex: '',
            defaultColor: ''
        }
    },
    methods: {
        changeMenu(index) {
            this.selectedIndex = index
        },
        touchStart(index, e) {
            this.showIndex === index ? '' : (this.showFlag = false)
            this.showIndex = index
            this.touchStartNum = e.clientX
        },
        touchEnd(index, e) {
            let touchEnd = e.clientX
        },
        touchMove(index, e) {
            if (this.touchStartNum - e.clientX >= 100) {
                this.showFlag = true
            } else {
                this.showFlag = false
            }
        },
        changeBrand(index) {
            this.brandIndex = index
        },
        toDetail(item) {
            mpvue.navigateTo({
                url:
                    '/pages/index/articleDetail/main?id=' +
                    item.id +
                    '&title=' +
                    item.title
            })
        },
        getData() {}
    },
    mounted() {
        this.getData()
    },
    onReachBottom() {
        let res = [
            {
                id: 0,
                title: '惯子如害子，九大惯子特征，家长必看',
                tag: '女性',
                date: '刚刚',
                imgUrl: '/static/images/user.png',
                commentNum: 29.8,
                isTop: true
            },
            {
                id: 1,
                title: '惯子如害子，九大惯子特征，家长必看',
                tag: '育儿',
                date: '2019-12-07',
                imgUrl: '/static/images/user.png',
                commentNum: 29.8,
                isTop: true
            },
            {
                id: 0,
                title: '惯子如害子，九大惯子特征，家长必看',
                tag: '女性',
                date: '刚刚',
                imgUrl: '/static/images/user.png',
                commentNum: 29.8,
                isTop: true
            },
            {
                id: 1,
                title: '惯子如害子，九大惯子特征，家长必看',
                tag: '育儿',
                date: '2019-12-07',
                imgUrl: '/static/images/user.png',
                commentNum: 29.8,
                isTop: true
            }
        ]
        this.articleList = [...this.articleList, ...res]
    }
}
</script>

<style lang="less" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fd4835;
    z-index: 80;
    .searchWrap {
        position: relative;
        width: 100%;
        padding: 20rpx 0;
        .searchInput {
            width: 92%;
            height: 52rpx;
            margin: 0 auto;
            background-color: rgba(255, 255, 255, 0.14);
            border-radius: 26rpx;
            color: #fff;
            outline: none;
            border: none;
            font-size: 24rpx;
            padding-left: 20rpx;
        }
        .searchIcon {
            position: absolute;
            right: 60rpx;
            top: 50%;
            transform: translateY(-50%);
            width: 26rpx;
            height: 30rpx;
        }
    }
    .menuBigWrap {
        position: relative;
        .menuWrap {
            width: 90%;
            color: #fff;
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
    padding: 100px 0 10px;
    background-color: #fff;
    .adImg {
        position: relative;
        width: 95%;
        max-height: 180px;
        margin: 0 auto;
        img {
            width: 100%;
            max-height: 180px;
            border-radius: 6px;
            vertical-align: middle;
        }
        .toDetail {
            position: absolute;
            right: 10px;
            bottom: 10px;
            width: 56px;
            height: 20px;
            line-height: 20px;
            background-color: #ffffff;
            border-radius: 3px;
            opacity: 0.5;
            color: #000;
            font-size: 12px;
            text-align: center;
        }
    }
    .mainMenuWrap {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        justify-content: space-around;
        align-items: center;
        width: 95%;
        margin: 10px auto 0;
        .menuList {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 25%;
            margin-bottom: 10px;
            font-size: 14px;
            img {
                width: 90rpx;
                height: 90rpx;
                border-radius: 50%;
            }
            div {
                margin-top: 5px;
            }
        }
    }
    .hr {
        width: 100%;
        height: 5px;
        background-color: #f4f4f4;
    }
    .articleWrap {
        width: 95%;
        margin: 10px auto;
        .articleList {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 5px 0;
            border-bottom: 1px solid #d9d8d8;
            .left {
                .title {
                    width: 96%;
                    height: 52px;
                    line-height: 26px;
                    font-size: 18px;
                    color: #000;
                    font-weight: bold;
                    overflow: hidden;
                }
                .leftBottom {
                    display: flex;
                    align-items: center;
                    color: #fd4835;
                    font-size: 12px;
                    height: 20px;
                    line-height: 20px;
                    .tag {
                        width: 20px;
                        height: 12px;
                        line-height: 12px;
                        background-color: #fd4835;
                        border-radius: 1px;
                        color: #fff;
                        padding: 0 2px;
                        font-size: 10px;
                        margin-left: 5px;
                    }
                    .date,
                    .commentNum {
                        margin-left: 5px;
                        color: #848484;
                    }
                    .date {
                        width: 70px;
                        overflow: hidden;
                    }
                }
            }
            .right {
                width: 45%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 65px;
                    vertical-align: middle;
                }
            }
            .articleMenu {
                box-sizing: border-box;
                position: absolute;
                width: 320px;
                height: 100%;
                top: 0;
                right: -330px;
                padding: 10px 0;
                background-color: #fd4835;
                opacity: 0.89;
                z-index: 10;
                color: #fff;
                text-align: center;
                font-size: 15px;
                transition: 1s;
                &.show {
                    right: -10px;
                }
                .middle {
                    padding: 5px 0;
                    align-items: center;
                    justify-content: space-around;
                    .brandList {
                        width: 85px;
                        text-align: center;
                        border: 1px solid #fff;
                        border-radius: 20px;
                        &.selected {
                            background-color: #fff;
                            border-color: #fff;
                            color: #fd4835;
                        }
                    }
                }
                .bottom {
                    font-size: 12px;
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
</style>
