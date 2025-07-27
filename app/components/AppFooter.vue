<script setup>
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
  <footer class="bg-success text-gray-300 py-4 sticky top-100">
    <div class="layout">
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
                <FontAwesomeIcon :icon="faPhone" />
              </div>
              <div class="text-light">
                <p class="select-all">
                  +233 50 441 1952
                </p>
              </div>
            </div>
            <div class="flex items-center mb-2">
              <div class="mr-2">
                <FontAwesomeIcon :icon="faPhone" />
              </div>
              <div class="text-light">
                <p class="select-all">
                  +233 54 309 3942
                </p>
              </div>
            </div>
            <div class="flex items-center mb-2">
              <div class="mr-2">
                <FontAwesomeIcon :icon="faEnvelope" />
              </div>
              <div class="text-light">
                <nuxt-link class="select-all text-light">
                  eaglesoft.gh@gmail.com
                </nuxt-link>
              </div>
            </div>
            <div class="flex items-center my-2" style="max-width: 375px;">
              <form class="flex items-center w-100 input-wrapper rounded-2">
                <button type="submit" :disabled="isGetInTouchButtonDisabled"
                  class="button outline border-white px-2 py-2 absolute mr-1 dark rounded-full">
                  <FontAwesomeIcon :icon="faPaperPlane" style="flex-shrink: 0;" size="lg" />
                </button>
                <input v-model="getIntouchInput" @input="handleGetIntouchInput" class="text-input border-0 outline-0"
                  type="email" placeholder="Enter your email address"
                  style="flex-grow: 1;outline-color: var(--color-muted);" />
              </form>
            </div>
          </div>
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
.input-wrapper input.text-input {
  padding-left: 2.8rem !important;
}

a.hover\:text-link:hover {
  color: var(--color-info-alt);
}
</style>