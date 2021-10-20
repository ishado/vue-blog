<template>
  <div class="container" id="questions">
    <div class="question-box">
      <h3 @click="open = !open">{{ title }}</h3>
      <div class="question-reply" v-show="open">
        <p>{{ reply }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "reply", "open"],
  name: "post",
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  padding-bottom: 100px;
}
.container {
  margin: 20px auto;
  .question-box {
    &:not(:last-child) {
      border-bottom: 1px solid #eee;
    }
    h3 {
      font-size: 16px;
      margin: 0;
      padding: 15px;
      background-color: #dfdfdf;
      &:hover {
        cursor: pointer;
      }
    }
    .question-reply {
      background-color: #efefef;
      padding: 15px;
      p {
        margin: 0;
      }
    }
  }
}

.links-urls {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  .link {
    padding: 10px 20px;
    display: block;
    background-color: #eee;
    margin-bottom: 10px;
    text-decoration: none;
    color: #777;
  }
}
</style>
