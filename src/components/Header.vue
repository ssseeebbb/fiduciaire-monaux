<template>
  <div class="h" style="">
    <div class="h__container">
      <div class="h__content">
        <h1>Fiduciaire Monaux</h1>
        <h2>Experts - comptables &amp; Conseils Fiscaux</h2>
        <a
          href="https://www.fiduciaire-monaux.com/fr#"
          class="btn js_scroll_to"
          data-scrollto=".services__intro"
          >Nos services</a
        >
      </div>
      <span class="h__more js_scroll_to" data-scrollto=".intro">+</span>
    </div>
    
  </div>
</template>

<script setup></script>

<style lang="scss">
@import "@/style/main";
.h {
  background-image: url("/public/img/header.jpg");
  background-position: center;
  background-size: cover;
  height: 70vh;
  &__container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    height: 100%;
  }

  &__content {
    padding: 350px 0 250px 0;
    height: 100%;
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
    }

    & h2{
        margin-bottom: 50px;
  color: #fff;
  font-size: 20px;
    line-height: 30px
  
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
