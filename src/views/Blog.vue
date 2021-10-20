<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <!-- <BlogCard /> -->
            <BlogPosts
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :content="post.content"
              :date="post.date"
              :author="post.author"
              :category="post.category"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BlogCard from "@/components/blog/BlogCard.vue";
import BlogPosts from "@/components/blog/BlogPosts.vue";
import BlogSidebar from "@/components/blog/BlogSidebar.vue";
import json_posts from "../json/blog_posts.json";

export default {
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "This is blog page",
      posts: json_posts,
    };
  },
  name: "Blog",
  components: {
    BlogPosts,
    BlogSidebar,
    // BlogCard,
  },
};
</script>

<style></style>
