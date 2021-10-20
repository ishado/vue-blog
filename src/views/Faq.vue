<template>
  <div class="our-faq">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <blog-faq
      v-for="question in questions"
      :key="question.id"
      :id="question.id"
      :title="question.title"
      :reply="question.reply"
      :open="question.open"
    />
  </div>
</template>

<script>
import BlogFaq from "@/components/blog/BlogFaq2.vue";
import json_questions from "../json/faq.json";
export default {
  components: {
    BlogFaq,
  },
  data: function () {
    return {
      pageName: "Faq",
      pageDescription: "This is FAQ : Question And Answer page",
      questions: json_questions,
    };
  },
  name: "Faq",
};
</script>

<style></style>
