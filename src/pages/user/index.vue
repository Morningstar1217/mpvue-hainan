<template>
    <div class="container">
        <div class="header">
            <div class="top">
                <div class="userImgWrap">
                    <img src="/static/images/user.png" class="userImg" />
                    <img
                        src="/static/images/joinVip/vip3.png"
                        class="userVip"
                    />
                </div>
                <div class="userInfo">
                    <div class="userName flex_row">
                        <span>胖墩</span>
                        <div class="moneyBtn" @click="toMyWeb">个人微站</div>
                    </div>
                    <div class="telphone flex_row">
                        <div>到期：2019-12-12</div>
                        <div class="dateBtn" @click="toJoinVip">续费</div>
                    </div>
                    <div class="city flex_row">
                        <div>余额：55</div>
                        <div class="moneyBtn">提现</div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <span>超赞:100</span>
                <span>粉丝:100</span>
                <span>文章:100</span>
                <span>视频:100</span>
            </div>
            <div class="settingIcon">
                <img src="/static/images/userIcon/setting.png" alt="" />
            </div>
        </div>
        <div class="main">
            <div class="menuWrap">
                <div class="menuTitle flex_row">
                    <div class="titleIcon"></div>
                    <div class="titleText">公司/品牌</div>
                    <div class="editCompany" @click="toMyBrand">
                        <span>编辑</span>
                        <img
                            src="/static/images/userIcon/rightArrow.png"
                            class="rightArrow"
                        />
                    </div>
                </div>
                <div class="menuUl flex_row">
                    <div class="companyList">阿咪多</div>
                    <div class="companyList">阿咪多</div>
                    <div class="companyList">阿咪多</div>
                    <div class="companyList">阿咪多</div>
                </div>
            </div>
            <div class="menuWrap">
                <div class="menuTitle flex_row">
                    <div class="titleIcon"></div>
                    <div class="titleText">文章管理</div>
                </div>
                <div class="menuUl flex_row">
                    <div class="menuList">
                        <img src="/static/images/userIcon/articleIcon1.png" />
                        <div class="menuListText">发布文章</div>
                    </div>
                    <div class="menuList">
                        <img src="/static/images/userIcon/articleIcon2.png" />
                        <div class="menuListText">文章采集</div>
                    </div>
                    <div class="menuList" @click="toMyAircle">
                        <img src="/static/images/userIcon/articleIcon3.png" />
                        <div class="menuListText">我的文章</div>
                    </div>
                </div>
            </div>
            <div class="menuWrap">
                <div class="menuTitle flex_row">
                    <div class="titleIcon"></div>
                    <div class="titleText">视频管理</div>
                </div>
                <div class="menuUl flex_row">
                    <div class="menuList">
                        <img src="/static/images/userIcon/vedioIcon1.png" />
                        <div class="menuListText">发布视频</div>
                    </div>
                    <div class="menuList">
                        <img src="/static/images/userIcon/vedioIcon2.png" />
                        <div class="menuListText">视频广场</div>
                    </div>
                    <div class="menuList">
                        <img src="/static/images/userIcon/vedioIcon3.png" />
                        <div class="menuListText">我的视频</div>
                    </div>
                </div>
            </div>
            <div class="menuWrap">
                <div class="menuTitle flex_row">
                    <div class="titleIcon"></div>
                    <div class="titleText">商品管理</div>
                </div>
                <div class="menuUl flex_row">
                    <div class="menuList" @click="toReleaseGood">
                        <img src="/static/images/userIcon/goodIcon1.png" />
                        <div class="menuListText">发布商品</div>
                    </div>
                    <div class="menuList" @click="toGood">
                        <img src="/static/images/userIcon/goodIcon2.png" />
                        <div class="menuListText">商品管理</div>
                    </div>
                    <div class="menuList" @click="toBuyGood">
                        <img src="/static/images/userIcon/goodIcon3.png" />
                        <div class="menuListText">买入订单</div>
                    </div>
                    <div class="menuList" @click="toSaleGood">
                        <img src="/static/images/userIcon/goodIcon4.png" />
                        <div class="menuListText">卖出订单</div>
                    </div>
                    <div class="menuList" @click="toCollectGood">
                        <img src="/static/images/collect_red.png" />
                        <div class="menuListText">收藏商品</div>
                    </div>
                </div>
            </div>
            <div class="menuWrap">
                <div class="menuTitle flex_row">
                    <div class="titleIcon"></div>
                    <div class="titleText">分销管理</div>
                </div>
                <div class="menuUl flex_row">
                    <div class="menuList">
                        <img src="/static/images/userIcon/teamIcon1.png" />
                        <div class="menuListText">我的团队</div>
                    </div>
                    <div class="menuList">
                        <img src="/static/images/userIcon/teamIcon2.png" />
                        <div class="menuListText">我的收益</div>
                    </div>
                    <div class="menuList" @click="toMarketData">
                        <img src="/static/images/userIcon/marketDataIcon.png" />
                        <div class="menuListText">数据中心</div>
                    </div>
                </div>
            </div>
            <div class="menuWrap">
                <div class="menuTitle flex_row">
                    <div class="titleIcon"></div>
                    <div class="titleText">互动中心</div>
                </div>
                <div class="menuUl flex_row">
                    <div class="menuList" @click="toMyAd">
                        <img src="/static/images/userIcon/adIcon1.png" />
                        <div class="menuListText">海报中心</div>
                    </div>
                    <div class="menuList" @click="toAdSetting">
                        <img src="/static/images/userIcon/adIcon2.png" />
                        <div class="menuListText">广告设置</div>
                    </div>
                    <div class="menuList">
                        <img src="/static/images/userIcon/adIcon3.png" />
                        <div class="menuListText">消息推送</div>
                    </div>
                    <div class="menuList" @click="toMyBrand">
                        <img src="/static/images/userIcon/adIcon4.png" />
                        <div class="menuListText">我的品牌</div>
                    </div>
                    <div class="menuList">
                        <img src="/static/images/userIcon/adIcon5.png" />
                        <div class="menuListText">身份认证</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="toRelease">
            <div>
                <img src="/static/images/help.png" />
            </div>
            <div class="slideText">帮助中心</div>
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
                    date: '2019-06-10',
                    watchNum: 154,
                    likeNum: 100,
                    imgUrl: '/static/images/user.png'
                },
                {
                    title: '惯子如害子，九大惯子特征，家长必看家长必看家长必看',
                    date: '2019-06-10',
                    watchNum: 154,
                    likeNum: 100,
                    imgUrl: '/static/images/user.png'
                },
                {
                    title: '惯子如害子，九大惯子特征，家长必看家长必看家长必看',
                    date: '2019-06-10',
                    watchNum: 154,
                    likeNum: 100,
                    imgUrl: '/static/images/user.png'
                }
            ]
        }
    },
    mounted() {
        console.log(this.globalData)
        wx.setNavigationBarTitle({
            title: '我的'
        })
    },
    methods: {
        toJoinVip() {
            mpvue.navigateTo({
                url: '/pages/user/joinVip/main'
            })
        },
        toMyAircle() {
            mpvue.navigateTo({
                url: '/pages/user/myArticle/main'
            })
        },
        toMarketData() {
            mpvue.navigateTo({ url: '/pages/user/marketDataList/main' })
        },
        toMyWeb() {
            mpvue.navigateTo({
                url: '/pages/user/myWeb/main'
            })
        },
        toGood() {
            mpvue.navigateTo({
                url: '/pages/user/myGood/main'
            })
        },
        toReleaseGood() {
            mpvue.navigateTo({
                url: '/pages/user/myGood/releaseGood/main'
            })
        },
        toBuyGood() {
            mpvue.navigateTo({
                url: '/pages/user/myGood/buyGood/main'
            })
        },
        toSaleGood() {
            mpvue.navigateTo({
                url: '/pages/user/myGood/saleGood/main'
            })
        },
        toMyAd() {
            mpvue.navigateTo({ url: '/pages/user/myAd/main' })
        },
        toAdSetting() {
            mpvue.navigateTo({ url: '/pages/user/myAd/adSetting/main' })
        },
        toMyBrand() {
            mpvue.navigateTo({ url: '/pages/user/myBrand/main' })
        },
        toCollectGood() {
            mpvue.navigateTo({ url: '/pages/user/collectGood/main' })
        }
    }
}
</script>

<style lang="less" scoped>
@baseColor: #fd4835;
.header {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 170px;
    padding: 10px 20px;
    z-index: 10;
    color: #fff;
    // background-image: linear-gradient(
    //     90deg,
    //     #f47d2b 0%,
    //     #f96330 36%,
    //     #fd4835 100%
    // );
    background-color: @baseColor;
    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        .userImgWrap {
            position: relative;
            .userImg {
                width: 63px;
                height: 63px;
                border: 3px solid #ffffff99;
                border-radius: 50%;
            }
            .userVip {
                position: absolute;
                top: -5px;
                right: -5px;
                width: 20px;
                height: 20px;
                transform: rotate(40deg);
            }
        }
        .userInfo {
            position: relative;
            width: 75%;
            .userName {
                .moneyBtn {
                    width: 60px;
                    height: 20px;
                    line-height: 20px;
                    margin-left: 10px;
                    border-radius: 4px;
                    text-align: center;
                    font-size: 12px;
                    border: solid 1px #ffffff;
                    color: #fff;
                }
            }
            .telphone,
            .city {
                font-size: 14px;
                margin-top: 5px;
                align-items: center;
            }
            .telphone {
                .dateBtn {
                    width: 42px;
                    height: 16px;
                    background-color: #ffffff;
                    border-radius: 4px;
                    font-size: 12px;
                    text-align: center;
                    color: #fd4835;
                    margin-left: 10px;
                }
            }
            .city {
                .moneyBtn {
                    width: 42px;
                    height: 16px;
                    line-height: 16px;
                    margin-left: 10px;
                    border-radius: 4px;
                    text-align: center;
                    font-size: 12px;
                    border: solid 1px #ffffff;
                }
            }
        }
    }
    .bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 13px;
        margin-top: 10px;
    }
    .settingIcon {
        position: absolute;
        right: 20px;
        top: 20px;
        overflow: hidden;
        z-index: 100;
        img {
            width: 18px;
            height: 18px;
            vertical-align: middle;
        }
    }
}
.main {
    box-sizing: border-box;
    padding: 10px 10px;
    .menuWrap {
        width: 100%;
        margin-bottom: 10px;
        background-color: #fff;
        border-radius: 6px;
        &:first-child .menuUl {
            justify-content: space-around;
        }
        .menuTitle {
            position: relative;
            align-items: center;
            padding: 15px;
        }
        .titleIcon {
            width: 3px;
            height: 15px;
            background-color: #fd4935;
            margin-right: 10px;
            border-radius: 1.5px;
        }
        .editCompany {
            position: absolute;
            right: 10px;
            color: #fd4835;
            font-size: 14px;
            .rightArrow {
                width: 13px;
                height: 13px;
                vertical-align: middle;
                margin-top: -3px;
            }
        }
        .menuUl {
            flex-flow: wrap;
            align-items: center;
            padding: 15px 10px 0;
            font-size: 14px;
            .companyList {
                padding: 5px 10px;
                border: 1px solid #fd4835;
                margin-bottom: 20px;
                text-align: center;
                border-radius: 15px;
                margin-right: 15px;
            }
            .menuList {
                text-align: center;
                width: 25%;
                margin-bottom: 20px;
                img {
                    width: 20px;
                    height: 20px;
                }
            }
            img {
                margin-bottom: 10px;
                vertical-align: middle;
            }
        }
    }
}
.toRelease {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    right: 10px;
    bottom: 200px;
    width: 33px;
    background-color: #fd4835;
    border-radius: 5px;
    color: #fff;
    font-size: 12px;
    padding: 5px 0;
    img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
    .slideText {
        text-align: center;
        width: 20px;
        vertical-align: middle;
    }
}
</style>
