<script>
  export default {
    data() {
      return {
        count: 0,
      }
    },
    methods: {
      increment() {
        this.count += 1
      },
      decrement() {
        this.count -= 1
      },
    }
  }
</script>

<template>
  <div>
    <el-button type="primary" v-on:click="decrement">-</el-button>
    <span>{{count}}</span>
    <el-button type="primary" v-on:click="increment">+</el-button>
  </div>
</template>