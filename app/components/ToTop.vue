<script setup>
import { ChevronUp } from 'lucide-vue-next';



const showToTop = ref(false);

const handleScroll = () => {
  if (window.scrollY > 405) {
    showToTop.value = true
  }
  else {
    showToTop.value = false
  }
}

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>

<template>
  <Transition name="dropdown-fade" mode="out-in">
    <div v-if="showToTop" @click="handleClick"
      class="fixed to-top bg-primary-dark shadow-lg px-2 py-1 rounded text-white cursor-pointer z-index-40" title="To Top">
      <ChevronUp/>
    </div>
  </Transition>
</template>

<style>
.to-top {
  right: 45px;
  bottom: 45px;
  user-select: none;
}

@media (max-width: 769px) {
  .to-top {
    right: 5%;
  }
}
</style>