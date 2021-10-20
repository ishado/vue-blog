import Vue from "vue";

// Make Dynamic Font Size Custom Directive
Vue.directive("font", {
  bind: function (el, binding) {
    el.style.fontSize = binding.value + "px";
    // console.log(`Directive Name :>> ${binding.name}`);
    // console.log(`Directive Value :>> ${binding.value}`);
  }
});

// Make Bold Custom Directive
Vue.directive("bold", {
  bind: function (el) {
    el.style.fontWeight = "bold";
  }
});

// Make Format Custom Directive
Vue.directive("format", {
  bind: function (el, binding) {
    el.style.fontSize = binding.value + "px";
    // console.log(`Directive Name :>> ${binding.name}`);
    // console.log(`Directive Value :>> ${binding.value}`);

    // Bold Modifier
    if (binding.modifiers.bold) {
      el.style.fontWeight = "bold";
    }

    // Orange Modifier
    if (binding.modifiers.orange) {
      el.style.color = "orange";
    }
  }
});