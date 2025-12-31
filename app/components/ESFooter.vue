<script lang="ts" setup>

      const year = ref(new Date);

      const { theme } = useTheme();

      const fillColor = computed(() => theme.value === 'dark' ? 'white' : '#006837')

</script>

<template>
      <div class="@container bg-body relative w-full py-6">
            <footer
              class="px-6 md:px-8 lg:px-10 xl:px-12 mx-auto max-w-7xl space-y-4 md:space-y-8 xl:space-y-12 z-1">
                  <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
                        <div
                          class="sm:col-span-2 md:col-span-4 lg:col-span-2 flex flex-col items-start gap-4 mb-6 md:mb-0">
                              <!-- <img class="w-auto h-15" src="~/assets/image/logo.svg" alt="IMAGE" /> -->
                              <div class="flex flex-row items-center gap-2">
                                    <Logo
                                      class="h-12 w-auto p-2 rounded-md backdrop-blur-xs border border-slate-500/20 dark:bg-slate-400/10"
                                      :fill-color="fillColor" />
                                    <span class="capitalize text-nowrap">
                                          eaglesoft ghana
                                    </span>
                              </div>
                              <p>
                                    We are committed to developing and delivering specialized software solutions that
                                    address the
                                    unique challenges of the Ghanaian market.
                              </p>
                              <div class="flex items-center gap-4">
                                    <NuxtLink :external="true" target="_blank" title="Facebook"
                                      class="rounded-sm p-0.5 bg-slate-800/85 dark:bg-slate-600"
                                      href="//facebook.com/eaglesoftghana">
                                          <IconsFacebookIcon class="text-zinc-100" />
                                    </NuxtLink>
                                    <NuxtLink :external="true" target="_blank" title="WhatsApp"
                                      class="rounded-sm p-0.5 bg-slate-800/85 dark:bg-slate-600"
                                      href="//wa.me/233543093942">
                                          <IconsWhatsAppIcon class="text-zinc-100" />
                                    </NuxtLink>
                                    <NuxtLink :external="true" target="_blank" title="X"
                                      class="rounded-sm p-0.5 bg-slate-800/85 dark:bg-slate-600"
                                      href="//x.com/eaglesoftghana">
                                          <IconsXTwitterIcon class="text-zinc-100" />
                                    </NuxtLink>
                                    <NuxtLink :external="true" target="_blank" title="YouTube"
                                      class="rounded-sm p-0.5 bg-slate-800/85 dark:bg-slate-600"
                                      href="//youtube.com/@eaglesoftghana">
                                          <IconsYouTubeIcon class="text-zinc-100" />
                                    </NuxtLink>
                              </div>
                        </div>
                        <div class="pb-6 sm:pb-0">
                              <h3 class="font-semibold capitalize dark:text-zinc-300 pb-4 sm:pb-0">
                                    our flagship products
                              </h3>
                              <ul role="list" class="space-y-4 mt-3 sm:mt-5.5 capitalize">
                                    <li>
                                          <NuxtLink external class="dark:hover:text-white hover:text-slate-600" title="Eagle School Manager"
                                            target="_blank" href="//eschoolghana.com">
                                                school management system
                                          </NuxtLink>
                                    </li>
                                    <li>
                                          <NuxtLink external class="dark:hover:text-white hover:text-slate-600" title="Vote 360 Online"
                                            target="_blank" href="//vote360online.com">
                                                secure online voting platform
                                          </NuxtLink>
                                    </li>
                                    <li>
                                          <NuxtLink external class="dark:hover:text-white hover:text-slate-600"
                                            :to="{ name: 'products', hash: '#cms' }">
                                                clinic management system
                                          </NuxtLink>
                                    </li>
                                    <li>
                                          <NuxtLink external class="dark:hover:text-white hover:text-slate-600" title="Eagle Church Suite"
                                            target="_blank" href="//echurchsuite.com">
                                                church ERP system
                                          </NuxtLink>
                                    </li>
                              </ul>
                        </div>
                        <div class="mb-4 sm:mb-0">
                              <h3 class="font-semibold capitalize dark:text-zinc-300">
                                    eaglesoft
                              </h3>
                              <ul role="list" class="space-y-4 mt-3 sm:mt-5.5 capitalize">
                                    <li>
                                          <NuxtLink class="dark:hover:text-white" :to="{ name: 'about' }">
                                                about
                                          </NuxtLink>
                                    </li>
                                    <li>
                                          <NuxtLink class="dark:hover:text-white" :to="{ name: 'contact' }">
                                                contact
                                          </NuxtLink>
                                    </li>
                                    <li>
                                          <NuxtLink class="dark:hover:text-white" :to="{ name: 'products' }">
                                                products
                                          </NuxtLink>
                                    </li>
                                    <li>
                                          <NuxtLink class="dark:hover:text-white" :to="{ name: 'services' }">
                                                services
                                          </NuxtLink>
                                    </li>
                              </ul>
                        </div>
                        <div class="mb-4 sm:mb-0">
                              <h3 class="font-semibold capitalize dark:text-zinc-300">
                                    legal
                              </h3>
                              <ul role="list" class="space-y-4 mt-3 sm:mt-5.5 capitalize">
                                    <li>
                                          <NuxtLink class="dark:hover:text-white" href="#">
                                                terms of service
                                          </NuxtLink>
                                    </li>
                                    <li>
                                          <NuxtLink class="dark:hover:text-white" href="#">
                                                privacy policy
                                          </NuxtLink>
                                    </li>
                              </ul>
                        </div>
                        <div class="mb-4 sm:mb-0">
                              <h3 class="font-semibold capitalize dark:text-zinc-300">
                                    contact
                              </h3>
                              <ul role="list" class="space-y-4 mt-3 sm:mt-5.5">
                                    <li>
                                          <NuxtLink class="dark:hover:text-white select-all cursor-text"
                                            href="tel:+233549289243">
                                                +233 54 928 9243
                                          </NuxtLink>
                                    </li>
                                    <li>
                                          <NuxtLink class="dark:hover:text-white select-all cursor-text"
                                            href="tel:+233543093942">
                                                +233 54 309 3942
                                          </NuxtLink>
                                    </li>
                                    <li>
                                          <NuxtLink class="dark:hover:text-white select-all cursor-text"
                                            href="tel:+233504411952">
                                                +233 50 441 1952
                                          </NuxtLink>
                                    </li>
                                    <li>
                                          <NuxtLink class="dark:hover:text-white text-wrap wrap-break-word" href="mailto:info@eaglesoftghana.com">
                                                info@eaglesoftghana.com
                                          </NuxtLink>
                                    </li>
                              </ul>
                        </div>
                  </div>
                  <div class="py-5 text-sm md:text-base gap-4 flex justify-center md:flex-nowrap sm:justify-between flex-wrap items-center border-t border-slate-400/75 dark:border-slate-700/75">
                        <p>
                              &COPY; {{ year.getFullYear() }}
                              Eaglesoft Ghana. All rights reserved.
                        </p>
                        <p>
                              <NuxtTime :datetime="Date.now()" year="numeric" month="long" day="numeric" hour="2-digit" minute="2-digit"/>
                        </p>
                  </div>
            </footer>
      </div>
</template>

<style scoped></style>