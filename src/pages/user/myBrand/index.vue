<template>
    <div class="container">
        <div class="header">
            <div class="searchWrap">
                <input
                    type="text"
                    placeholder="请输入关键词搜索"
                    class="searchInput"
                />
                <img
                    src="/static/images/search_iconBlack.png"
                    class="searchIcon"
                />
            </div>
        </div>
        <div class="main">
            <div class="myBrand">
                <div class="title">我的品牌</div>
                <div class="myBrandWrap flex_row">
                    <div
                        class="myBrandList"
                        v-for="(item, index) in myBrandList"
                        :key="item.id"
                        @click="del(index)"
                    >
                        <span>{{ item.title }}</span>
                        <img src="/static/images/close.png" />
                    </div>
                </div>
            </div>
            <div class="myBrand">
                <div class="title">热门品牌</div>
                <div class="myBrandWrap flex_row">
                    <div
                        class="myBrandList hotBrandList"
                        v-for="(item, index) in hotBrandList"
                        :key="item.id"
                        @click="add(index)"
                    >
                        <span>{{ item.title }}</span>
                    </div>
                </div>
            </div>
            <div class="saveBtn">
                完成
            </div>
            <div class="myBrand">
                <div class="title">关于我的品牌</div>
                <div class="aboutBrand">
                    选择或添加品牌后，系统关联了品牌的文章会自动出现在您的微站主页中的品牌文章页面里。省去大量自己寻找相关文章的时间，省时省力……
                </div>
                <div class="aboutBrand">
                    如果您的公司或团队需要加盟，请联系官方客服，会有专人帮您关联您的品牌文章，一人同步营销百人团队。你优秀=每个团队人都优秀……
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myBrandList: [
                {
                    title: '阿朵米'
                },
                {
                    title: 'ABC'
                },
                {
                    title: '优衣库'
                },
                {
                    title: '阿朵米'
                }
            ],
            hotBrandList: [
                {
                    title: '阿朵米'
                },
                {
                    title: 'ABC'
                },
                {
                    title: '优衣库'
                },
                {
                    title: '阿朵米'
                },
                {
                    title: '阿朵米'
                },
                {
                    title: 'ABC'
                },
                {
                    title: '优衣库'
                },
                {
                    title: '阿朵米'
                }
            ]
        }
    },
    methods: {
        del(index) {
            this.myBrandList.splice(index, 1)
        },
        add(index) {
            this.myBrandList.push(this.hotBrandList[index])
        }
    },
    mounted() {
        mpvue.setNavigationBarTitle({ title: '我的品牌' })
    }
}
</script>

<style lang="less" scoped>
.container {
    position: absolute;
    height: auto;
    background-color: #fff;
    .header {
        width: 100%;
        background-color: #fff;
        .searchWrap {
            position: relative;
            width: 100%;
            padding: 10px 0;
            .searchInput {
                width: 92%;
                height: 26px;
                margin: 0 auto;
                background-color: #f2f2f2;
                border-radius: 13px;
                color: #000;
                outline: none;
                border: none;
                padding-left: 10px;
                font-size: 12px;
            }
            .searchIcon {
                position: absolute;
                right: 30px;
                top: 50%;
                transform: translateY(-50%);
                width: 13px;
                height: 15px;
            }
        }
    }
    .main {
        .myBrand {
            padding: 20px 20px 0;
            .title {
                font-size: 15px;
                font-weight: bold;
            }
            .myBrandWrap {
                align-items: center;
                flex-flow: wrap;
                padding: 20px 0 0;
                .myBrandList {
                    padding: 2px 10px;
                    margin-right: 20px;
                    margin-bottom: 15px;
                    text-align: center;
                    border: 1px solid #fd4935;
                    color: #fd4935;
                    border-radius: 20px;
                    img {
                        width: 10px;
                        height: 10px;
                        vertical-align: middle;
                        margin-top: -2px;
                    }
                }
                .hotBrandList {
                    padding: 2px 18px;
                    margin-right: 20px;
                    margin-bottom: 15px;
                    text-align: center;
                    border: 1px solid #707070;
                    color: #111111;
                    border-radius: 20px;
                }
            }
            .aboutBrand {
                margin-top: 20px;
                font-size: 15px;
                line-height: 30px;
                color: #5d5d5d;
                text-indent: 20px;
                &:last-child {
                    margin-top: 0;
                }
            }
        }
        .saveBtn {
            display: block;
            width: 117px;
            height: 36px;
            line-height: 36px;
            margin: 10px auto 0;
            text-align: center;
            color: #fff;
            background-color: #fd4935;
            border-radius: 5px;
            font-size: 18px;
        }
    }
}
</style>
