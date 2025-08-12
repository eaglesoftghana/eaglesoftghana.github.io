<script setup>
useHead({
  title: 'services . eaglesoft ghana'.toUpperCase(),
  meta: [
    { name: 'description', content: 'Explore our services at Eaglesoft Ghana.' },
    { name: 'keywords', content: 'Eaglesoft, services, software, Ghana' }
  ]
})
</script>

<template>
  <div>
    <hero name="services" />
    <div class="layout" style="max-width: 992px;">
      <div class="services">
        <h5 class="text-center text-2xl font-bold mb-4 text-capitalize">
          our services & expertise
        </h5>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="service-card">
            <h6 class="text-lg font-semibold">Service 1</h6>
            <p>Brief description of service 1.</p>
          </div>
          <div class="service-card">
            <h6 class="text-lg font-semibold">Service 2</h6>
            <p>Brief description of service 2.</p>
          </div>
          <div class="service-card">
            <h6 class="text-lg font-semibold">Service 3</h6>
            <p>Brief description of service 3.</p>
          </div>
          <div class="service-card">
            <h6 class="text-lg font-semibold">Service 4</h6>
            <p>Brief description of service 4.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>