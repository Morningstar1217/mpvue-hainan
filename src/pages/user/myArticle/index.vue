<template>
    <div class="container">
        <div class="header">
            <div class="searchWrap">
                <input
                    type="text"
                    placeholder="请输入关键词搜索"
                    class="searchInput"
                />
                <img
                    src="/static/images/search_iconBlack.png"
                    class="searchIcon"
                />
            </div>
        </div>
        <div class="main">
            <div class="articleWrap">
                <div
                    class="articleList"
                    v-for="item in articleList"
                    :key="item.id"
                >
                    <div class="articleContent flex_row">
                        <img :src="item.articleImg" class="articleImg" />
                        <div class="articleInfo">
                            <div class="title">{{ item.title }}</div>
                            <div class="articleData flex_row">
                                <div class="watchWrap flex_row">
                                    <img src="/static/images/watched.png" />
                                    <div class="watchNum">
                                        {{ item.watchNum }}
                                    </div>
                                </div>
                                <div class="likeWrap flex_row">
                                    <img src="/static/images/like.png" />
                                    <div class="watchNum">
                                        {{ item.likeNum }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="articleConsole flex_row">
                        <div class="consoleBtn">修改</div>
                        <div class="consoleBtn">删除</div>
                        <div class="consoleBtn">数据详情</div>
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
                    articleImg: '/static/images/5de89a24a5f9a.jpg',
                    likeNum: 134,
                    watchNum: 283
                },
                {
                    title: '惯子如害子，九大惯子特征，家长必看家长必看家长必看',
                    articleImg: '/static/images/5de89a24a5f9a.jpg',
                    likeNum: 134,
                    watchNum: 283
                },
                {
                    title: '惯子如害子，九大惯子特征，家长必看家长必看家长必看',
                    articleImg: '/static/images/5de89a24a5f9a.jpg',
                    likeNum: 134,
                    watchNum: 283
                }
            ]
        }
    },
    mounted() {
        mpvue.setNavigationBarTitle({
            title: '我的文章'
        })
    }
}
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    background-color: #fff;
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
}
.main {
    .articleWrap {
        width: 95%;
        margin: 10px auto;
        .articleList {
            padding: 10px;
            margin-bottom: 10px;
            background-color: #fff;
            border-radius: 6px;
            overflow: hidden;
            .articleContent {
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid #f4f4f4;
                padding-bottom: 10px;
                .articleImg {
                    width: 109px;
                    height: 65px;
                    vertical-align: middle;
                    border-radius: 4px;
                }
                .articleInfo {
                    width: 65%;
                    font-size: 13px;
                    .title {
                        height: 36px;
                        line-height: 18px;
                        overflow: hidden;
                    }
                    .articleData {
                        margin-top: 15px;
                        align-items: center;
                        color: #999;
                        .watchWrap,
                        .likeWrap {
                            align-items: center;
                        }
                        .watchWrap {
                            img {
                                width: 13px;
                                height: 8px;
                                vertical-align: middle;
                                margin-right: 5px;
                            }
                        }
                        .likeWrap {
                            img {
                                width: 9px;
                                height: 10px;
                                vertical-align: middle;
                                margin-right: 5px;
                                margin-left: 10px;
                            }
                        }
                    }
                }
            }
            .articleConsole {
                align-items: center;
                justify-content: space-between;
                padding: 10px 0 0;
                .consoleBtn {
                    width: 80px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    border: 1px solid #c7c7c7;
                    border-radius: 20px;
                    font-size: 12px;
                    color: #595959;
                }
            }
        }
    }
}
</style>
