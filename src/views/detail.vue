<template>
  <div>
    <h3>page detail</h3>
    <p>id:{{ $route.query.id }}</p>
  </div>
</template>
<script>
export default {
  serverPrefetch() {
    console.log("******detail.vue***serverPrefetch***");
  },
};
</script>