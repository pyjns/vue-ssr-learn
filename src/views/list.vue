<template>
  <div>
    <h1>page list</h1>
    <router-link :to="'/detail?id='+item" v-for="item in list" :key="item" class="item">{{ item }}</router-link>
  </div>
</template>
<script>
export default {
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  // Server-side only
  asyncData({ store }) {
    console.log("******list.vue***asyncData***");
    store.commit("setList");
  },
  // Server-side only
  serverPrefetch() {
    console.log("******list.vue***serverPrefetch***");
    this.$store.commit("setList");
  },
  // Client-side only
  mounted() {
    if (!this.list.length) {
      console.log("******list.vue***mounted***");
      this.$store.commit("setList");
    }
  },
};
</script>
<style scoped>
.item {
  background: yellowgreen;
  height: 60px;
  line-height: 60px;
  font-weight: bold;
  display: block;
  margin: 10px 0;
}
</style>
