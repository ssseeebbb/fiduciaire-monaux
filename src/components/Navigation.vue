<template>
   <div id="nav" class="navbar " :class="isMobileOpen ? 'nav_is_open' : ''">
    <div class="navbar__logo">
      <router-link :to="{name:'home'}"
        ><img src="/files/logo.png" alt="" class="img_full"
      /></router-link>
    </div>
    <div class="navbar__nav">
      <nav class="nav">
        <ul class="nav__list">
          <li v-for="n of nav" class="nav__item">
            <router-link :to="{name:'home',params:{section:n.target}}"
              class="nav__link js_mobile_nav"
              @click="isMobileOpen = false"
              >{{n.label}}</router-link
            >
          </li>
          <li class="nav__item">
            <a
              href="https://fiduciairemonaux.mydigitalaccountant.be/auth"
              class="btn nav__link nav__link--btn"
              target="_blank"
              >Espace client</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <p class="navbar__burger js_mobile_nav">
      <button @click="isMobileOpen = !isMobileOpen"><span></span></button>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue"

const isMobileOpen = ref(false);
const nav = [
    {
        label:"Accueil",
        target:"header"
    },
    {
        label:"À propos",
        target:"intro"
    },
    {
        label:"Services",
        target:"services"
    },
    {
        label:"Contact",
        target:"contact"
    },
]

</script>

<style lang="scss">

@import "@/style/mixins.scss";

.navbar{
    &__burger{
        display: none;
        @include respond(tab-port){
                display: block;
                position: absolute;
                top: 30px;
                right: 0;
            }

        & button{
            @include buttonNoStyle;
            position: absolute;
            top: 50%;
            right: 0;
            display: block;
            width: 70px;
            height: 40px;
            transform: translateY(-50%);



            & span{
                display: block;
                position: absolute;
                top: 50%;
                right: 20px;
                width: 25px;
                height: 2px;
                background-color: #fff;

                &::before,
                &::after{
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 25px;
                    height: 2px;
                    background-color: #fff;
                    -webkit-transform: translateY(-6px);
                    -ms-transform: translateY(-6px);
                    transform: translateY(-6px);
                    -webkit-transition: all 0.3s;
                    transition: all 0.3s;
                }

                &::after{
                    -webkit-transform: translateY(6px);
                -ms-transform: translateY(6px);
                transform: translateY(6px);
                }
            }
        }
    }
}

</style>