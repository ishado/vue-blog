<template>
  <div class="container" id="accordion">
    <div class="card">
      <div class="card-header" id="headingTwo">
        <h5 class="mb-0">
          <button
            class="btn btn-link collapsed"
            data-toggle="collapse"
            :data-target="'#collapse-' + id"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            {{ id + " : " + title }}
          </button>
        </h5>
      </div>
      <div
        :id="'collapse-' + id"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordion"
      >
        <div class="card-body">
          {{ reply }}
        </div>
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

<style lang="scss" scoped></style>
