<template>
    <div class="container">
        <div class="main">
            <div v-for="item in likes" class="likeList" :key="item.id">
                <div class="userImg">
                    <img :src="item.userImg" />
                </div>
                <div class="likeMiddle">
                    <div class="likeContent">
                        {{ item.userName }}点赞了您的{{ item.content }}
                    </div>
                    <div class="likeDate">{{ item.date }}</div>
                </div>
                <div class="contentImgUrl">
                    <img :src="item.contentImgUrl" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            likes: [
                {
                    userImg: '/static/images/headImg.png',
                    date: '2019年12月5日  12:26',
                    content: '文章',
                    contentImgUrl: '/static/images/contentImg.png',
                    userName: '胖墩'
                },
                {
                    userImg: '/static/images/headImg.png',
                    date: '2019年12月7日  12:26',
                    content: '视频',
                    contentImgUrl: '/static/images/contentImg.png',
                    userName: '胖墩'
                },
                {
                    userImg: '/static/images/headImg.png',
                    date: '2019年12月5日  12:26',
                    content: '文章',
                    contentImgUrl: '/static/images/contentImg.png',
                    userName: '胖墩'
                },
                {
                    userImg: '/static/images/headImg.png',
                    date: '2019年12月5日  12:26',
                    content: '视频',
                    contentImgUrl: '/static/images/contentImg.png',
                    userName: '胖墩'
                },
                {
                    userImg: '/static/images/headImg.png',
                    date: '2019年12月5日  12:26',
                    content: '视频',
                    contentImgUrl: '/static/images/contentImg.png',
                    userName: '胖墩'
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
            overflow: hidden;
            img {
                width: 52px;
                height: 52px;
                vertical-align: middle;
            }
        }
    }
}
</style>
