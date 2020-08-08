<template>
    <div class="container">
        <div class="header">
            <div class="btnWrap flex_row">
                <div class="cancel">取消</div>
                <div class="release">发布</div>
            </div>
        </div>
        <div class="main">
            <div class="goodEditWrap">
                <div class="goodTitle">
                    <input type="text" placeholder="输入标题" />
                </div>
                <div class="goodContent">
                    <textarea
                        placeholder="此处输入商品规格详情等..."
                    ></textarea>
                </div>
                <div class="imgWrap flex_row">
                    <div class="imgList">
                        <img src="/static/images/demo1.png" />
                    </div>
                    <div class="imgList">
                        <img src="/static/images/demo1.png" />
                    </div>
                    <div class="uploadImg">
                        <img src="/static/images/plus.png" />
                    </div>
                </div>
                <div class="goodColumn flex_row">
                    <div class="left">
                        <img src="/static/images/price.png" />
                        <span>价格</span>
                    </div>
                    <div class="right">
                        开个价 >
                    </div>
                </div>
                <div class="goodColumn flex_row">
                    <div class="left">
                        <img src="/static/images/menu.png" />
                        <span>分类</span>
                    </div>
                    <div class="right">
                        选择相应分类获得更多曝光机会 >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        mpvue.setNavigationBarTitle({
            title: '发布商品'
        })
    }
}
</script>

<style lang="less" scoped>
.container {
    position: absolute;
    background-color: #fff;
    .header {
        background-color: #fff;
        .btnWrap {
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            font-size: 15px;
            .release {
                width: 55px;
                height: 28px;
                line-height: 28px;
                text-align: center;
                color: #fff;
                background-color: #fd4935;
                border-radius: 13px;
            }
        }
    }
    .main {
        background-color: #fff;
        .goodEditWrap {
            padding: 10px;
            .goodTitle {
                input {
                    outline: none;
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    border-bottom: 1px solid #f4f4f4;
                }
            }
            .goodContent {
                textarea {
                    width: 100%;
                    height: 120px;
                    margin-top: 10px;
                    display: block;
                    outline: none;
                    resize: none;
                }
            }
            .imgWrap {
                align-items: center;
                padding-bottom: 30px;
                border-bottom: 1px solid #f4f4f4;
                & > div {
                    width: 100px;
                    height: 100px;
                    overflow: hidden;
                    border-radius: 5px;
                    margin-right: 10px;
                }
                .imgList {
                    img {
                        width: 100px;
                        height: 100px;
                    }
                }
                & div.uploadImg {
                    position: relative;
                    background-color: #f2f2f2;
                    img {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate3d(-50%, -50%, 0);
                        width: 50px;
                        height: 50px;
                    }
                }
            }
            .goodColumn {
                align-items: center;
                justify-content: space-between;
                font-size: 14px;
                height: 50px;
                border-bottom: 1px solid #f4f4f4;
                .left {
                    color: #464646;
                    img {
                        width: 20px;
                        height: 20px;
                        vertical-align: middle;
                        margin-top: -2px;
                    }
                }
                .right {
                    font-size: 13px;
                    color: #999;
                }
            }
        }
    }
}
</style>
