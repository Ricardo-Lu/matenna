<template>
    <div class="page2">
        <page>
            <template v-slot:content>
                <div class="test">
                    <h3>{{q2.id}}/6</h3>
                    <div class="quest">
                        <p>{{q2.topic}}</p>
                        <ul>
                            <li v-for="item in q2.ans" :key="item.key"><span>{{item.key}}</span> <div class="answer">{{item.text}}</div></li>
                        </ul>
                    </div>
                    <div class="submit">
                        <span @click="submit">确 认</span>
                    </div>
                </div>
            </template>
        </page>
    </div>
</template>

<script>
import Page from "@/components/Page";
import questions from "@/tools/questions";
export default {
    name: "page2",
    components:{
        Page
    },
    data(){
        return {
            q2:questions[1]
        }
    },
    methods:{
        submit(){
            this.$router.push("/page3")
        }
    }
}
</script>

<style scoped lang="less">
    .page2{
        width: 100%;
        height: 100%;
    }
    .test{
        width: 94%;
        margin-left: 3%;
        font-size: 20px;
        font-weight: bold;
        h3{
            margin-top: 5%;
        }
        .quest{
            width: 96%;
            margin-left: 2%;
            p{
                color: #c21948;
                margin: 8% 0;
            }
            ul{
                padding: 0 1%;
            }
            li{
                color: #c21948;
                margin-bottom: 4%;
                font-size: 16px;
                display: flex;
                span{
                    text-align: center;
                    display: inline-block;
                    width: 10%;
                    height: 10%;
                    padding: 1% 3%;
                    border-radius: 50%;
                    background-color: #c21948;
                    color: white;
                }
                .answer{
                    margin-left: 3%;
                }
            }
        }
        .submit{
            margin-top: 4%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #c21948;
            span{
                text-align: center;
                display: block;
                width: 40%;
                height: 50%;
                padding: 3%;
                background: url("~@/assets/images/btn2.png") no-repeat center/ 100% 100%;
            }
        }
    }
</style>