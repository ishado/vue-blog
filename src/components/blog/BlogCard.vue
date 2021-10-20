<template>
  <div class="blog-card">
    <div class="card-image">
      <img src="https://picsum.photos/200" alt="artical title" />
    </div>

    <div class="card-content">
      <h2 class="card-title">artical title</h2>

      <p class="card-summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aut
        maxime neque pariatur tempora minima, delectus alias placeat? Possimus,
        iure.
      </p>

      <a href="" class="read-more"> continue reading </a>
    </div>
  </div>
</template>

<style lang="scss">
.blog-card {
  box-sizing: border-box;
  padding: 30px 10px 0px;

  width: 33%;
  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
}
.card-image {
  img {
    width: 100%;
    border-radius: 5px;
  }
}
.card-title {
  color: #990099;
  font-size: 20px;
  font-weight: 700;
}
.card-summary {
  margin-top: 0;
  font-weight: 300;
  color: #333;
}
.read-more {
  color: #333;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
}
</style>

<script>
export default {
  // name : "blog-card",
};
</script>
