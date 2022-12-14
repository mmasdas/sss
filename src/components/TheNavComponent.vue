<template>
  <div class="destinations">
    <!-- <ul> -->
    <nav>
      <!-- <div> -->
      <router-link
        v-for="destination in destinations"
        :key="destination.name"
        :to="{
          name: 'details',
          params: {
            slug: destination.slug,
          },
        }"
      >
        {{ destination.name }}
        |
      </router-link>

      <!-- </div> -->

      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      |
      <!-- <router-link to="/user">Dashboard</router-link> | -->
      <a href="javascript:void(0)" @click="setLocale('en')">en</a> |
      <a href="javascript:void(0)" @click="setLocale('jp')">jp</a> |
      <a href="javascript:void(0)" @click="setLocale('zh')">zh</a>
    </nav>
    <!-- </ul> -->
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("myCat", locale);
    },
  },
};
</script>

<style lang="css">
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
