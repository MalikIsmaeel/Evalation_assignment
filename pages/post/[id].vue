<template>
  <div class="containerd-flex justify-center">
    <div class="row">
      <div class="my-4 mx-2 col-4">
        <NuxtLink to="/create" class="btn btn-primary">New Post</NuxtLink>
      </div>
      <div class="col-6">
        <form class="d-flex justify-center searchform my-4 mx-2" role="search">
          <input
            class="form-control search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary mx-1" type="submit">Search</button>
        </form>
      </div>

      <div class="card my-2 col-md-5 mx-3 border-0">
        <div class="card-header bg-blue"></div>
        <div class="card-body">
          <h3 class="avatar bg-gray-400 border-1">{{ singlePost.title }}</h3>
          <pre>{{ singlePost.description }}</pre>
        </div>

        <div class="card-footer">{{ singlePost.author }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.singlePost);
  },
  computed: mapState(["posts"]),

  computed: {
    ...mapGetters(["singlePost", "getPosts"]),
  },
  created() {
    this.onePosts(35);
  },
  methods: {
    ...mapActions(["onePosts"]),
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
body {
  background: #eeeeee;
  margin: 2em;
  font-family: "Roboto", sans-serif;
}

h1 {
  font-family: "Playfair Display", serif;
  line-height: 0.2em;
  &.large {
    font-size: 80px;
    letter-spacing: 2px;
    &:first-child {
      margin-bottom: 1em;
    }
    .tiny {
      font-size: 40px;
      vertical-align: top;
    }
  }
  &.medium {
    font-size: 50px;
  }
  &.small {
    font-size: 26px;
    text-align: right;
  }
}

h2 {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4em;
  margin-bottom: 2em;
}

p {
  font-size: 13px;
  line-height: 1.4em;
  text-align: justify;
}
.spread {
  display: grid;
  grid-template-columns: minmax(300px, 1.2fr) minmax(300px, 1fr);

  width: 100%;
  box-shadow: 0 5px 15px hsla(0, 0, 50%, 0.5);
  margin: 1em auto;

  &__left {
    background: black;
    background-image: url("https://source.unsplash.com/_-Rk63T6gkk");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  &__right {
    background: white;
    padding: 0 3em 0;
  }
}

.title {
  text-align: center;
  max-width: 200px;
  margin: 0 auto 4em;
}

.content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 2vw;
}

.spread__page-bottom {
  margin-top: 4em;
  position: relative;
  &:after {
    content: "";
    border-top: 1px solid black;
    width: 50%;
    position: absolute;
    top: 0;
    right: 0;
  }

  .fa-bicycle {
    position: absolute;
    bottom: 83%;
    right: 0;
  }
  .num {
    padding: 1em;
    background: black;
    text-align: center;
    color: white;
    width: 4em;
    margin: 0 auto;
  }
}
</style>
