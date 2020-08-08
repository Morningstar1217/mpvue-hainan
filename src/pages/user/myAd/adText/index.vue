<template>
    <div class="container">
        <div class="header">
            <div class="adWrap flex_row">
                <div
                    class="adList"
                    :class="menuIndex === 0 ? 'selected' : ''"
                    @click="changeMenu(0)"
                >
                    跑马灯广告
                </div>
                <div
                    class="adList"
                    :class="menuIndex === 1 ? 'selected' : ''"
                    @click="changeMenu(1)"
                >
                    顶部图片广告
                </div>
                <div
                    class="adList"
                    :class="menuIndex === 2 ? 'selected' : ''"
                    @click="changeMenu(2)"
                >
                    底部图片广告
                </div>
            </div>
        </div>
        <div class="main">
            <div class="adTextWrap">
                <div class="title">
                    广告文字
                </div>
                <div class="textWrap">
                    <textarea
                        cols="50"
                        rows="3"
                        placeholder="限17个汉字，34个字符"
                        maxlength="34"
                    ></textarea>
                </div>
            </div>
            <div class="saveBtn">提交保存</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuIndex: 0
        }
    },
    methods: {
        changeMenu(index) {
            this.menuIndex = index
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    padding: 10px 0;
    .adWrap {
        width: 90%;
        font-size: 14px;
        margin: 0 auto;
        .adList {
            width: 33.33%;
            height: 36px;
            line-height: 36px;
            text-align: center;
            background-color: #fff;
            border: solid 1px #ddd;
            &.selected {
                background-color: #fd4835;
                color: #fff;
                border: 1px solid #fd4835;
            }
            &:last-child {
                border-left: none;
            }
            &:nth-child(2) {
                border-left: none;
            }
        }
    }
}
.main {
    .adTextWrap {
        width: 95%;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 4px;
        font-size: 14px;
        .title {
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-bottom: 1px solid #ddd;
        }
        .textWrap {
            textarea {
                display: block;
                margin: 10px auto 0;
                resize: none;
                outline: none;
            }
        }
    }
    .saveBtn {
        width: 99px;
        height: 33px;
        line-height: 33px;
        margin: 20px auto;
        text-align: center;
        color: #fff;
        background-color: #fd4835;
        border-radius: 5px;
    }
}
</style>
