<script setup>
import img from '~/assets/image/web-bg.webp';

</script>

<template>
  <div class="header-overlay" :style="{ backgroundImage: `url(${img})` }">
    <div class="layout-fluid px-0 h-100">
      <Swiper :item-count="3" :show-controls="false" :show-indicators="true" autoplay :interval="8000">
        <template v-slot="{ index, isActive }">
          <div class="home__hero__content text-center" v-show="index === 0">
            <h1 class="font-bold mb-4 text-success">Eaglesoft Ghana</h1>
            <p class="text-lg text-white mb-6">Your one-stop solution for all your software needs.</p>
            <nuxt-link to="/services" role="button" class="button success">Explore Services</nuxt-link>
          </div>
          <div class="home__hero__content text-center" v-show="index === 1">
            <h1 class="font-bold mb-4 text-success">Innovative Solutions</h1>
            <p class="text-lg text-white mb-6">Crafting software that empowers your business.</p>
            <nuxt-link to="/products" role="button" class="button success">Learn More</nuxt-link>
          </div>
          <div class="home__hero__content text-center" v-show="index === 2">
            <h1 class="font-bold mb-4 text-success">Join Us Today</h1>
            <p class="text-lg text-white mb-6">Experience the future of software development with us.</p>
            <nuxt-link to="/contact" role="button" class="button success">Contact Us</nuxt-link>
          </div>
        </template>
      </Swiper>
    </div>
  </div>
</template>

<style>
.header-overlay {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.55);
  background-blend-mode: multiply;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>