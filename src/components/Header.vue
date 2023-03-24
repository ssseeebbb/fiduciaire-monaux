<template>
  <div id="header" class="h" style="">
    <div class="h__container">
      <div class="h__content">
        <h1>Fiduciaire Monaux</h1>
        <h2>Experts - comptables &amp; Conseils Fiscaux</h2>
        <router-link class="btn" :to="{name:'home', params:{section:'services'}}">
          Nos services</router-link>
      </div>
      <span class="h__more" @click="scrollTo('intro')">+</span>
    </div>
    
  </div>
</template>

<script setup>
import {scrollTo} from "@/composables/scroll";
</script>



<style lang="scss">
@import "@/style/main";
@import "@/style/mixins";
.h {
  background-image: url("/public/img/header.jpg");
  background-position: center;
  background-size: cover;
  height: 70vh;
  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    height: 100%;
  }

  &__content {
    // padding: 350px 0 250px 0;
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    & h1{
        margin-bottom: 15px;
        color: #fff;
        font-size: 60px;
            line-height: 70px;
            font-weight: 700;

            @include respond(phone){
                font-size: 40px;
                line-height: 45px;
            }
    }

    & h2{
        margin-bottom: 50px;
  color: #fff;
  font-size: 20px;
    line-height: 30px;
    @include respond(phone){
                font-size: 15px;
                line-height: 18px;
                margin-bottom: 30px;
            }

    
  
    }
  }

  &__more {
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 60px;
    height: 60px;
    font-size: 30px;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    background: #3398fd;
    box-shadow: 0px 10px 20px rgba(51, 152, 253, 0.3);
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transform: translateX(-50%) translateY(50%);
    -ms-transform: translateX(-50%) translateY(50%);
    transform: translateX(-50%) translateY(50%);
  }
}
</style>
