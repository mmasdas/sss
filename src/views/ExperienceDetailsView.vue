<template>
  <div>
    <h1>Experiences</h1>

    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div class="well blog">
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
            <div class="image">
              <img
                :src="require(`@/assets/${experience.image}`)"
                :alt="experience.name"
              />
            </div>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div class="blog-details">
              <h2>{{ experience.name }}</h2>
              <p>
                {{ experience.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  props: {
    slug: {
      required: true,
    },
    experienceSlug: {
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find((destination) => destination.slug == this.slug);
    },
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug == this.experienceSlug
      );
    },
  },
  mounted() {
    console.log(this.destination);
    // console.log(this.slug);
    // console.log(this.experienceSlug);
  },
};
</script>
