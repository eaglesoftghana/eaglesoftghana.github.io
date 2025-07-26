<script setup>
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
  <footer class="bg-success text-gray-300 py-4 sticky top-100">
    <div class="layout">
      <div class="row">
        <div class="col-12 lg:col-4 md:col-6 gy-3 lg:gy-0">
          <h6 class="text-capitalize font-bold mb-1 text-white">what's new</h6>
          <div class="flex flex-column">
            <nuxt-link to="/products" class="mb-2 text-light">
              OCIS Ghana
            </nuxt-link>
            <nuxt-link to="/products" class="mb-2 text-light">
              SIS Ghana
            </nuxt-link>
            <nuxt-link to="/products" class="mb-2 text-light">
              Vote 360 online
            </nuxt-link>
            <nuxt-link to="/products" class="mb-2 text-light">
              clinic plus
            </nuxt-link>
            <nuxt-link to="/products" class="mb-2 text-light">
              pharma plus
            </nuxt-link>
          </div>
        </div>
        <div class="col-12 lg:col-4 md:col-6 gy-3 lg:gy-0">
          <h6 class="text-capitalize font-bold mb-1 text-white">info</h6>
        </div>
        <div class="col-12 lg:col-4 md:col-6 gy-3 lg:gy-0">
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
            <div class="flex items-center my-2" style="max-width: 90%;">
              <div class="text-input-control">
                <input type="email" name="email" placeholder="Enter email" id="email" class="text-input light" style="outline-color: var(--color-muted);" />
              </div>
              <div class="ml-2">
                <button type="submit" class="button light text-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-3 flex flex-wrap justify-center lg:justify-between items-center">
        <p class="text-xs">
          &copy; {{ new Date().getFullYear() }} Eaglesoft Ghana. All rights reserved.
        </p>
        <p class="text-xs">
          <nuxt-link to="/" class="text-gray-400 hover:text-white">Privacy Policy</nuxt-link> |
          <nuxt-link to="/" class="text-gray-400 hover:text-white">Terms of Service</nuxt-link>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>