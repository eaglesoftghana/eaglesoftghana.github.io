<script setup>
useHead({
  title: 'Products . eaglesoft ghana'.toUpperCase(),
  meta: [
    { name: 'description', content: 'Explore our products at Eaglesoft Ghana.' },
    { name: 'keywords', content: 'Eaglesoft, products, software, Ghana' }
  ]
})
</script>

<template>
  <div>
    <hero name="software products" />
    <div class="layout">
      <div class="what__we__do">
        <h5 class="text-center lg:text-2xl font-bold mb-4 text-capitalize">
          our software products
        </h5>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="service-card" id="online-church-information-system-ghana">
            <h6 class="text-lg font-semibold text-capitalize">
              online church information system (OCIS Ghana)
            </h6>
            <p>
              A comprehensive church management system designed to streamline church operations and enhance community
              engagement.
            </p>
          </div>
          <div class="service-card" id="school-information-system-ghana">
            <h6 class="text-lg font-semibold text-capitalize">school information system (SIS Ghana)</h6>
            <p>
              A robust school management system that simplifies administrative tasks and improves communication between
              schools, students, and parents.
            </p>
          </div>
          <div class="service-card" id="vote-360-online">
            <h6 class="text-lg font-semibold text-capitalize">vote 360 online</h6>
            <p>
              An innovative online voting platform that ensures secure and transparent elections for organizations and
              communities.
            </p>
          </div>
          <div class="service-card" id="clinic-plus">
            <h6 class="text-lg font-semibold text-capitalize">clinic plus</h6>
            <p>
              A comprehensive clinic/health care management system that enhances patient care and streamlines clinic
              operations.
            </p>
          </div>
          <div class="service-card" id="pharma-plus">
            <h6 class="text-lg font-semibold text-capitalize">pharma plus</h6>
            <p>
              A pharmacy management system that optimizes inventory management, prescription processing, and customer
              service.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>