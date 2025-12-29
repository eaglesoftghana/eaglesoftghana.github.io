<script lang="ts" setup>
      useSeoMeta({
            title: 'about • eaglesoft ghana'.toString().toUpperCase(),
            ogTitle: 'about • eaglesoft ghana'.toString().toUpperCase(),
            description: 'Eaglesoft Ghana is a forward-thinking software development firm committed to developing and delivering specialized software solutions that address the unique challenges of the Ghanaian market.',
            ogDescription: 'Eaglesoft Ghana is a forward-thinking software development firm committed to developing and delivering specialized software solutions that address the unique challenges of the Ghanaian market.',
            ogImage: '/logo.svg',
            twitterCard: 'summary_large_image',
      });

      import { LightbulbIcon } from 'lucide-vue-next';
</script>

<template>
      <ESSection>
            <div class="mx-auto max-w-2xl py-8 sm:py-16 lg:py-32 overflow-hidden">

                  <div v-fade-in class="text-center mb-16 pt-10">
                        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight">
                              The Eaglesoft Ghana Story
                        </h1>
                        <p class="mt-4 text-xl max-w-3xl mx-auto">
                              Innovating the future of digital services for Ghana and beyond.
                        </p>
                  </div>
            </div>

            <div class="grid md:grid-cols-2 gap-12 items-center">
                  <div v-fade-in>
                        <span class="text-sm font-semibold uppercase text-indigo-500 tracking-wider">Our
                              Foundation</span>
                        <h2 class="mt-2 text-3xl font-bold">
                              Driven by Local Impact
                        </h2>
                        <p class="mt-4  leading-relaxed">
                              Founded in the heart of Ghana, Eaglesoft Ghana was born from a deep commitment to
                              solve pressing local challenges through world-class technology. We believe that
                              tailored, powerful software can be the catalyst for transformative growth in sectors
                              like healthcare, education, and governance.
                        </p>
                        <p class="mt-4  leading-relaxed">
                              We are more than just a tech firm; we are architects of digital solutions, focused
                              on creating reliable, secure, and intuitive platforms that serve the unique needs of
                              the Ghanaian market.
                        </p>
                  </div>
                  <div v-fade-in
                    class="rounded-xl overflow-hidden shadow-md backdrop-blur-2xl my-8 md:my-16 border-y bg-slate-400/40 border-slate-500/40 dark:border-slate-500/20 dark:bg-slate-500/10">

                        <img src="~/assets/image/code-mockup.png" alt="code-mockup" loading="lazy"
                          class="aspect-vido object-scale-down" />
                        <div aria-hidden="true"
                          class="blur-[14rem] dark:blur-3xl transform-gpu -z-10 right-0 -top-2 sm:-top-24 absolute opacity-25">
                              <div
                                style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
                                class="dark:to-indigo-500 dark:from-cyan-400 from-purple-600 to-blue-300 bg-linear-to-tr w-351 aspect-1404/767">
                              </div>
                        </div>
                  </div>
            </div>
      </ESSection>

      <ESSection>
            <div v-fade-in class="py-4 md:py-8">
                  <h6 class="text-center capitalize text-2xl font-semibold dark:text-white">
                        Mission & Core Values
                  </h6>
            </div>
            <div class="grid md:grid-cols-3 gap-8 text-center">
                  <GridList :icon="LightbulbIcon" header-text="our mission"
                    text="To deliver cutting-edge, reliable, and user-centric SaaS solutions that optimize operations and drive efficiency for institutions across Ghana" />
                  <div
                    class="backdrop-filter backdrop-blur-sm bg-slate-500/30 border dark:border-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <div class="text-4xl text-green-600 mb-4">
                              <span class="inline-block transform rotate-45">💡</span>
                        </div>
                        <h3 class="text-xl font-semibold">Our Mission</h3>
                        <p class="mt-2">
                              To deliver cutting-edge, reliable, and user-centric SaaS solutions that optimize
                              operations and drive efficiency for institutions across Ghana.
                        </p>
                  </div>
                  <div
                    class="backdrop-filter backdrop-blur-sm bg-slate-500/30 border dark:border-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <div class="text-4xl text-green-600 mb-4">
                              <span class="inline-block">🌍</span>
                        </div>
                        <h3 class="text-xl font-semibold">Our Vision</h3>
                        <p class="mt-2">
                              To be the leading technology partner in Ghana, recognized for innovation,
                              integrity, and for successfully digitalizing critical national sectors.
                        </p>
                  </div>
                  <div
                    class="backdrop-filter backdrop-blur-sm bg-slate-500/30 border dark:border-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <div class="text-4xl text-green-600 mb-4">
                              <span class="inline-block">🛡️</span>
                        </div>
                        <h3 class="text-xl font-semibold">Core Values</h3>
                        <p class="mt-2">
                              Integrity, Excellence, Local Relevance, and a relentless focus on customer
                              success.
                        </p>
                  </div>
            </div>
      </ESSection>

      <TeamMembers />
      <!-- <div class=" mx-auto mt-16 py-8 sm:py-12">
            <ESSection class="relative backdrop-blur-sm bg-slate-80/50">
                  <div class="text-center mb-10">
                        <span class="text-sm font-semibold uppercase text-yellow-500 tracking-wider">
                              Our
                              Expertise</span>
                        <h2 class="mt-2 text-3xl font-bold">
                              Transforming Sectors with Software
                        </h2>
                  </div>
                  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div class="p-6 rounded-xl shadow-md border-t-4 border-red-500">
                              <h4 class="text-xl font-semibold text-red-700">Clinic Plus</h4>
                              <p class="mt-2 text-sm">
                                    Health Information Management System (HIMS) for clinics, focusing on
                                    efficiency, patient records, and compliance.
                              </p>
                        </div>
                        <div class="p-6 rounded-xl shadow-md border-t-4 border-blue-500">
                              <h4 class="text-xl font-semibold text-blue-700">My School GH</h4>
                              <p class="mt-2 text-sm">
                                    Comprehensive School Management System for basic schools, simplifying
                                    administration, payments, and reporting.
                              </p>
                        </div>
                        <div class="p-6 rounded-xl shadow-md border-t-4 border-purple-500">
                              <h4 class="text-xl font-semibold text-purple-700">Vote360</h4>
                              <p class="mt-2 text-sm">
                                    A secure, reliable, and user-friendly online voting system for organizational
                                    and institutional elections.
                              </p>
                        </div>
                        <div class="p-6 rounded-xl shadow-md border-t-4 border-orange-500">
                              <h4 class="text-xl font-semibold text-orange-700">Pharma Plus</h4>
                              <p class="mt-2 text-sm">
                                    Lightweight inventory and sales management system tailored for the needs of
                                    local pharmacies.
                              </p>
                        </div>
                  </div>
            </ESSection>
      </div> -->

      <ESSection>
            <div
              class="w-full mx-auto mt-20 text-center p-8 rounded-xl backdrop-blur-xs border border-slate-500/20 dark:bg-slate-400/10 bg-slate-300/40">
                  <h2 v-fade-in class="text-2xl md:text-3xl font-bold dark:text-white">
                        Ready to Digitalize Your Institution?
                  </h2>
                  <p v-fade-in class="mt-4">
                        Choosing Eaglesoft Ghana means partnering with a team that understands the local landscape
                        and delivers software built for impact. We are committed to your success.
                  </p>
                  <NuxtLink v-fade-in exact-active-class=" " active-class=" " :to="{ name: 'contact' }"
                    class="mt-6 inline-block sm:w-max w-full bg-global text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-global/90 transition duration-300 transform hover:scale-105">
                        Get Started Today
                  </NuxtLink>
            </div>
      </ESSection>
</template>
<style scoped></style>