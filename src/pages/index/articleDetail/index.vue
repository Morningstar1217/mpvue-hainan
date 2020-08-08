<template>
    <div class="container">
        <div class="main">
            <div class="title">{{ aircleDetail.title }}</div>
            <div class="userInfoWrap flex_row">
                <img src="/static/images/demo1.png" />
                <div class="userInfo">
                    <div class="userName">胖墩</div>
                    <div class="telphone">13100000000</div>
                </div>
                <div class="moreBtn">
                    更多文章
                </div>
            </div>
            <div class="articleBg">宝妈传，打造宝妈们的传说</div>
            <div class="adImg">
                <img src="/static/images/5de89a24a5f9a.jpg" />
                <div class="toDetail">换成我的</div>
            </div>
            <div class="articleText">
                <rich-text :nodes="aircleDetail.detail"></rich-text>
            </div>
            <div class="userWrap">
                <img src="/static/images/demo1.png" class="userImg" />
                <div class="userName">胖墩</div>
                <div class="company">公司名称</div>
                <div class="btnWrap flex_row">
                    <div class="telphone">
                        <img src="/static/images/call.png" />
                    </div>
                    <div class="wechat">
                        <img src="/static/images/wechat.png" />
                    </div>
                </div>
            </div>
            <div class="adImg">
                <img src="/static/images/5de89a24a5f9a.jpg" />
                <div class="toDetail">换成我的</div>
            </div>
        </div>
        <div class="hr"></div>
        <div class="moreArticle">
            <div class="title flex_row">
                <div class="titleHeader"></div>
                <div class="titleText">相关阅读</div>
                <div class="more">更多</div>
            </div>
            <div class="articleWrap">
                <div class="articleList flex_row">
                    <div class="left">
                        <div class="title">
                            惯子如害子，九大惯子特征，家长必看
                        </div>
                        <div class="consoleWrap flex_row">
                            <div class="consoleList">
                                <img src="/static/images/watched.png" />
                                <span>154</span>
                            </div>
                            <div class="consoleList">
                                <img src="/static/images/like.png" />
                                <span>154</span>
                            </div>
                            <div class="consoleList">
                                <img src="/static/images/collect.png" />
                                <span>154</span>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <img src="/static/images/editArticle.png" />
                    </div>
                </div>
            </div>
            <div class="leaveMsgWrap">
                <div class="title">留言</div>
                <div class="leaveMsg">
                    <textarea></textarea>
                </div>
                <div class="saveBtn">提交保存</div>
            </div>
        </div>
        <div class="slideMenu">
            <img src="/static/images/slideMore.png" class="slideMore" />
            <img src="/static/images/slideWechat.png" class="slideWechat" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aircleDetail: {
                desc: '爸妈忙“血拼”',
                title:
                    '爸妈忙“血拼”，1岁半女儿因它丢了性命！1岁半女儿因它丢了性命！',
                detail:
                    '<h2>测试html</h2><p>"宝妈转，打造宝妈们的传说宝妈转，打造宝妈们的传说宝妈转，打造宝妈们的传说宝妈转，打造宝妈们的传说。</p><p>"宝妈转，打造宝妈们的传说宝妈转，打造宝妈们的传说宝妈转，打造宝妈们的传说宝妈转，打造宝妈们的传说。</p>'
            }
        }
    },
    mounted() {
        // console.log(this.$root.$mp.query)获取页面传参
        wx.setNavigationBarTitle({
            title: '文章详情'
        })
    }
}
</script>

<style lang="less" scoped>
.main {
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px 10px;
    .title {
        height: 48px;
        line-height: 24px;
        overflow: hidden;
    }
    .userInfoWrap {
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        img {
            width: 39px;
            height: 39px;
            vertical-align: middle;
            border-radius: 50%;
        }
        .userInfo {
            width: 60%;
            font-size: 12px;
        }
        .moreBtn {
            width: 90px;
            height: 23px;
            line-height: 23px;
            background-color: #fd4935;
            border-radius: 5px;
            text-align: center;
            color: #fff;
        }
    }
    .articleBg {
        width: 100%;
        height: 35px;
        margin: 0 auto;
        line-height: 35px;
        text-indent: 10px;
        color: #fff;
        font-size: 12px;
        // background-image: url('/images/articleBg.png');
        // background-size: cover;
        background-color: #fd4835;
        border-radius: 5px;
    }
    .adImg {
        position: relative;
        width: 100%;
        max-height: 170px;
        margin: 10px auto;
        overflow: hidden;
        img {
            width: 100%;
            max-height: 170px;
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
    .articleText {
        width: 100%;
        margin: 4px auto;
        overflow: hidden;
        margin-bottom: 50px;
    }
    .userWrap {
        position: relative;
        width: 100%;
        padding-top: 40px;
        background-color: rgb(255, 237, 234);
        border-radius: 4px;
        .userImg {
            position: absolute;
            top: -27px;
            left: 50%;
            transform: translateX(-50%);
            width: 54px;
            height: 54px;
            border-radius: 50%;
        }
        .userName,
        .company {
            width: 200px;
            margin: 0 auto;
            text-align: center;
        }
        .company {
            color: #666;
            font-size: 13px;
        }
        .btnWrap {
            width: 80%;
            margin: 0 auto;
            padding: 10px 0;
            align-items: center;
            justify-content: space-around;
            img {
                width: 87px;
                height: 24px;
                vertical-align: middle;
            }
        }
    }
}
.moreArticle {
    padding: 10px;
    background: #fff;
    > .title {
        justify-content: space-between;
        align-items: center;
        padding: 4px 0;
        .titleHeader {
            width: 3px;
            height: 15px;
            background-color: #fd4935;
        }
        .more {
            font-size: 12px;
            color: #999;
        }
    }
    .articleWrap {
        font-size: 14px;
        .articleList {
            padding: 10px 0;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #f4f4f4;
            .left {
                .title {
                    width: 240px;
                    height: 30px;
                    line-height: 30px;
                    overflow: hidden;
                }
                .consoleWrap {
                    align-items: center;
                    font-size: 13px;
                    color: #999;
                    .consoleList {
                        margin-right: 20px;
                        &:nth-child(1) {
                            img {
                                width: 13px;
                                height: 8px;
                                vertical-align: middle;
                                margin-top: -2px;
                                margin-right: 5px;
                            }
                        }
                        &:nth-child(2) {
                            img {
                                width: 9px;
                                height: 10px;
                                vertical-align: middle;
                                margin-top: -2px;
                                margin-right: 5px;
                            }
                        }
                        &:nth-child(3) {
                            img {
                                width: 10px;
                                height: 10px;
                                vertical-align: middle;
                                margin-top: -2px;
                                margin-right: 5px;
                            }
                        }
                    }
                }
            }
            .right {
                img {
                    width: 77px;
                    height: 33px;
                    vertical-align: middle;
                }
            }
        }
    }
    .leaveMsgWrap {
        .title {
            padding: 5px 0;
            font-size: 12px;
            color: #fd4835;
            text-align: right;
        }
        .leaveMsg {
            textarea {
                display: block;
                width: 95%;
                height: 144px;
                resize: none;
                margin: 5px auto;
                background-color: #fafafa;
                border-radius: 6px;
                outline: none;
            }
        }
        .saveBtn {
            width: 123px;
            height: 30px;
            line-height: 30px;
            margin: 20px auto 10px;
            background-color: #fd4835;
            border-radius: 5px;
            font-size: 15px;
            text-align: center;
            color: #fff;
        }
    }
}
.slideMenu {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    right: 10px;
    bottom: 100px;
    z-index: 100;
    img {
        width: 33px;
        height: 33px;
        vertical-align: middle;
        &.slideWechat {
            margin-top: 10px;
        }
    }
}
</style>
