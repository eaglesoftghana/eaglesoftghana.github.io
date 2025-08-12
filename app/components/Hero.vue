<script setup>
import img from '~/assets/image/web-bg.webp';

const props = defineProps({
  name: {
    type: String,
    default: 'Eaglesoft GH'
  },
  content: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="hero__wrapper" :style="{ backgroundImage: `url(${img})` }">
    <div class="layout d-flex justify-center items-center h-100"
      style="  backdrop-filter: blur(2px);-webkit-backdrop-filter: blur(2px);">
      <div class="home__hero__content text-center">
        <h1 class="lg:text-2xl text-lg font-bold text-white mb-4">Eaglesoft Ghana - {{ props.name }} </h1>
        <p class="lg:text-lg text-white mb-6">
          {{ props.content ?? 'Explore our vast software nicely crafted just for you.' }}</p>
        <!-- <nuxt-link to="/services" role="button" class="button primary">Explore Services</nuxt-link> -->
      </div>
    </div>
  </div>
</template>

<style>
.hero__wrapper {
  position: relative;
  height: 40vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.55);
  background-blend-mode: multiply;
}

@media screen and (max-width: 768px) {
  .hero__wrapper {
    height: 35vh;
  }
}
</style>