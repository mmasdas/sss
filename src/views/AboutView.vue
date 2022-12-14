<template>
  <div class="about">
    <div class="bg-white">
      <!-- <div class="container">
        <div class="d-flex justify-content-between align-items-center py-4">
          <div>
            <a href="#" class="d-inline-block text-dark">
              <strong>234</strong>
              <span class="text-muted">followers</span>
            </a>
            <a href="#" class="d-inline-block text-dark ml-3">
              <strong>111</strong>
              <span class="text-muted">following</span>
            </a>
          </div>
          <div>
            <a href="#" class="btn btn-success btn-sm"> Follow </a>
            <a href="#" class="btn btn-default icon-btn md-btn-flat btn-sm ml-1">
              <i class="ion ion-md-mail"></i>
            </a>
          </div>
        </div>
      </div> -->
      <hr class="m-0" />

      <div class="container">
        <div class="text-center py-5">
          <img
            :src="user.avatar_url"
            class="ui-w-100 rounded-circle"
            style="height: 80px"
          />

          <div class="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto">
            <h4 class="font-weight-bold my-4">{{ user.login }}</h4>

            <div class="text-muted mb-4">
              {{ $t("user.bio") }}
            </div>
          </div>
        </div>
      </div>
      <hr class="m-0" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    const requestUrl = "https://api.github.com/users/mmasdas";
    axios({
      method: "get",
      url: requestUrl,
    }).then((response) => (this.user = response.data));

    console.log(this.user);
  },
};
</script>
