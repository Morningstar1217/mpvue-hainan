<template>
    <div class="container">
        <div class="header">
            <div class="dataWrap">
                <div class="dataList">
                    <div>今日阅读数</div>
                    <div>4</div>
                </div>
                <div class="dataList">
                    <div>近7日阅读数</div>
                    <div>8</div>
                </div>
                <div class="dataList">
                    <div>总阅读数</div>
                    <div>56441</div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="contentWrap" v-for="item in dataList" :key="item.id">
                <div class="top">
                    {{ item.title }}
                </div>
                <div class="middle flex_row ">
                    <div class="numList">
                        <div class="num">{{ item.article }}</div>
                        <div class="numTitle">阅读文章数</div>
                    </div>
                    <div class="numList">
                        <div class="num">{{ item.totalTime }}</div>
                        <div class="numTitle">总阅读时长</div>
                    </div>
                    <div class="numList">
                        <div class="num">{{ item.shareNum }}</div>
                        <div class="numTitle">分享次数</div>
                    </div>
                    <div class="numList">
                        <div class="num">{{ item.sharePeople }}</div>
                        <div class="numTitle">分享人数</div>
                    </div>
                </div>
                <div class="bottom flex_row">
                    <div class="numBtn" @click="toDetail(item)">
                        公共库采集详情
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
            dataList: [
                {
                    title: '惯子如害子，九大惯子特征，家长必看',
                    article: 7,
                    totalTime: 1551,
                    shareNum: 17,
                    sharePeople: 28
                }
            ]
        }
    },
    mounted() {
        mpvue.setNavigationBarTitle({
            title: '数据中心'
        })
    },
    methods: {
        toDetail(item) {
            mpvue.navigateTo({
                url:
                    '/pages/user/marketDataList/marketDataDetail/main?id=' +
                    item.id
            })
        }
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
        .dataList {
            text-align: center;
            div:first-child {
                margin-bottom: 10px;
            }
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
        margin: 0 auto 10px;
        .top {
            padding: 5px 0;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #d9d8d8;
            font-size: 14px;
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
            justify-content: space-around;
            align-items: center;
            margin-top: 10px;
            .numBtn {
                height: 24px;
                line-height: 24px;
                padding: 0 8px;
                border-radius: 12px;
                text-align: center;
                font-size: 11px;
                border: solid 1px #fc4a35;
                color: #fc4a35;
            }
        }
    }
}
</style>
