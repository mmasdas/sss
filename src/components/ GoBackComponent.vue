<template>
  <div>
    <span class="go-back">
      <button @click="goback">go back</button>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      return this.$router.go(-1);
    },
  },
};
</script>
