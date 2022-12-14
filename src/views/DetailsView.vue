<template>
  <div class="container bootstrap snippets bootdey">
    <Goback />
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="well blog">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
              <div class="image">
                <img
                  :src="require(`@/assets/${destination.image}`)"
                  :alt="destination.name"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="blog-details">
                <h2>{{ destination.name }}</h2>
                <p>
                  {{ destination.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <section>
      <h2>Too experiences in {{ destination.name }}</h2>
      <div class="row card-deck">
        <div
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card col-3"
        >
          <router-link
            :to="{
              name: 'experienceDetails',
              params: { experienceSlug: experience.slug },
            }"
          >
            <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name" />
            <span>{{ experience.name }}</span>
          </router-link>
        </div>
      </div>
      <hr />
      <router-view :key="$route.path"></router-view>
    </section>
  </div>
</template>

<script>
import store from "@/store.js";
import Goback from "@/components/ GoBackComponent.vue";
export default {
  computed: {},
  components: {
    Goback,
  },
  data() {
    return {
      //   destinationId: this.$route.params.id,
      //   destination: {},
    };
  },
  props: {
    slug: {
      type: String,
      require: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find((destination) => destination.slug == this.slug);
    },
  },
  methods: {},
  created() {
    // this.destination = store.destinations.find(
    //   (destination) => destination.id == this.destinationId
    // );
    // console.log(this.destination);
  },
  mounted() {
    // console.log(this.destinationId);
    // console.log(this.destination);
  },
};
</script>

<style lang="css">
img {
  max-width: 100%;
}
</style>
