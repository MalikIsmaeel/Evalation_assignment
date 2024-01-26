<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-7 mx-auto">
        <div class="card mt-2 mx-auto p-4 bg-light">
          <div class="card-body bg-light">
            <div class="container">
              <form @submit.prevent="addpost" method="post">
                <div class="controls">
                  <div class="row m-1">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="form_name">{{ $t("author") }}*</label>
                        <input
                          type="text"
                          class="form-control"
                          id="author"
                          :placeholder="$t('author_holder')"
                          name="author"
                          required
                          v-model="postData.author"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="form_lastname">{{ $t("title") }} *</label>
                        <input
                          type="text"
                          class="form-control"
                          id="title"
                          :placeholder="$t('title_holder')"
                          name="title"
                          v-model="postData.title"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row m-2">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="form_message">{{ $t("body") }} *</label>
                        <textarea
                          id="tt"
                          name="tt"
                          class="form-control"
                          :placeholder="$t('body_holder')"
                          rows="4"
                          required="required"
                          v-model="postData.description"
                          data-error="Please, leave us a message."
                        ></textarea>
                      </div>
                    </div>

                    <div class="col-md-12 justify-center px-4 mt-1">
                      <input
                        type="submit"
                        class="btn btn-success btn-send pt-2 btn-block"
                        :value="$t('save')"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- /.8 -->
      </div>
      <!-- /.row-->
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      postData: {
        author: "",
        title: "",
        description: "",
      },
    };
  },
  mounted() {},
  computed: mapState(["posts"]),

  computed: {
    ...mapGetters(["getPosts"]),
  },

  methods: {
    ...mapActions(["addPosts"]),
    addpost() {
      // console.log(this.;
      this.addPosts(this.postData);
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
body {
  font-family: "Lato", sans-serif;
}

h1 {
  margin-bottom: 40px;
}

label {
  color: #333;
}

.btn-send {
  font-weight: 300;

  letter-spacing: 0.2em;
  width: 100%;
  margin-top: 1rem;
}
.help-block.with-errors {
  color: #ff5050;
  margin-top: 5px;
}

.card {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
