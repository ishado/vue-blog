<template>
  <div class="our-help">
    <h1 v-font="60">{{ pageName }}</h1>
    <p v-format.bold.orange="60">{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Help",
      pageDescription: "This is help page",
    };
  },
  name: "Help",
};
</script>

<style></style>
