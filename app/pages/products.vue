<script lang="ts" setup>
      import constants from '~/constants';

      useSeoMeta({
            title: 'products • eaglesoft ghana'.toString().toUpperCase(),
            ogTitle: 'products • eaglesoft ghana'.toString().toUpperCase(),
            description: 'Eaglesoft Ghana is a forward-thinking software development firm committed to developing and delivering specialized software solutions that address the unique challenges of the Ghanaian market.',
            ogDescription: 'Eaglesoft Ghana is a forward-thinking software development firm committed to developing and delivering specialized software solutions that address the unique challenges of the Ghanaian market.',
            twitterCard: 'summary_large_image',
            ogImage: {
                  url: constants.APP_URL + '/apple-touch-icon.png'
            },
            ogUrl: constants.APP_URL + '/products',
            ogType: 'website'
      })
</script>

<template>
      <div class="antialiased text-gray-800 ">
            <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  <section class="mb-16 text-center">
                        <h1 class="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-4">
                              Innovative SaaS Products Built for the Ghanaian Market.
                        </h1>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                              Explore our suite of specialized software applications designed for high performance,
                              localized relevance, and unparalleled user experience across healthcare, education, and
                              digital governance.
                        </p>
                  </section>

                  <section class="space-y-24">

                        <div
                          class="product-card grid md:grid-cols-2 gap-10 p-8 rounded-xl shadow-2xl shadow-indigo-100 border border-indigo-100">

                              <div>
                                    <h3 class="text-3xl font-bold text-indigo-600 mb-2 flex items-center">
                                          <svg class="w-8 h-8 mr-2 text-red-500" fill="currentColor"
                                            viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.72-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm1 3a1 1 0 100 2h4a1 1 0 100-2H8z"
                                                  clip-rule="evenodd"></path>
                                          </svg>
                                          Clinic Plus
                                    </h3>
                                    <p class="text-lg text-gray-500 mb-6">
                                          Comprehensive Health Information Management System (HIMS) for **Clinics and
                                          Healthcare Providers**.
                                    </p>

                                    <h4 class="text-xl font-semibold text-gray-700 mb-3">Key Benefits:</h4>
                                    <ul class="space-y-3 text-gray-600">
                                          <li class="flex items-start">
                                                <svg class="w-5 h-5 mt-1 mr-2 text-green-500 shrink-0" fill="none"
                                                  stroke="currentColor" viewBox="0 0 24 24"
                                                  xmlns="http://www.w3.org/2000/svg">
                                                      <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Streamlines patient registration, appointments, and
                                                      billing.</span>
                                          </li>
                                          <li class="flex items-start">
                                                <svg class="w-5 h-5 mt-1 mr-2 text-green-500 shrink-0" fill="none"
                                                  stroke="currentColor" viewBox="0 0 24 24"
                                                  xmlns="http://www.w3.org/2000/svg">
                                                      <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Secure Electronic Health Records (EHR) and E-Prescribing.</span>
                                          </li>
                                          <li class="flex items-start">
                                                <svg class="w-5 h-5 mt-1 mr-2 text-green-500 shrink-0" fill="none"
                                                  stroke="currentColor" viewBox="0 0 24 24"
                                                  xmlns="http://www.w3.org/2000/svg">
                                                      <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>NHIS and localized insurance claims processing support.</span>
                                          </li>
                                    </ul>
                              </div>

                              <div class=" p-6 rounded-lg self-center border border-gray-200">
                                    <div class="flex flex-col space-y-4">
                                          <a href="#"
                                            class="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150">
                                                Request a Demo for Clinic Plus
                                          </a>
                                          <a href="#"
                                            class="inline-flex justify-center items-center px-6 py-3 border border-indigo-200 text-base font-medium rounded-md text-indigo-600  hover: transition ease-in-out duration-150">
                                                Download Product Brochure
                                          </a>
                                          <p class="text-xs text-gray-500 pt-2 text-center">Target: Healthcare Providers
                                                in Ghana</p>
                                    </div>
                              </div>
                        </div>
                  </section>


                  <ESSection class="mt-20">
                        <div class="p-8 rounded-xl shadow-xl shadow-red-100 mb-12 border-l-4 border-red-500">
                              <h3 class="text-3xl font-bold text-red-700 flex items-center mb-6">
                                    <span class="mr-3 text-4xl">🏥</span> Healthcare & Pharmacy Management
                              </h3>

                              <p class="text-lg  mb-6 max-w-4xl">
                                    Driving efficiency and improving patient care quality across clinics and pharmacies
                                    with
                                    specialized, compliant software.
                              </p>

                              <div class="grid md:grid-cols-2 gap-8">

                                    <div
                                      class="p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-red-400">
                                          <h4 class="text-xl font-semibold  mb-2">Clinic Plus (HIMS)</h4>
                                          <p class="text-sm  mb-3">Target: Clinics & Healthcare Providers
                                                (Premises-Based)</p>
                                          <ul class="list-disc list-inside space-y-1  text-sm">
                                                <li>Patient Registration & EMR (Electronic Medical Records)</li>
                                                <li>Billing and NHIS Claims Processing</li>
                                                <li>Operational Reporting</li>
                                          </ul>
                                    </div>

                                    <div
                                      class="p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-red-400">
                                          <h4 class="text-xl font-semibold  mb-2">Pharma Plus (Inventory & Sales)
                                          </h4>
                                          <p class="text-sm  mb-3">Target: Pharmacies & Dispensaries (Likely
                                                Cloud/Hybrid)</p>
                                          <ul class="list-disc list-inside space-y-1  text-sm">
                                                <li>Accurate Drug Inventory & Expiry Tracking</li>
                                                <li>Point-of-Sale (POS) Transactions</li>
                                                <li>Instant Sales Analytics</li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                        <div class="p-8 rounded-xl shadow-xl shadow-green-100 mb-12 border-l-4 border-green-500">
                              <h3 class="text-3xl font-bold text-green-700 flex items-center mb-6">
                                    <span class="mr-3 text-4xl">🎓</span> Educational Systems
                              </h3>

                              <p class="text-lg  mb-6 max-w-4xl">
                                    Integrated school management systems streamlining administration, academics, and
                                    communication for schools across Ghana.
                              </p>

                              <div class="grid md:grid-cols-3 gap-8">

                                    <div
                                      class="p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-green-400">
                                          <h4 class="text-xl font-semibold  mb-2">My School GH</h4>
                                          <p class="text-sm  mb-3">Target: Ghanaian Basic Schools (All-in-One
                                                SaaS)</p>
                                          <ul class="list-disc list-inside space-y-1  text-sm">
                                                <li>Student Information System (SIS)</li>
                                                <li>Fee Collection & Tracking</li>
                                                <li>Report Card Generation</li>
                                          </ul>
                                    </div>

                                    <div
                                      class="p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-green-400">
                                          <h4 class="text-xl font-semibold  mb-2">My School Portal</h4>
                                          <p class="text-sm  mb-3">Target: Senior High Schools (SHS Module, SaaS)
                                          </p>
                                          <ul class="list-disc list-inside space-y-1  text-sm">
                                                <li>Specialized SHS Admissions Module</li>
                                                <li>WASSCE/Internal Exams Management</li>
                                                <li>Dormitory Management Tools</li>
                                          </ul>
                                    </div>

                                    <div
                                      class="p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-green-400 flex flex-col justify-center">
                                          <h4 class="text-xl font-semibold  mb-2">Integrated Communication</h4>
                                          <p class="text-sm ">Secure parent/teacher portals and instant
                                                notification systems built into both platforms.</p>
                                    </div>
                              </div>
                        </div>
                        <div class=" p-8 rounded-xl shadow-xl shadow-indigo-100 border-l-4 border-indigo-500">
                              <h3 class="text-3xl font-bold text-indigo-700 flex items-center mb-6">
                                    <span class="mr-3 text-4xl">🗳️</span> Digital Election Management
                              </h3>

                              <p class="text-lg  mb-6 max-w-4xl">
                                    Providing secure, transparent, and convenient online voting platforms for private
                                    institutions and associations.
                              </p>

                              <div class="grid md:grid-cols-1">
                                    <div
                                      class="p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-indigo-400">
                                          <h4 class="text-xl font-semibold  mb-2">Vote360 (Online Voting System)
                                          </h4>
                                          <p class="text-sm  mb-3">Target: Unions, Associations, Corporate Bodies
                                                (SaaS)</p>
                                          <ul class="list-disc list-inside space-y-1  text-sm">
                                                <li>Secure Voter Verification and List Management</li>
                                                <li>Tamper-Proof Balloting & Instant Tally</li>
                                                <li>Detailed Audit Trails for Transparency</li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </ESSection>

                  <section class="mt-24 p-8  border-t border-b border-indigo-200">
                        <h2 class="text-3xl font-bold text-indigo-700 mb-6 text-center">
                              Technology & Development Standards
                        </h2>
                        <div class="max-w-6xl mx-auto">
                              <div class="grid md:grid-cols-3 gap-8 text-center">

                                    <div class="p-6  rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                          <h3 class="text-xl font-semibold text-gray-700 mb-3">Modern Stack</h3>
                                          <p class="text-sm text-gray-500">We use **Vue.js Composition API** and
                                                **Nuxt.js (v4.x)** to build fast, reactive, and scalable applications.
                                          </p>
                                    </div>

                                    <div class="p-6  rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                          <h3 class="text-xl font-semibold text-gray-700 mb-3">Intuitive Design</h3>
                                          <p class="text-sm text-gray-500">Styling with **Tailwind CSS (v4)** ensures
                                                responsive, clean, and accessible user interfaces on every device.</p>
                                    </div>

                                    <div class="p-6  rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                          <h3 class="text-xl font-semibold text-gray-700 mb-3">Ghanaian Localization
                                          </h3>
                                          <p class="text-sm text-gray-500">Solutions are built to handle local
                                                compliance, currency (GHS), and payment methods effectively.</p>
                                    </div>

                              </div>
                        </div>
                  </section>
                  <section class="mt-24 text-center">
                        <h2 class="text-4xl font-extrabold text-gray-800 mb-4">
                              Ready to Digitize Your Operations?
                        </h2>
                        <p class="text-xl text-gray-600 mb-8">
                              Get a personalized tour of the software solution that best fits your institution's needs.
                        </p>
                        <div class="flex justify-center space-x-4">
                              <a href="#"
                                class="px-8 py-4 text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 shadow-lg">
                                    Request a Free Demo
                              </a>
                              <a href="#"
                                class="px-8 py-4 text-lg font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 transition duration-150">
                                    Contact Our Sales Team
                              </a>
                        </div>
                  </section>


            </main>
      </div>
</template>

<style scoped></style>