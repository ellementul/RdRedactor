"use strict";

const Vue = require('vue/dist/vue.js');
const mdToHtml = require("../main.js");

var vm = new Vue({
  el: '#app',
  data: {
    sourceCode: `# Пример
    *Курсив* 
    **Жирный**`
  },
  computed: {
    htmlCode: function () {
      // `this` указывает на экземпляр vm
      return mdToHtml(this.sourceCode);
    }
  }
})