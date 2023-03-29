<template>
  <!-- Footer -->
  <footer id="footer" class="footer">
    <p class="footer__logo">
      <router-link :to="{ name: 'home' }"
        ><img src="/files/logo.png" alt="" class="img_full"
      /></router-link>
    </p>
    <ul class="footer__list">
      <li class="footer__item">© 2023</li>
      <li class="footer__item">
        <router-link :to="{ name: 'cookies' }">
          Politique de cookies
        </router-link>
      </li>
      <li class="footer__item">
        <router-link :to="{ name: 'privacy' }"
          >Politique de confidentialité</router-link
        >
      </li>
      <li class="footer__item">
        <router-link :to="{ name: 'terms' }">Conditions générales</router-link>
      </li>
        <!-- Powered by
        <a href="https://arpeggio.pub/" target="_blank" class="footer__arpeggio"
          >Arpeggio</a
        >
      </li> -->
      <li class="footer__item">
        <a
          href="https://www.gdprfolder.eu/fr-be/conformite-rgpd/fiduciaire-monaux-srl"
          target="_blank"
          class="footer__gdpr"
          ><img src="/files/gdpr.png" alt="" class="img_full"
        /></a>
      </li>
    </ul>
  </footer>
</template>

<script setup></script>

<style lang="scss">
.footer {
  position: relative;
  height: 90px;
  color: #fff;
  background: #091c2e;
}
@media all and (max-width: 1100px) {
  .footer {
    height: auto;
    padding: 20px;
  }
}
.footer__logo {
  position: absolute;
  width: 60px;
  top: 50%;
  left: 30px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
@media all and (max-width: 1100px) {
  .footer__logo {
    position: relative;
    top: auto;
    left: auto;
    margin: 0 auto;
    margin-bottom: 20px;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}
.footer__list {
  position: absolute;
  top: 50%;
  right: 30px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
@media all and (max-width: 1100px) {
  .footer__list {
    position: relative;
    top: auto;
    right: auto;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}
.footer__item {
  display: inline-block;
  padding: 0 15px;
  vertical-align: middle;
}
@media all and (max-width: 1100px) {
  .footer__item {
    display: block;
    padding: 5px 15px;
    text-align: center;
  }
}
.footer__item iframe {
  width: 60px;
  height: 90px;
  background: red;
}
.footer__arpeggio {
  color: #3398fd;
}
.footer__gdpr {
  display: inline-block;
  width: 55px;
}
</style>
