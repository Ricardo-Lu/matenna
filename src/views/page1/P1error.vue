<template>
    <div class="right">
        <page>
            <template v-slot:content>
                <div class="result">
                    <div class="top">
                        <img src="@/assets/images/error.png" alt="">
                    </div>
                    <div class="center">
                        <h1>回答错误</h1>
                        <p>正确选项：</p>
                        <h3>C、33%</h3>
                    </div>
                    <div class="bottom">
                        <img src="@/assets/images/next.png" alt="" @click="next">
                    </div>
                </div>
            </template>
        </page>
    </div>
</template>

<script>
import Page from "@/components/Page"
export default {
    name:"p1error",
    components:{
        Page
    },
    methods:{
        next(){
            this.$router.push("/page2")
        }
    }
}
</script>

<style scoped lang="less">
.right{
    width: 100%;
    height: 100%;
}
.result{
    width: 100%;
    height: 100%;
    position: relative;
}
.top{
    position: absolute;
    left: 0;
    top: 18%;
    img{
        width: 40%;
        margin-left: 30%;
    }
}
.center{
    width: 100%;
    position: absolute;
    left: 0;
    top: 46%;
    text-align: center;
    color: #c21948;
    font-weight: bold;
    h1{
        font-size: 45px;
    }
    p{
        font-size: 22px;
        margin: 1% 0;
    }
    h3{
        font-size: 30px;
    }
}
.bottom{
    position: absolute;
    left: 0;
    bottom: 12%;
    img{
        width: 70%;
        margin-left: 15%;
    }
}
</style>