<template>
    <div class="container">
        <div class="main">
            <div class="msgWrap">
                <div class="msgList" v-for="item in msgList" :key="item.id">
                    <div class="msgDate">
                        {{ item.date }}
                    </div>
                    <div class="msgContent">
                        <div class="msgTitle">卖出通知</div>
                        <div class="msgText">
                            您的商品"{{ item.good }}"被买家{{
                                item.saleName
                            }}于{{ item.date }}卖出
                        </div>
                        <div class="toWatch">点击查看</div>
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
            msgList: [
                {
                    date: '2019年12月3日  12:37',
                    good: '好然后飞虎队客户付费互动',
                    saleName: '戴菲菲'
                },
                {
                    date: '2019年12月3日  12:37',
                    good: '好然后飞虎队客户付费互动',
                    saleName: '戴菲菲'
                },
                {
                    date: '2019年12月3日  12:37',
                    good: '好然后飞虎队客户付费互动',
                    saleName: '戴菲菲'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    .msgWrap {
        padding: 0 20px;
        .msgList {
            overflow: hidden;
            margin-bottom: 10px;
            .msgDate {
                width: 137px;
                height: 19px;
                line-height: 19px;
                margin: 10px auto;
                background-color: #c6c6c6;
                border-radius: 4px;
                font-size: 12px;
                color: #fff;
                text-align: center;
            }
            .msgContent {
                padding: 10px 20px;
                background-color: #fff;
                border-radius: 4px;
                .msgTitle {
                    font-size: 14px;
                    font-weight: bold;
                    padding: 5px 0;
                    border-bottom: 1px solid #d9d8d8;
                }
                .msgText {
                    padding: 5px 0;
                    font-size: 11px;
                    color: #474646;
                }
                .toWatch {
                    padding: 5px 0;
                    font-size: 13px;
                    color: #597fd5;
                }
            }
        }
    }
}
</style>
