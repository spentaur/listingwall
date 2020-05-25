<template>
  <div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-64 pt-3 pb-4 bg-gray-50">
      <div class="flex items-center flex-shrink-0 px-4">
        <div class="w-auto h-8 text-2xl font-medium text-gray-400 logo-font">
          ListingWall
        </div>
      </div>
      <div class="flex flex-col flex-1 h-0 mt-10 overflow-y-auto">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <nav class="flex-1 px-2 bg-gray-50">
          <a
            href="#"
            class="flex items-center px-2 py-3 text-lg font-bold leading-5 text-gray-800 transition duration-150 ease-in-out group hover:text-gray-900 focus:outline-none"
          >
            <svg
              class="w-8 h-8 mr-3 text-orange-400 transition duration-150 ease-in-out group-hover:text-orange-500 group-focus:text-orange-600"
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
            Home
          </a>
          <a
            href="#"
            class="flex items-center px-2 py-3 mt-1 text-lg font-medium leading-5 text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 hover:font-bold focus:outline-none"
          >
            <svg
              class="w-8 h-8 mr-3 text-green-400 transition duration-150 ease-in-out group-hover:text-green-600 group-focus:text-green-600"
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
            For Sale
          </a>
          <a
            href="#"
            class="flex items-center px-2 py-3 mt-1 text-lg font-medium leading-5 text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 hover:font-bold focus:outline-none"
          >
            <svg
              class="w-8 h-8 mr-3 text-blue-400 transition duration-150 ease-in-out group-hover:text-blue-600 group-focus:text-blue-600"
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
            Motors
          </a>
          <a
            href="#"
            class="flex items-center px-2 py-3 mt-1 text-lg font-medium leading-5 text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 hover:font-bold focus:outline-none"
          >
            <svg
              class="w-8 h-8 mr-3 text-purple-400 transition duration-150 ease-in-out group-hover:text-purple-600 group-focus:text-purple-600"
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
            Housing
          </a>
          <a
            href="#"
            class="flex items-center px-2 py-3 mt-1 text-lg font-medium leading-5 text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 hover:font-bold focus:outline-none"
          >
            <svg
              class="w-8 h-8 mr-3 text-red-400 transition duration-150 ease-in-out group-hover:text-red-600 group-focus:text-red-600"
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
            Real Estate
          </a>
          <a
            href="#"
            class="flex items-center px-2 py-3 mt-1 text-lg font-medium leading-5 text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 hover:font-bold focus:outline-none"
          >
            <svg
              class="w-8 h-8 mr-3 text-yellow-400 transition duration-150 ease-in-out group-hover:text-yellow-600 group-focus:text-yellow-600"
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
            Jobs
          </a>
          <a
            href="#"
            class="flex items-center px-2 py-3 mt-1 text-lg font-medium leading-5 text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 hover:font-bold focus:outline-none"
          >
            <svg
              class="w-8 h-8 mr-3 text-teal-400 transition duration-150 ease-in-out group-hover:text-teal-600 group-focus:text-teal-600"
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
            Animals
          </a>
          <a
            href="#"
            class="flex items-center px-2 py-3 mt-1 text-lg font-medium leading-5 text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 hover:font-bold focus:outline-none"
          >
            <svg
              class="w-8 h-8 mr-3 text-pink-400 transition duration-150 ease-in-out group-hover:text-pink-600 group-focus:text-pink-600"
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
            Events
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
