<template>
  <div class="font-sans flex items-center justify-center bg-blue-darker h-screen w-full py-8">
    <div class="overflow-hidden bg-white rounded max-w-xs w-full shadow-lg  leading-normal">

      <router-link
        to='/tailwind-components'
        class="block group hover_bg-blue p-4 border-b">
        <p class="font-bold text-lg mb-1 text-black group-hover_text-white">Tailwind Components</p>
        <p class="text-grey-darker mb-2 group-hover_text-white"> Copy of the Tailwind Documenation components</p>
      </router-link>

      <router-link
        class="block group hover_bg-blue p-4"
        to="/wp-pusher">
        <p class="font-bold text-lg mb-1 text-black group-hover_text-white">WP Pusher Example</p>
        <p class="text-grey-darker mb-2 group-hover_text-white"> Copy the WP Pusher pricing page</p>
      </router-link>

    </div>
  </div>
</template>
