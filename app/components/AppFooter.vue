<script setup>
import { faFacebookF, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { MailIcon, PhoneCall, SendHorizonal } from 'lucide-vue-next';

const isGetInTouchButtonDisabled = ref(true)

const getIntouchInput = ref("")

const handleGetIntouchInput = (e) => {
  isGetInTouchButtonDisabled.value = true
  const value = e.target.value
  if (value.length && getIntouchInput.value) {
    isGetInTouchButtonDisabled.value = false
  }
}

const handleGetIntouchForm = () => {

}

</script>

<template>
  <footer class="bg-primary text-gray-300 py-4 sticky top-100">
    <div class="layout" style="max-width: 992px;">
      <div class="row">
        <div class="col-12 lg:col-4 md:col-6 gy-3 lg:gy-0 order-2">
          <h6 class="text-capitalize font-bold mb-1 text-white">explore</h6>
          <div class="flex flex-column">
            <nuxt-link to="/products" class="mb-2 d-inline-block text-light">
              Online Church Information System Ghana
            </nuxt-link>
            <nuxt-link to="/products" class="mb-2 d-inline-block text-light">
              School Information System Ghana
            </nuxt-link>
            <nuxt-link to="/products" class="mb-2 d-inline-block text-light">
              Vote 360 online
            </nuxt-link>
            <nuxt-link to="/products" class="mb-2 d-inline-block text-light">
              Clinic Plus
            </nuxt-link>
            <nuxt-link to="/products" class="mb-2 d-inline-block text-light">
              Pharma Plus
            </nuxt-link>
          </div>
        </div>
        <div class="col-12 lg:col-4 md:col-6 gy-3 lg:gy-0 order-1 text-white">
          <h6 class="text-capitalize font-bold mb-1">info</h6>
          <p>
            Eaglesoft Ghana is a Ghana-based software firm crafting scalable web and mobile solutions for communities
            and businesses. We builds tools that matter — empowering local communities through accessible tech.
          </p>
        </div>
        <div class="col-12 lg:col-4 md:col-6 gy-3 lg:gy-0 order-3">
          <h6 class="text-capitalize font-bold mb-1 text-white">
            get in touch
          </h6>
          <div class="flex flex-column">
            <div class="flex items-center mb-2">
              <div class="mr-2">
                <PhoneCall />
              </div>
              <div class="text-light">
                <p class="select-all">
                  +233 50 441 1952
                </p>
              </div>
            </div>
            <div class="flex items-center mb-2">
              <div class="mr-2">
                <PhoneCall />
              </div>
              <div class="text-light">
                <p class="select-all">
                  +233 54 309 3942
                </p>
              </div>
            </div>
            <div class="flex items-center mb-2">
              <div class="mr-2">
                <MailIcon />
              </div>
              <div class="text-light">
                <nuxt-link class="select-all text-light">
                  eaglesoft.gh@gmail.com
                </nuxt-link>
              </div>
            </div>
            <div class="flex items-center my-2 w-100" style="max-width: 425px;">
              <form @submit.prevent="handleGetIntouchForm" class="flex items-center w-100 input-wrapper rounded-2">
                <input required v-model="getIntouchInput" @input="handleGetIntouchInput"
                  class="text-input border-0 outline-0 w-100" inputmode="email" type="email"
                  placeholder="Enter your email address" style="flex-grow: 1;outline-color: var(--color-muted);" />
                <button type="submit"
                  class="button outline  sm py-3 px-3 flex items-center relative mr-1 light rounded-full"
                  style="right: 45px;">
                  <SendHorizonal style="flex-shrink: 0;" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center md:text-left">
        <h4 class="text-sm text-uppercase text-light mb-1">
          follow
        </h4>
        <div class="flex align-center social-links justify-center md:justify-start">
          <NuxtLink to="//facebook.com/eaglesoftghana" external target="_blank">
            <FontAwesomeIcon :icon="faFacebookF" title="Facebook" />
          </NuxtLink>
          <NuxtLink to="//api.whatsapp.com/send/?phone=%2B233543093942&text&type=phone_number&app_absent=0" external
            target="_blank" title="WhatsApp">
            <FontAwesomeIcon :icon="faWhatsapp" size="lg" />
          </NuxtLink>
          <NuxtLink to="//x.com/quajoking_0" external target="_blank" title="X (twitter)">
            <FontAwesomeIcon :icon="faXTwitter" />
          </NuxtLink>
          <NuxtLink to="//youtube.com/@quajoking" external target="_blank" title="Youtube">
            <FontAwesomeIcon :icon="faYoutube" />
          </NuxtLink>
        </div>
      </div>
      <div class="my-3 flex flex-wrap justify-center lg:justify-between items-center text-white">
        <p class="text-xs">
          &copy; {{ new Date().getFullYear() }} Eaglesoft Ghana. All rights reserved.
        </p>
        <p class="text-xs  text-white">
          <nuxt-link to="/" class="hover:text-link">Privacy Policy</nuxt-link> |
          <nuxt-link to="/" class="hover:text-link">Terms of Service</nuxt-link>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a.hover\:text-link:hover {
  color: var(--color-info-alt);
}

.social-links a {
  margin-right: var(--spacing-3);
  margin-left: var(--spacing-0);
  border-radius: 15%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  text-decoration: none;
  background-color: var(--color-light) !important;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
}

.social-links a:nth-child(1) {
  background-color: inherit;
  color: rgb(0, 66, 207);
}

.social-links a:nth-child(2) {
  background-color: inherit;
  color: rgb(0, 194, 97);

}

.social-links a:nth-child(3) {
  background-color: inherit;
  color: black;

}

.social-links a:nth-child(4) {
  background-color: inherit;
  color: rgb(255, 23, 23);

}
</style>