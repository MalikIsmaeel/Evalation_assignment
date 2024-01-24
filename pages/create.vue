<template>
  <section class="py-3 py-md-2">
    <div class="container">
      <div class="row">
        <span>
          <h3 class="fs-5 mb-2 text-secondary text-uppercase">New post</h3>
        </span>
      </div>
    </div>

    <div class="container">
      <div class="row gy-4 gy-md-5 gy-lg-0 align-items-md-center">
        <div class="col-12 col-lg-6">
          <div class="border overflow-hidden">
            <form @submit.prevent="saveposts" method="post">
              <div class="row gy-4 gy-xl-5 p-4 p-xl-5">
                <div class="col-12">
                  <label for="fullname" class="form-label"
                    >Author<span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="author"
                    name="author"
                    required
                    v-model="post.author"
                  />
                </div>
                <div class="col-12">
                  <label for="author" class="form-label"
                    >Title<span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    name="title"
                    v-model="post.title"
                    required
                  />
                </div>

                <div class="col-12">
                  <label for="message" class="form-label"
                    >Message <span class="text-danger">*</span></label
                  >
                  <textarea
                    class="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    required
                    v-model="post.description"
                  ></textarea>
                </div>
                <div class="col-12">
                  <div class="d-grid">
                    <button class="btn btn-primary btn-lg" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {
        author: "",
        title: "",
        description: "",
      },
    };
  },
  methods: {
    saveposts() {
      axios
        .post(`http://127.0.0.1:8000/api/posts`, this.post)
        .then((res) => {
          return navigateTo("/");
        })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(res);
            console.log(res);
            console.log(res);
          }
          // console.log(error.config);
        });
    },
  },
};
</script>
<style></style>
