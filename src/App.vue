<template>
  <AppLayout></AppLayout>
</template>

<script>
import { onMounted } from 'vue';
import AppLayout from './layout/AppLayout.vue';

export default({
  name: "App",
  components: { AppLayout },
  setup() {
    
    onMounted(() => {
      let htmlElement = document.documentElement;
      let theme = localStorage.getItem("theme");
      if(theme === "dark") {
        htmlElement.setAttribute("theme", "dark");
      }
      else{
        htmlElement.setAttribute("theme", "light");
      }
    })
  }
});
</script>

<style lang="scss">
  // @import "./";
</style>