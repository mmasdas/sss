<template>
  <div>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Login Form -->
        <div>
          <input type="text" id="login" v-model="username" placeholder="login" />
          <br />
          <input type="text" id="password" v-model="password" placeholder="password" />
          <br />
          <button @click="login">login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  methods: {
    login() {
      if (this.username) {
        store.user = this.username;
        const redirect = this.$route.query.redirect || "/";
        this.$router.push(redirect);
      }
    },
  },
  data() {
    return {
      username: null,
      password: null,
    };
  },
};
</script>

<style lang="css">
/* BASIC */

a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}
</style>
