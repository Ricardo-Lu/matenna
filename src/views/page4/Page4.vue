<template>
    <div class="page4">
        <page>
            <template v-slot:content>
                <div class="test">
                    <h3>{{q4.id}}/6</h3>
                    <div class="quest">
                        <p>{{q4.topic}}</p>
                        <ul>
                            <li v-for="item in q4.ans" :key="item.key"><span>{{item.key}}</span> <div class="answer">{{item.text}}</div></li>
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
    name: "page4",
    components:{
        Page
    },
    data(){
        return {
            q4:questions[3]
        }
    },
    methods:{
        submit(){
            this.$router.push("/page5")
        }
    }
}
</script>

<style scoped lang="less">
    .page4{
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
                padding: 0 2%;
            }
            li{
                color: #c21948;
                margin-bottom: 5%;
                display: flex;
                span{
                    text-align: center;
                    display: inline-block;
                    width: 10%;
                    height: 10%;
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
            margin-top: 10%;
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