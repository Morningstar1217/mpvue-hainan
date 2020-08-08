<template>
    <div class="container">
        <div class="main">
            <div class="goodsWrap">
                <div v-for="item in goods" class="likeList" :key="item.id">
                    <div class="userImg">
                        <img :src="item.goodImg" />
                    </div>
                    <div class="likeMiddle">
                        <div class="likeContent">
                            {{ item.goodTitle }}
                        </div>
                        <div class="likeDate">￥{{ item.price }}</div>
                    </div>
                    <div class="contentImgUrl">
                        <img src="/static/images/loved.png" class="loved" />
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
            goods: [
                {
                    goodImg: '/static/images/demo1.png',
                    goodTitle: '衣服衣服衣服衣服衣服衣服衣服衣服衣服衣服',
                    price: 64
                },
                {
                    goodImg: '/static/images/demo1.png',
                    goodTitle: '衣服衣服衣服衣服衣服衣服衣服衣服衣服衣服',
                    price: 64
                },
                {
                    goodImg: '/static/images/demo1.png',
                    goodTitle: '衣服衣服衣服衣服衣服衣服衣服衣服衣服衣服',
                    price: 64
                },
                {
                    goodImg: '/static/images/demo1.png',
                    goodTitle: '衣服衣服衣服衣服衣服衣服衣服衣服衣服衣服',
                    price: 64
                },
                {
                    goodImg: '/static/images/demo1.png',
                    goodTitle: '衣服衣服衣服衣服衣服衣服衣服衣服衣服衣服',
                    price: 64
                }
            ]
        }
    },
    methods: {},
    mounted() {
        mpvue.setNavigationBarTitle({
            title: '收藏商品'
        })
    }
}
</script>

<style lang="less" scoped>
.main {
    width: 100%;
    margin: 0 auto;
    .likeList {
        display: flex;
        padding: 0 10px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;
        padding: 10px;
        margin-bottom: 6px;
        .userImg {
            overflow: hidden;
            margin-right: 5px;
            img {
                width: 74px;
                height: 74px;
                border-radius: 5px;
                vertical-align: middle;
            }
        }
        .likeMiddle {
            width: 60%;
            margin-right: 10px;
        }
        .likeContent {
            font-weight: bold;
            font-size: 14px;
            color: #1d1d1d;
        }
        .likeDate {
            font-size: 15px;
            color: #fd4835;
            margin-top: 5px;
        }
        .contentImgUrl {
            img {
                width: 25px;
                height: 25px;
                vertical-align: middle;
            }
        }
        .hadLike {
            width: 58px;
            height: 22px;
            line-height: 23px;
            border-radius: 4px;
            font-size: 12px;
            text-align: center;
            color: #6e6e6e;
            border: solid 1px #898989;
        }
    }
}
</style>
