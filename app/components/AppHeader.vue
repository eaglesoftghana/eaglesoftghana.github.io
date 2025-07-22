<script setup>
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { faBarsStaggered, faChevronDown, faChevronLeft, faChevronRight, faX } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const showDropdown = ref(false);

const isMobileMenuActive = ref(false);

const showMobileMenuDropdown = ref(false);

const mobileMenuLinkActive = () => {
  return window.location.pathname === '/products' && window.location.hash !== '';
}

const showMenu = () => {
  isMobileMenuActive.value = !isMobileMenuActive.value;
}

const hideMenu = (event) => {
  if (!event.target.closest('.mobile-menu') || event.target.closest('a.mobile-menu-link')) {
    isMobileMenuActive.value = !isMobileMenuActive.value
  }
}
const handleClickOutside = (event) => {
  if (!event.target.closest('.app-header__dropdown')) {
    showDropdown.value = false;
  }
};
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
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('scroll', handleScroll)
});

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})

watch(() => isMobileMenuActive.value, () => {
  document.body.style.overflow = isMobileMenuActive.value ? 'hidden' : '';
});
watchEffect(() => {
  hash.value = window.location.hash;
})
</script>

<template>
  <div class="app-header fixed top-0 left-0 right-0 z-index-100 shadow-md mb-2">
    <header class="layout py-2 d-flex justify-between items-center">
      <nuxt-link to="/" class="logo__brand">
        <img src="/icon-logo.png" alt="Logo" class="logo-image" />
        <span class="logo__brand-text d-none md:d-block">eaglesoft Ghana</span>
      </nuxt-link>
      <h1 class="mb-0 flex items-center">
        <span class="text-lg md:d-none">Eaglesoft Ghana</span>
      </h1>
      <nav class="navigation">
        <div class="d-none lg:d-block">
          <ul class="d-flex list-unstyled m-0 p-0">
            <li class="mx-2">
              <nuxt-link class="link-light" exact-active-class="active" active-class="active" to="/">Home</nuxt-link>
            </li>
            <li class="mx-2">
              <nuxt-link class="link-light" exact-active-class="active" active-class="active"
                to="/services">Services</nuxt-link>
            </li>
            <li class="mx-2">
              <div class="app-header__dropdown relative" @mouseenter="showDropdown = true"
                @mouseleave="showDropdown = false">
                <nuxt-link class="link-light" exact-active-class="active" active-class="active" to="/products">Products
                  <FontAwesomeIcon :icon="faChevronDown" :class="{ 'rotate-180': showDropdown }" />
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
                          <FontAwesomeIcon :icon="faCheck" size="2xl" />
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
                          <FontAwesomeIcon :icon="faCheck" size="2xl" />
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
                          <FontAwesomeIcon :icon="faCheck" size="2xl" />
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
                          <FontAwesomeIcon :icon="faCheck" size="2xl" />
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
                          <FontAwesomeIcon :icon="faCheck" size="2xl" />
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
              <nuxt-link class="link-light" exact-active-class="active" active-class="active"
                to="/about">About</nuxt-link>
            </li>
            <li class="mx-2">
              <nuxt-link class="link-light" exact-active-class="active" active-class="active"
                to="/contact">Contact</nuxt-link>
            </li>
          </ul>
        </div>
        <button type="button" class="button no-outline pr-0 lg:d-none text-light" @click="showMenu">
          <FontAwesomeIcon :icon="faBarsStaggered" size="lg" />
        </button>
      </nav>
    </header>
  </div>
  <Transition name="slide-in" mode="out-in">
    <div @click="hideMenu" v-if="isMobileMenuActive"
      class="backdrop fixed right-0 left-0 bottom-0 top-0 z-index-110 vh-100 w-100 lg:d-none">
      <div class="mobile-menu bg-bod h-100 relative p-4 overflow-y-auto">
        <div class="flex justify-between">
          <img src="/icon-logo.png" alt="" class="logo-image" />
          <button type="button" title="Close Menu | Exit" class="button px-3 py-1 bg-gray-900"
            @click="isMobileMenuActive = false">
            <FontAwesomeIcon :icon="faX" class="text-success" size="lg" />
          </button>
        </div>
        <ul class="list-unstyled flex flex-column my-3">
          <li>
            <nuxt-link to="/" class="flex items-center mb-2 mobile-menu-link" exact-active-class="mobile-menu-active"
              active-class="mobile-menu-active">
              <FontAwesomeIcon :icon="faCircleDot" fixed-width class="mr-2" size="xs" />
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services" class="flex items-center mb-2 mobile-menu-link"
              exact-active-class="mobile-menu-active" active-class="mobile-menu-active">
              <FontAwesomeIcon :icon="faCircleDot" fixed-width class="mr-2" size="xs" />
              Services
            </nuxt-link>
          </li>
          <li>
            <div class="flex items-center justify-between">
              <nuxt-link to="/products" class="flex items-center mb-2 mobile-menu-link w-100"
                exact-active-class="mobile-menu-active" active-class="mobile-menu-active">
                <FontAwesomeIcon :icon="faCircleDot" fixed-width class="mr-2" size="xs" />
                Products / Softwares
              </nuxt-link>
              <button class="button py-1 no-outline mb-2 bg-gray-900"
                @click="showMobileMenuDropdown = !showMobileMenuDropdown">
                <FontAwesomeIcon :icon="faChevronRight"
                  :class="{ 'rotate-90': showMobileMenuDropdown || mobileMenuLinkActive() }" />
              </button>
            </div>
            <Transition name="fade" mode="out-in">
              <div class="relative px-4 rounded mb-2 bg-transparent"
                v-if="showMobileMenuDropdown || mobileMenuLinkActive()">
                <div class="flex flex-column">
                  <nuxt-link :class="{ 'mobile-menu-active': isHashActive('#student-information-system-gh') }"
                    to="/products#student-information-system-gh" @click="showDropdown = false"
                    class="col-12 mb-2 flex items-center mobile-menu-link">
                    <div class="pr-4">
                      <!-- <img src="//images/products/sisgh.png" alt="Student Information System Ghana"
                              class="w-10 h-10 rounded-full"/> -->
                      <FontAwesomeIcon :icon="faCheck" size="2xl" />
                    </div>
                    <div class="link-content">
                      <h3 class="text-base font-normal text-capitalize" title="Student Information System Ghana">SIS
                        Ghana
                      </h3>
                      <p class="text-sm dark:text-muted">
                        A modern, complete student information system management software in Ghana
                      </p>
                    </div>
                  </nuxt-link>
                  <nuxt-link :class="{ 'mobile-menu-active': isHashActive('#vote-360-online') }"
                    to="/products#vote-360-online" @click="showDropdown = false"
                    class="col-12 mb-2 flex items-center mobile-menu-link border-top border-gray-900 pt-2">
                    <div class="pr-4">
                      <!-- <img src="//images/products/sisgh.png" alt="Student Information System Ghana"
                              class="w-10 h-10 rounded-full"/> -->
                      <FontAwesomeIcon :icon="faCheck" size="2xl" />
                    </div>
                    <div class="link-content">
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
                    @click="showDropdown = false"
                    class="col-12 mb-2 flex items-center mobile-menu-link border-top border-gray-900 pt-2">
                    <div class="pr-4">
                      <!-- <img src="//images/products/sisgh.png" alt="Student Information System Ghana"
                              class="w-10 h-10 rounded-full"/> -->
                      <FontAwesomeIcon :icon="faCheck" size="2xl" />
                    </div>
                    <div class="link-content">
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
                    @click="showDropdown = false"
                    class="col-12 mb-2 flex items-center mobile-menu-link border-top border-gray-900 pt-2">
                    <div class="pr-4">
                      <!-- <img src="//images/products/sisgh.png" alt="Student Information System Ghana"
                              class="w-10 h-10 rounded-full"/> -->
                      <FontAwesomeIcon :icon="faCheck" size="2xl" />
                    </div>
                    <div class="link-content">
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
              <FontAwesomeIcon :icon="faCircleDot" fixed-width class="mr-2" size="xs" />
              About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" class="flex items-center mb-2 mobile-menu-link"
              exact-active-class="mobile-menu-active" active-class="mobile-menu-active">
              <FontAwesomeIcon :icon="faCircleDot" fixed-width class="mr-2" size="xs" />
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
.mobile-menu {
  width: 100%;
  max-width: 375px;
  -webkit-backdrop-filter: blur(225px);
  backdrop-filter: blur(225px);
  background-color: rgba(33, 37, 41, 0.55);

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
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
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
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
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