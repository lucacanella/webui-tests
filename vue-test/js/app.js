var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    title: '',
    text: '',
    visible: true,
    list: [
        { title: 'a', text: 'aaa', visible: true }
      , { title: 'b', text: 'bbb', visible: true } 
      , { title: 'c', text: 'ccc', visible: true }
    ]
  },
  methods: {
    /**
     * Adds element in list
     *
     * @param {MouseEvent} evt
     */
    addElement: function (evt) {
      this.list.push({ title: this.title, text: this.text, visible: this.visible });
    },
    removeElement: function (key, elem) {
      this.list.splice(key, 1);
    }
  }
})