<template>
    <div class="container">
        <div class="main">
            <div class="goodWrap">
                <div class="goodList" v-for="item in goodList" :key="item.id">
                    <div class="goodDateWrap flex_row">
                        <div class="goodDate">{{ item.date }}</div>
                        <div class="goodOrder">订单号:{{ item.orderId }}</div>
                    </div>
                    <div class="goodInfo flex_row">
                        <img :src="item.goodImg" class="goodImg" />
                        <div class="goodInfoWrap">
                            <div class="goodName">{{ item.goodName }}</div>
                            <div class="price">￥{{ item.price }}</div>
                            <div class="watchNum">
                                <img src="/static/images/success.png" />
                                <span>{{ item.status }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="goodConsole flex_row">
                        <div class="contactShop">
                            <img src="/static/images/contact.png" />
                            <span>联系卖家</span>
                        </div>
                        <div class="btnWrap flex_row">
                            <div
                                class="toLogistics"
                                v-if="item.status === '已发货'"
                            >
                                查看物流
                            </div>
                            <div
                                class="toEvaluation"
                                v-if="item.status === '交易成功'"
                            >
                                评价交易
                            </div>
                            <div class="toDetail">查看详情</div>
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
            goodList: [
                {
                    id: 0,
                    goodImg: '/static/images/demo1.png',
                    goodName: '三明治水果餐三明治水果餐',
                    price: 64,
                    watchNum: 1255,
                    date: '2019-12-10',
                    orderId: '46434343571156',
                    status: '待发货'
                },
                {
                    id: 1,
                    goodImg: '/static/images/demo1.png',
                    goodName: '三明治水果餐三明治水果餐',
                    price: 64,
                    watchNum: 1255,
                    date: '2019-12-10',
                    orderId: '46434343571156',
                    status: '已发货'
                },
                {
                    id: 2,
                    goodImg: '/static/images/demo1.png',
                    goodName: '三明治水果餐三明治水果餐',
                    price: 64,
                    watchNum: 1255,
                    date: '2019-12-10',
                    orderId: '46434343571156',
                    status: '待发货'
                },
                {
                    id: 3,
                    goodImg: '/static/images/demo1.png',
                    goodName: '三明治水果餐三明治水果餐',
                    price: 64,
                    watchNum: 1255,
                    date: '2019-12-10',
                    orderId: '46434343571156',
                    status: '交易成功'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    .goodWrap {
        padding: 10px 10px;
        .goodList {
            padding: 10px 10px 0;
            background-color: #fff;
            border-radius: 5px;
            margin-bottom: 10px;
            .goodDateWrap {
                align-items: center;
                justify-content: space-between;
                font-size: 12px;
                padding: 0 0 10px;
                border-bottom: 1px solid #f6f6f6;
            }
            .goodInfo {
                padding: 10px 0;
                justify-content: space-between;
                .goodImg {
                    width: 68px;
                    height: 68px;
                    vertical-align: middle;
                    border-radius: 5px;
                }
                .goodInfoWrap {
                    width: 75%;
                    font-size: 13px;
                    .goodName {
                        height: 20px;
                        line-height: 20px;
                        overflow: hidden;
                        font-weight: bold;
                    }
                    .price {
                        color: #fd4835;
                        margin-top: 5px;
                        font-size: 15px;
                    }
                    .watchNum {
                        margin-top: 5px;
                        font-size: 12px;
                        img {
                            width: 10px;
                            height: 10px;
                            vertical-align: middle;
                        }
                    }
                }
            }
            .goodConsole {
                height: 40px;
                align-items: center;
                font-size: 12px;
                justify-content: space-between;
                .contactShop {
                    font-size: 12px;
                    color: #fd4935;
                    img {
                        width: 16px;
                        height: 15px;
                        vertical-align: middle;
                        margin-right: 5px;
                    }
                }
                .btnWrap {
                    align-items: center;
                    .toDetail {
                        width: 80px;
                        height: 24px;
                        line-height: 24px;
                        text-align: center;
                        color: #fd4935;
                        border: solid 1px #fd4935;
                        border-radius: 12px;
                    }
                    .toLogistics,
                    .toEvaluation {
                        width: 80px;
                        height: 24px;
                        line-height: 24px;
                        text-align: center;
                        color: #595959;
                        border: solid 1px #c7c7c7;
                        border-radius: 12px;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
}
</style>
