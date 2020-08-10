<template>
    <div class="container">
        <div class="header">
            <div class="userInfoWrap flex_row">
                <img src="/static/images/user.png" class="userImg" />
                <div class="userInfo">
                    <div class="userName">
                        胖墩
                        <span>实名认证</span>
                        <img src="/static/images/surePeople.png" />
                    </div>
                    <div class="date">15分钟前来过 发布于武汉</div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="price">￥<span>64</span></div>
            <div class="content">
                这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍
            </div>
            <img src="/static/images/user.png" class="goodImg" />
            <div class="footInfo">
                <img src="/static/images/danbao.png" />
                <span>担保交易</span>
            </div>
            <div class="hr"></div>
            <div class="goodConsole flex_row">
                <div class="iconWrap flex_row">
                    <div class="iconList">
                        <img src="/static/images/like_gray.png" />
                        <div>超赞</div>
                    </div>
                    <div class="iconList">
                        <img src="/static/images/collect_gray.png" />
                        <div>收藏</div>
                    </div>
                </div>
                <div class="toBuy">我要买</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.container {
    position: absolute;
    background-color: #fff;
    .header {
        padding: 10px;
        .userInfoWrap {
            align-items: center;
            font-size: 14px;
            padding: 10px 0;
            border-bottom: 1px solid #f4f4f4;
            .userImg {
                width: 40px;
                height: 40px;
                vertical-align: middle;
                border-radius: 2px;
            }
            .userInfo {
                margin-left: 10px;
                .userName {
                    font-weight: bold;
                    margin-bottom: 2px;
                    span {
                        color: #60cbd3;
                        font-size: 12px;
                    }
                    img {
                        width: 12px;
                        height: 10px;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
    .main {
        box-sizing: border-box;
        .price {
            color: #fd4835;
            font-size: 14px;
            padding: 0 10px;
            span {
                font-size: 22px;
            }
        }
        .content {
            font-size: 16px;
            padding: 5px 0;
            text-indent: 20px;
            padding: 0 10px;
            margin-top: 10px;
        }
        .goodImg {
            display: block;
            width: 95%;
            max-height: 180px;
            margin: 20px auto 0;
        }
        .footInfo {
            margin: 10px 0 5px;
            color: #60cbd3;
            font-size: 12px;
            padding: 0 10px;
            img {
                width: 10px;
                height: 10px;
                vertical-align: middle;
                margin-top: -2px;
            }
        }
        .goodConsole {
            padding: 15px 10px;
            justify-content: space-between;
            align-items: center;
            .iconWrap {
                .iconList {
                    text-align: center;
                    margin-right: 10px;
                    font-size: 12px;
                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
            }
            .toBuy {
                width: 72px;
                height: 34px;
                line-height: 34px;
                text-align: center;
                color: #fff;
                background-image: linear-gradient(
                        -90deg,
                        #f23064 0%,
                        #f44154 25%,
                        #f55243 50%,
                        #f6623b 74%,
                        #f77132 100%
                    ),
                    linear-gradient(#ee3658, #ee3658);
                background-blend-mode: normal, normal;
                border-radius: 15px;
            }
        }
    }
}
</style>
