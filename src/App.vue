<template>
  <div id="app">
    <TheNavComponent />

    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>
<script>
import TheNavComponent from "@/components/TheNavComponent.vue";
export default {
  components: {
    TheNavComponent,
  },

  created() {
    const local = navigator.language.substring(0, 2);
    const myCat = localStorage.getItem("myCat");
    console.log(myCat);
    if (myCat) {
      this.$i18n.locale = myCat;
    } else if (local) {
      this.$i18n.locale = locale;
    }
  },
};
</script>
<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.7s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
