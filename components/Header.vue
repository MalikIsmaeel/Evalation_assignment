<template>
  <nav class="navbar navbar-expand-lg bg-primary text-white">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink to="/" class="btn btn-primary"> {{ $t("home") }}</NuxtLink>
          </li>
          <li class="nav-item">
            <li class="nav-item">
            <NuxtLink to="/create" class="btn btn-primary"> {{ $t("create") }}</NuxtLink>
          </li>
          </li>
         
        </ul>
      </div>
    </div>
   <span v-if="$i18n.locale=='ar'">
    <NuxtLink   :to="switchLocalePath('en')" class="btn nav-link m-1"
      >English</NuxtLink
    >
  </span>
  <span  v-else="$i18n.locale=='en'"> <NuxtLink :to="switchLocalePath('ar')" class="btn nav-link m-1">عربي</NuxtLink></span>
   
  </nav>
</template>
<script></script>
<style></style>
