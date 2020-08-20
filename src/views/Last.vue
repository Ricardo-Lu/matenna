<template>
    <div class="last">
        <page>
            <template v-slot:content>
                <div class="finaly">
                    <div class="grade">
                        <h2>您真棒！</h2>
                        <p>请前往惠氏展台工作人员处，凭此页面换取奖品。（数量有限，送完为止）</p>
                    </div>
                    <div class="pswd">
                        <p>工作人员</p>
                        <div>
                            <span>密码输入</span>
                            <input type="text">
                        </div>
                    </div>
                </div>
            </template>
        </page>
    </div>
</template>

<script>
import Page from "@/components/Page"
export default {
    name:"last",
    components:{
        Page
    }
}
</script>

<style scoped lang="less">
.last{
    width: 100%;
    height: 100%;
}
.finaly{
    width: 100%;
    height: 100%;
    position: relative;
}
.grade{
    width: 100%;
    position: absolute;
    left: 0;
    top: 23%;
    color: #c31948;
    h2{
        font-size: 52px;
        text-align: center;
        margin-bottom: 5%;
    }
    p{
        width: 90%;
        margin-left: 5%;
        font-size: 20px;
        text-indent: 1em;
    }
}
.pswd{
    position: absolute;
    left: 10%;
    bottom: 10%;
    color: #c31948;
    font-size: 22px;
}
</style>