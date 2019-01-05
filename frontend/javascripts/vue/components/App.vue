<template>
  <div>
    <div class="header">
      <router-link to="/">
        top
      </router-link>
      <router-link to="counter">
        counter
      </router-link>
      <router-link to="contact">
        contact
      </router-link>
      <router-link to="announcements">
        announcements
      </router-link>
      <router-link to="articles">
        articles
      </router-link>
      <router-link to="products">
        products
      </router-link>
      <router-link to="profile">
        profile
      </router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>