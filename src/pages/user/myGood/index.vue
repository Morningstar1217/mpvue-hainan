<template>
    <div class="container">
        <div class="main">
            <div class="goodWrap">
                <div
                    class="goodList"
                    v-for="item in goodList"
                    :key="item.id"
                    @click="toDetail(item)"
                >
                    <div class="goodInfo flex_row">
                        <img :src="item.goodImg" class="goodImg" />
                        <div class="goodInfoWrap">
                            <div class="goodName">{{ item.goodName }}</div>
                            <div class="price">￥{{ item.price }}</div>
                            <div class="watchNum">浏览{{ item.watchNum }}</div>
                        </div>
                    </div>
                    <div class="goodConsole flex_row">
                        <div>删除</div>
                        <div>下架</div>
                        <div>编辑</div>
                        <div>点亮</div>
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
                    watchNum: 1255
                },
                {
                    id: 1,
                    goodImg: '/static/images/demo1.png',
                    goodName: '三明治水果餐三明治水果餐',
                    price: 64,
                    watchNum: 1255
                },
                {
                    id: 2,
                    goodImg: '/static/images/demo1.png',
                    goodName: '三明治水果餐三明治水果餐',
                    price: 64,
                    watchNum: 1255
                },
                {
                    id: 3,
                    goodImg: '/static/images/demo1.png',
                    goodName: '三明治水果餐三明治水果餐',
                    price: 64,
                    watchNum: 1255
                }
            ]
        }
    },
    mounted() {
        mpvue.setNavigationBarTitle({
            title: '商品管理'
        })
    },
    methods: {
        toDetail(item) {
            mpvue.navigateTo({
                url: '/pages/user/myGood/goodDetail/main?id=' + item.id
            })
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
            .goodInfo {
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
                        color: #999;
                        margin-top: 5px;
                        font-size: 12px;
                    }
                }
            }
            .goodConsole {
                height: 40px;
                align-items: center;
                flex-direction: row-reverse;
                font-size: 12px;
                div {
                    padding: 0 5px;
                    border: 1px solid #898989;
                    margin-left: 15px;
                }
            }
        }
    }
}
</style>
