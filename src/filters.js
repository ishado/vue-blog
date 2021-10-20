import Vue from "vue";

// Make UpperCase
Vue.filter("uppercase", function (value) {
  return value.toUpperCase();
});

// Make Reverse
Vue.filter("reversing", function (value) {
  return value.split("").reverse().join("");
});

// Shorten Text
Vue.filter("shorten", function (value, textLength, suffix) {
  return value.substring(0, textLength) + suffix;
});
