<script>
  export default {
    data() {
      var sample_img = require('../../../images/sample.jpeg')
      return {
        title: "Top",
        sample_img: sample_img
      }
    },
  }
</script>

<template>
  <div>
    <span>{{title}}</span>
    <img :src="sample_img">
  </div>
</template>