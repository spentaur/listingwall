<template>
  <div>
    <div>
      <button
        v-click-outside="onClickOutside"
        class="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:shadow-outline"
        aria-label="User menu"
        aria-haspopup="true"
        @click="toggle()"
      >
        <img
          class="w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>
    </div>
    <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
    <transition name="profile-dropdown">
      <div
        v-show="open"
        class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
      >
        <div
          class="py-1 bg-white rounded-md shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
            role="menuitem"
            >Your Profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
            role="menuitem"
            >Settings</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
            role="menuitem"
            >Sign out</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import vClickOutside from 'v-click-outside'

export default Vue.extend({
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    close() {
      this.open = false
    },
    onClickOutside() {
      this.open = false
    }
  }
})
</script>

<style scoped>
.profile-dropdown-enter-active {
  @apply transition;
  @apply ease-out;
  @apply duration-100;
}
.profile-dropdown-enter {
  @apply transform;
  @apply opacity-0;
  @apply scale-95;
}
.profile-dropdown-enter-to {
  @apply transform;
  @apply opacity-100;
  @apply scale-100;
}

.profile-dropdown-leave-active {
  @apply transition;
  @apply ease-in;
  @apply duration-75;
}
.profile-dropdown-leave {
  @apply transform;
  @apply opacity-100;
  @apply scale-100;
}
.profile-dropdown-leave-to {
  @apply transform;
  @apply opacity-0;
  @apply scale-95;
}
</style>
