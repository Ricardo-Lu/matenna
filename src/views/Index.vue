<template>
  <div class="index">
      <div class="logo">
              <img src="@/assets/images/logo.png" alt="">
      </div>
      <main>
          <div class="top">
              <div class="title">
                  <img src="../assets/images/t1.png" alt="">
              </div>
              <div class="time">
                  <img src="../assets/images/t2.png" alt="">
              </div>
          </div>
          <div class="center">
                  <img src="@/assets/images/p.png" alt="">
          </div>
          <div class="btn" @click="btnClick">
              <img src="@/assets/images/btn1.png" alt="">
          </div>
      </main>
      <footer>
          <div class="txt">
              <img src="../assets/images/t3.png" alt="">
          </div>
      </footer>
  </div>
</template>

<script>
export default {
    name:"index",
    data(){
        return{

        }
    },
    methods:{
        btnClick(){
            this.$router.push("/page1")
        }
    }
}
</script>

<style scoped lang="less">
    .index{
        width: 100%;
        height: 100%;
        background: url("../assets/images/bg.jpg") no-repeat center/ 100% 100%;
    }
    .logo{
        height: 12%;
        border: 1px solid white;
        img{
            width: 20%;
            margin: 3% 0 0 3%;
        }
    }
    main{
        width: 90%;
        height: 76%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 5%;
        .top{
            padding-top: 3%;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .title{
                width: 100%;
            }
            .time{
                width: 80%;
            }
        }
        .center{
            width: 100%;
        }
        .btn{
            width: 60%;
        }
    }
    footer{
        height: 12%;
        position: relative;
        .txt{
            width: 25%;
            position: absolute;
            top: 65%;
            right: 5%;
        }
    }
    
</style>