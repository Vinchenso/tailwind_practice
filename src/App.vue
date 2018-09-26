<template>
  <div>
    <router-view v-hotkey='keymap'></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateHome() {
      this.$router.push('/') 
    }
  },
  computed: {
    keymap() {
      return {
        'ctrl+j': this.navigateHome 
      } 
    }
  }
}
</script>

