<template>
  <div class="row card-deck">
    <div class="card col-3" v-for="destination in destinations" :key="destination.name">
      <router-link
        :to="{
          name: 'details',
          params: {
            slug: destination.slug,
          },
        }"
      >
        <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name" />
      </router-link>
      <div class="card-body">
        <h5 class="card-title">
          <router-link
            :to="{
              name: 'details',
              params: {
                slug: destination.slug,
              },
            }"
          >
            <h4>{{ destination.name }}</h4>
          </router-link>
        </h5>
        <!-- <p class="card-text">
            This card has supporting text below as a natural lead-in to additional
            content.
          </p> -->
      </div>
      <!-- <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";
export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style lang="css">
img {
  max-width: 100%;
}
</style>
