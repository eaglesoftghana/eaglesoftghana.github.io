<script setup>
import { AlignRightIcon, CheckCheckIcon, ChevronDownIcon, ChevronRight, XIcon } from 'lucide-vue-next';



const showDropdown = ref(false);

const isMobileMenuActive = ref(false);

const showMobileMenuDropdown = ref(false);

const mobileMenuLinkActive = () => {
  return window.location.pathname === '/products' && window.location.hash !== '';
}

const toggleMenu = () => {
  console.log('nav toggler click');

  isMobileMenuActive.value = !isMobileMenuActive.value;
}

const hideMenu = (event) => {
  if (event.target.classList.contains('mobile-menu-link')) {
    isMobileMenuActive.value = false
  }
}

const hash = ref('');

const isHashActive = (hash) => {
  return window.location.hash === hash;
};

const handleScroll = () => {
  if (scrollY > 50) {
    document.querySelector('.app-header').classList.add('scrolling');
  } else {
    document.querySelector('.app-header').classList.remove('scrolling');
  }
}

onMounted(() => {
  watchEffect(() => {
    hash.value = window.location.hash;
  }, { flush: 'sync' })
  document.addEventListener('click', hideMenu);
  document.addEventListener('scroll', handleScroll)
});

onUnmounted(() => {
  document.removeEventListener('click', hideMenu)
  document.removeEventListener('scroll', handleScroll)
})

watch(() => isMobileMenuActive.value, () => {
  document.body.style.overflow = isMobileMenuActive.value ? 'hidden' : '';
});


</script>

<template>
  <div class="app-header fixed top-0 left-0 right-0 z-index-100 shadow-md mb-2">
    <header class="layout py-2 d-flex justify-between items-center" style="max-width: 992px;">
      <nuxt-link to="/" class="logo__brand">
        <img src="/eaglesoft.webp" alt="Logo" class="logo-image" />
        <span class="logo__brand-text d-none md:d-block">eaglesoft Ghana</span>
      </nuxt-link>
      <h1 class="mb-0 flex items-center">
        <span class="text-lg md:d-none">Eaglesoft Ghana</span>
      </h1>
      <nav class="navigation">
        <div class="d-none lg:d-block">
          <ul class="d-flex list-unstyled m-0 p-0">
            <li class="mx-2">
              <nuxt-link class="link-light header-link" exact-active-class="active" active-class="active"
                to="/">Home</nuxt-link>
            </li>
            <li class="mx-2">
              <nuxt-link class="link-light header-link" exact-active-class="active" active-class="active"
                to="/services">Services</nuxt-link>
            </li>
            <li class="mx-2">
              <div class="app-header__dropdown relative" @mouseenter="showDropdown = true"
                @mouseleave="showDropdown = false">
                <nuxt-link class="link-light header-link flex items-center" exact-active-class="active"
                  active-class="active" to="/products">Products
                  <ChevronDownIcon />
                </nuxt-link>
                <Transition name="fade" mode="out-in">
                  <div v-if="showDropdown"
                    class="app-header__dropdown-menu absolute top-100 bg-body p-4 rounded shadow-md border">
                    <div class="flex flex-column">
                      <nuxt-link :class="{ 'menu-active': isHashActive('#student-information-system-gh') }"
                        to="/products#online-church-information-system-ghana" @click="showDropdown = false"
                        class="col-12 py-2 mb-2 flex items-center">
                        <div class="product-icon">
                          <!-- <img src="//images/products/sisgh.png" alt="Student Information System Ghana"
                              class="w-10 h-10 rounded-full"/> -->

                          <CheckCheckIcon />
                        </div>
                        <div class="link-content">
                          <h3 class="text-lg font-bold text-capitalize" title="Student Information System Ghana">OCIS
                            Ghana
                          </h3>
                          <p class="text-sm dark:text-muted">
                            A modern church management system designed to streamline church operations and enhance
                            community engagement.
                          </p>
                        </div>
                      </nuxt-link>
                      <nuxt-link :class="{ 'menu-active': isHashActive('#student-information-system-gh') }"
                        to="/products#student-information-system-ghana" @click="showDropdown = false"
                        class="col-12 py-2 mb-2 flex items-center">
                        <div class="product-icon">
                          <!-- <img src="//images/products/sisgh.png" alt="Student Information System Ghana"
                              class="w-10 h-10 rounded-full"/> -->

                          <CheckCheckIcon />
                        </div>
                        <div class="link-content">
                          <h3 class="text-lg font-bold text-capitalize" title="Student Information System Ghana">SIS
                            Ghana
                          </h3>
                          <p class="text-sm dark:text-muted">
                            A modern, complete student information system management software in Ghana
                          </p>
                        </div>
                      </nuxt-link>
                      <nuxt-link :class="{ 'menu-active': isHashActive('#vote-360-online') }"
                        to="/products#vote-360-online" @click="showDropdown = false"
                        class="col-12 py-2 mb-2 flex items-center">
                        <div class="product-icon">
                          <!-- <img src="//images/products/sisgh.png" alt="Student Information System Ghana"
                              class="w-10 h-10 rounded-full"/> -->

                          <CheckCheckIcon />
                        </div>
                        <div class="link-content">
                          <h3 class="text-lg font-bold text-capitalize">vote
                            360
                            online
                          </h3>
                          <p class="text-sm dark:text-muted">
                            An intuitive online voting system designed to streamline elections, securely and
                            efficiently
                          </p>
                        </div>
                      </nuxt-link>
                      <nuxt-link :class="{ 'menu-active': isHashActive('#clinic-plus') }" to="/products#clinic-plus"
                        @click="showDropdown = false" class="col-12 py-2 mb-2 flex items-center">
                        <div class="product-icon">
                          <!-- <img src="//images/products/sisgh.png" alt="Student Information System Ghana"
                              class="w-10 h-10 rounded-full"/> -->

                          <CheckCheckIcon />
                        </div>
                        <div class="link-content">
                          <h3 class="text-lg font-bold text-capitalize">clinic
                            plus
                          </h3>
                          <p class="text-sm dark:text-muted">
                            Efficient patient management, streamlined operations, and secure, accessible health
                            records
                          </p>
                        </div>
                      </nuxt-link>
                      <nuxt-link active-class=" " exact-active-class=" "
                        :class="{ 'menu-active': isHashActive('#pharma-plus') }" to="/products#pharma-plus"
                        @click="showDropdown = false" class="col-12 py-2 mb-2 flex items-center">
                        <div class="product-icon">
                          <!-- <img src="//images/products/sisgh.png" alt="Student Information System Ghana"
                              class="w-10 h-10 rounded-full"/> -->

                          <CheckCheckIcon />
                        </div>
                        <div class="link-content">
                          <h3 class="text-lg font-bold text-capitalize">pharma
                            plus
                          </h3>
                          <p class="text-sm dark:text-muted">
                            Simplifying drug inventory tracking, streamlining sales operations, and enhancing overall
                            business management
                          </p>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </Transition>
              </div>
            </li>
            <li class="mx-2">
              <nuxt-link class="link-light header-link" exact-active-class="active" active-class="active"
                to="/about">About</nuxt-link>
            </li>
            <li class="mx-2">
              <nuxt-link class="link-light header-link" exact-active-class="active" active-class="active"
                to="/contact">Contact</nuxt-link>
            </li>
          </ul>
        </div>
        <button type="button" class="button no-outline pr-0 lg:d-none text-light" @click="toggleMenu">
          <AlignRightIcon />
        </button>
      </nav>
    </header>
  </div>
  <Transition name="slide-in" mode="out-in">
    <div @click="hideMenu" v-if="isMobileMenuActive"
      class="backdrop fixed right-0 left-0 bottom-0 top-0 z-index-110 h-100 w-100 lg:d-none">
      <div class="mobile-menu h-100 relative p-4 overflow-y-auto">
        <div class="flex justify-between">
          <nuxt-link to="/" class="logo__brand">
            <img src="/eaglesoft.webp" alt="Logo" class="logo-image" />
            <span class="logo__brand-text text-lg">eaglesoft Ghana</span>
          </nuxt-link>
          <!-- <img src="/eaglesoft.webp" alt="" class="logo-image" /> -->
          <button type="button" title="Close Menu | Exit" class="button sm flex items-center bg-gray-800"
            @click="isMobileMenuActive = false">
            <XIcon />
          </button>
        </div>
        <ul class="list-unstyled flex flex-column my-3">
          <li>
            <nuxt-link to="/" class="flex items-center mb-2 mobile-menu-link" exact-active-class="mobile-menu-active"
              active-class="mobile-menu-active">
              <ChevronRight :size="20" />
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services" class="flex items-center mb-2 mobile-menu-link"
              exact-active-class="mobile-menu-active" active-class="mobile-menu-active">
              <ChevronRight :size="20" />
              Services
            </nuxt-link>
          </li>
          <li>
            <div class="flex items-center justify-between">
              <nuxt-link to="/products" class="flex items-center mb-2 mobile-menu-link w-100"
                exact-active-class="mobile-menu-active" active-class="mobile-menu-active">
                <ChevronRight :size="20" />
                Products / Softwares
              </nuxt-link>
              <button class="button py-1 no-outline mb-2"
                @click.prevent="showMobileMenuDropdown = !showMobileMenuDropdown">
                <ChevronDownIcon v-if="showMobileMenuDropdown || mobileMenuLinkActive()" />
                <ChevronRight v-else />
              </button>
            </div>
            <Transition name="fade" mode="out-in">
              <div class="relative px-4 rounded mb-2 bg-transparent"
                v-if="showMobileMenuDropdown || mobileMenuLinkActive()">
                <div class="flex flex-column">
                  <nuxt-link :class="{ 'mobile-menu-active': isHashActive('#student-information-system-gh') }"
                    to="/products#student-information-system-gh" class="col-12 mb-2 flex items-center mobile-menu-link">
                    <div class="pr-4">
                      <!-- <img src="//images/products/sisgh.png" alt="Student Information System Ghana"
                              class="w-10 h-10 rounded-full"/> -->
                      <CheckCheckIcon />
                    </div>
                    <div class="link-content" style="pointer-events: none;">
                      <h3 class="text-base font-normal text-capitalize" title="Student Information System Ghana">SIS
                        Ghana
                      </h3>
                      <p class="text-sm dark:text-muted">
                        A modern, complete student information system management software in Ghana
                      </p>
                    </div>
                  </nuxt-link>
                  <nuxt-link :class="{ 'mobile-menu-active': isHashActive('#vote-360-online') }"
                    to="/products#vote-360-online"
                    class="col-12 mb-2 flex items-center mobile-menu-link border-top border-gray-700 pt-2">
                    <div class="pr-4">
                      <!-- <img src="//images/products/sisgh.png" alt="Student Information System Ghana"
                              class="w-10 h-10 rounded-full"/> -->
                      <CheckCheckIcon />
                    </div>
                    <div class="link-content" style="pointer-events: none;">
                      <h3 class="text-base font-normal text-capitalize">vote
                        360
                        online
                      </h3>
                      <p class="text-sm dark:text-muted">
                        An intuitive online voting system designed to streamline elections, securely and efficiently
                      </p>
                    </div>
                  </nuxt-link>
                  <nuxt-link :class="{ 'mobile-menu-active': isHashActive('#clinic-plus') }" to="/products#clinic-plus"
                    class="col-12 mb-2 flex items-center mobile-menu-link border-top border-gray-700 pt-2">
                    <div class="pr-4">
                      <!-- <img src="//images/products/sisgh.png" alt="Student Information System Ghana"
                              class="w-10 h-10 rounded-full"/> -->
                      <CheckCheckIcon />
                    </div>
                    <div class="link-content" style="pointer-events: none;">
                      <h3 class="text-base font-normal text-capitalize">clinic
                        plus
                      </h3>
                      <p class="text-sm dark:text-muted">
                        Efficient patient management, streamlined operations, and secure, accessible health records
                      </p>
                    </div>
                  </nuxt-link>
                  <nuxt-link active-class=" " exact-active-class=" "
                    :class="{ 'mobile-menu-active': isHashActive('#pharma-plus') }" to="/products#pharma-plus"
                    class="col-12 mb-2 flex items-center mobile-menu-link border-top border-gray-700 pt-2">
                    <div class="pr-4">
                      <!-- <img src="//images/products/sisgh.png" alt="Student Information System Ghana"
                              class="w-10 h-10 rounded-full"/> -->
                      <CheckCheckIcon />
                    </div>
                    <div class="link-content" style="pointer-events: none;">
                      <h3 class="text-base font-normal text-capitalize">pharma
                        plus
                      </h3>
                      <p class="text-sm dark:text-muted">
                        Simplifying drug inventory tracking, streamlining sales operations, and enhancing overall
                        business management
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </Transition>
          </li>
          <li>
            <nuxt-link to="/about" class="flex items-center mb-2 mobile-menu-link"
              exact-active-class="mobile-menu-active" active-class="mobile-menu-active">
              <ChevronRight :size="20" />
              About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" class="flex items-center mb-2 mobile-menu-link"
              exact-active-class="mobile-menu-active" active-class="mobile-menu-active">
              <ChevronRight :size="20" />
              Contact
            </nuxt-link>
          </li>
        </ul>
        <div class="text-center top-100 sticky">
          <p class="text-sm dark:text-muted">&copy; {{ new Date().getFullYear() }} Eaglesoft Ghana. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.navigation a.header-link:hover {
  opacity: 0.75;
}

.mobile-menu {
  width: 100%;
  max-width: 425px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background-color: rgba(33, 37, 41, 0.25);

  & * {
    color: var(--color-light) !important;
  }

  color: var(--color-light) !important;
}

.mobile-menu ul li {
  padding: var(--spacing-1) 0;
}

.mobile-menu-link {
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-success);
  }
}

.backdrop {
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  display: flex;
  justify-content: end;
}

a.mobile-menu-active {
  color: var(--color-success) !important;
  font-size: var(--font-size-base);

  /* font-weight: bold; */
  & * {

    color: var(--color-success) !important;
  }
}

a.active {
  color: var(--color-success) !important;
  font-weight: bold;
}

.app-header {
  transition: all .3s ease-in-out;
  color: var(--color-light);
}

.app-header.scrolling {
  transition: all .3s ease-in-out;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.65);
}

.app-header__dropdown-menu a:hover,
.app-header__dropdown-menu a:focus {
  outline: 1px solid var(--color-gray-800) !important;
  border-radius: var(--spacing-2);
}

.app-header__dropdown-menu a.menu-active {
  border-radius: var(--spacing-2) !important;

  & * {

    color: var(--color-success) !important;
  }
}

.logo__brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo__brand .logo__brand-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-success);
  text-transform: capitalize;
  white-space: nowrap;
}

.logo-image {
  width: 30px;
  height: 30px;
  border-radius: 5%;
}


.app-header__dropdown-menu {
  width: max-content;
  /* min-width: 275px; */
  max-width: 350px !important;
  border-color: var(--color-gray-800) !important;
  right: 0%;
  left: -100%;

  @media (prefers-color-scheme: light) {
    border-color: var(--color-gray-400) !important;
  }
}

.app-header__dropdown-menu .product-icon {
  width: 70px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-header__dropdown-menu .link-content p {
  width: 100%;
  max-width: 350px;
}

html:is(.theme-light) .app-header__dropdown-menu {
  border-color: var(--color-gray-400) !important;
}


.rotate-180 {
  transform: rotate(180deg);
  transition: all 0.3s ease;
}

.rotate-90 {
  transform: rotate(90deg);
  transition: all 0.3s ease;
}
</style>