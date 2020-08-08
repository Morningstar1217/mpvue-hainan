<template>
    <div class="container">
        <div class="main">
            <div v-for="item in fens" class="likeList" :key="item.id">
                <div class="userImg">
                    <img :src="item.userImg" />
                </div>
                <div class="likeMiddle">
                    <div class="likeContent">
                        {{ item.userName }}
                    </div>
                    <div class="likeDate">{{ item.fensNum }}位粉丝</div>
                </div>
                <div class="contentImgUrl" v-if="!item.isLiked">+关注</div>
                <div class="hadLike" v-else>已关注</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fens: [
                {
                    userImg: '/static/images/demo1.png',
                    userName: '胖墩',
                    fensNum: 12,
                    isLiked: true
                },
                {
                    userImg: '/static/images/demo1.png',
                    userName: '胖墩',
                    fensNum: 12,
                    isLiked: false
                },
                {
                    userImg: '/static/images/demo1.png',
                    userName: '胖墩',
                    fensNum: 12,
                    isLiked: false
                },
                {
                    userImg: '/static/images/demo1.png',
                    userName: '胖墩',
                    fensNum: 12,
                    isLiked: true
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    .likeList {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 10px 0;
        background-color: #fff;
        margin-bottom: 4px;
        .userImg {
            overflow: hidden;
            img {
                width: 48px;
                height: 48px;
                border-radius: 5px;
                vertical-align: middle;
            }
        }
        .likeMiddle {
            width: 65%;
        }
        .likeContent {
            font-size: 14px;
            color: #1d1d1d;
        }
        .likeDate {
            font-size: 11px;
            color: #474646;
            margin-top: 5px;
        }
        .contentImgUrl {
            width: 47px;
            height: 18px;
            line-height: 19px;
            background-color: #fd4a35;
            border-radius: 4px;
            font-size: 12px;
            text-align: center;
            color: #fff;
            border: solid 1px #fd4a35;
        }
        .hadLike {
            width: 47px;
            height: 18px;
            line-height: 19px;
            border-radius: 4px;
            font-size: 12px;
            text-align: center;
            color: #6e6e6e;
            border: solid 1px #898989;
        }
    }
}
</style>
