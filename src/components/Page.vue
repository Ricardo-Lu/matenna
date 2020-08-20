<template>
    <div class="page">
        <div class="logo">
            <img src="@/assets/images/logo.png" alt="">
        </div>
        <div class="main">
            <slot name="content"></slot>
        </div>
        <div class="product">
                <img src="@/assets/images/product.png" alt="">
        </div>
        <div class="info">
            <img src="@/assets/images/t3.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:"page"
}
</script>

<style scoped lang="less">
    .page{
        width: 100%;
        height: 100%;
        background: url("../assets/images/bg.jpg") no-repeat center/ 100% 100%;
        position: relative;
    }
    .logo{
        height: 12%;
        border: 1px solid white;
        img{
            width: 20%;
            margin: 3% 0 0 3%;
        }
    }
    .main{
        width: 90%;
        height: 76%;
        background-color: rgba(255, 243, 247, .6);
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .product{
        position: absolute;
        left: 0;
        bottom: 4%;
        right: 0;
        img{
            width: 86%;
            margin-left: 7%;
        }
    }
    .info{
        width: 20%;
        position: absolute;
        bottom: 2%;
        right: 3%;
    }
</style>