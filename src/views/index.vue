<template>
  <div>
    <h1>page index</h1>
    <nav>
      <router-link to="/list">列表</router-link>
      <router-link to="/detail?id=999">详情</router-link>
    </nav>
    <p>count:{{count}}</p>
    <button @click="addCount">加1</button>
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  serverPrefetch() {
    console.log("******index.vue***serverPrefetch***");
  },
  methods: {
    addCount() {
      this.$store.commit("addCount");
    },
  },
};
</script>
