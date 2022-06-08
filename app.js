const app = Vue.createApp({
  data() {
    return { tasks: [], enteredTask: "", display: true };
  },
  computed: {
    buttonCaption() {
        return this.display === true ? "Hide": 'Show List';
    }
  },
  methods: {
      addTask() {
          this.tasks.push(this.enteredTask);
          this.enteredTask = "";
      },
      toggleDisplay() {
          this.display = !this.display;
      }
  },
});

app.mount("#assignment");
