<template>
  <!-- Off-canvas menu for mobile -->
  <transition name="all-slider">
    <div v-show="mobileOpen" class="md:hidden">
      <div class="fixed inset-0 z-40 flex">
        <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <transition name="menu-overlay">
          <div v-show="mobileOpen" class="fixed inset-0" @click="close">
            <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
        </transition>
        <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
        <transition name="menu">
          <div
            v-show="mobileOpen"
            class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white"
          >
            <div class="absolute top-0 right-0 p-1 -mr-14">
              <button
                v-show="mobileOpen"
                class="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
                aria-label="Close sidebar"
                @click="close"
              >
                <svg
                  class="w-6 h-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex items-center flex-shrink-0 px-4">
              <div class="w-auto h-8 font-mono text-2xl font-bold">
                ListingWall
              </div>
            </div>
            <div class="flex-1 h-0 mt-5 overflow-y-auto">
              <nav class="px-2">
                <a
                  href="#"
                  class="flex items-center px-2 py-2 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out bg-gray-100 rounded-md group focus:outline-none focus:bg-gray-200"
                >
                  <svg
                    class="w-6 h-6 mr-4 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                    />
                  </svg>
                  Dashboard
                </a>
                <a
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                >
                  <svg
                    class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Team
                </a>
                <a
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                >
                  <svg
                    class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  Projects
                </a>
                <a
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                >
                  <svg
                    class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Calendar
                </a>
                <a
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                >
                  <svg
                    class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  Documents
                </a>
                <a
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                >
                  <svg
                    class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Reports
                </a>
              </nav>
            </div>
          </div>
        </transition>
        <div class="flex-shrink-0 w-14">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    mobileOpen: Boolean
  },
  methods: {
    close() {
      this.$emit('update:mobileOpen', false)
    }
  }
})
</script>

<style scoped>
.menu-overlay-enter-active,
.menu-overlay-leave-active {
  @apply transition-opacity;
  @apply ease-linear;
  @apply duration-300;
}

.menu-overlay-enter {
  @apply opacity-0;
}
.menu-overlay-enter-to {
  @apply opacity-100;
}

.menu-overlay-leave {
  @apply opacity-100;
}
.menu-overlay-leave-to {
  @apply opacity-0;
}

.menu-enter-active,
.menu-leave-active {
  @apply transition;
  @apply ease-in-out;
  @apply duration-300;
  @apply transform;
}

.menu-enter {
  @apply -translate-x-full;
}
.menu-enter-to {
  @apply translate-x-0;
}

.menu-leave {
  @apply translate-x-0;
}
.menu-leave-to {
  @apply -translate-x-full;
}

.all-slider-leave-active {
  @apply transition;
  @apply ease-in-out;
  @apply duration-300;
}
</style>
