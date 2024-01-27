<template>
  <div class="containerd-flex justify-center">
    <div class="row">
      <div class="my-4 mx-1 col-4"></div>
      <div class="col-6">
        <form class="d-flex justify-center searchform my-4 mx-2 mr-auto" role="search">
          <input
            class="form-control search"
            type="search"
            :placeholder="$t('search')"
            aria-label="Search"
          />

          <button class="btn btn-outline-primary mx-1" type="submit">
            {{ $t("seacrh") }}
          </button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="pt-2 col-3" v-for="post in getPosts" :key="post.index">
        <div class="two">
          <div class="d-flex justify-content-end px-3 pt-1">
            <i class="mdi mdi-star-outline pr-1 star"></i
            ><i class="mdi mdi-dots-horizontal dot"></i>
          </div>
          <div class="px-3">
            <div class="round">
              <img
                src="https://img.icons8.com/emoji/48/000000/hedgehog-emoji.png"
                width="23"
                class="imgfix"
              />
            </div>
          </div>
          <div class="px-3 pt-3">
            <h3 class="name">{{ post.id }}</h3>
            <p class="quote2">{{ post.author }}</p>
          </div>
          <div class="d-flex justify-content-start px-3 align-items-center">
            <i class="mdi mdi-view-comfy task"></i>
            <span class="quote2 pl-2">{{ post.title }}</span>
          </div>
          <div class="d-flex justify-content-between px-3 align-items-center pb-3">
            <div class="d-flex justify-content-start align-items-center">
              <pre class="pl-2 des ll">{{ post.description }}</pre>
            </div>
            <div class="d-flex justify-content-end m-3">
              <NuxtLink :to="'/post/' + post.id" class="btn btn-primary float-end"
                ><i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / End Single Service -->
    <!-- Start Single Service -->
  </div>
  <TheFooter />
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {},
  computed: mapState(["posts"]),

  computed: {
    ...mapGetters(["getPosts"]),
  },
  created() {
    this.getPost();
  },
  methods: {
    ...mapActions(["getPost"]),
  },
};
</script>
<style>
.ll {
  width: 5rem;
  height: 5rem;
}
.des {
  word-wrap: break-word;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.one {
  width: 270px;
  background-color: #000;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.pic1 {
  position: relative;
  right: 22px;
  top: 23px;
}
.pic2 {
  position: relative;
  left: 25px;
  top: 17px;
}
.pic3 {
  position: relative;
  right: 13px;
  bottom: 18px;
}
.pic4 {
  position: relative;
  left: 14px;
  bottom: 21px;
}
.project {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: #fd4040;
}
.quote {
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
}

.two {
  width: 270px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.star {
  font-size: 20px !important;
  color: #b1b4b7;
}
.dot {
  font-size: 20px !important;
  color: #b1b4b7;
}
.round {
  border-radius: 50%;
  background-color: #eee;
  width: 33px;
  height: 33px;
  margin-bottom: -10px;
  align-items: center;
  justify-content: center;
}
.name {
  font-size: 22px;
  color: #464e56;
  font-weight: 600;
  text-align: left;
}
.quote2 {
  font-size: 12px;
  font-weight: 500;
  color: #868e94;
  text-align: left;
}
.img1 {
  position: relative;
  left: 20px;
  z-index: 28;
  border: 0.5px solid #6ebde4;
  border-radius: 50%;
  background-color: #bcd8e6;
}
.img2 {
  position: relative;
  left: 10px;
  z-index: 29;
  border: 0.5px solid #6ebde4;
  border-radius: 50%;
  background-color: #bcd8e6;
}
.img3 {
  z-index: 30;
  border: 0.5px solid #6ebde4;
  border-radius: 50%;
  background-color: #bcd8e6;
}
.task {
  color: #727475;
}
.date {
  color: #727475;
}
.imgfix {
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  top: 2px;
}
</style>
