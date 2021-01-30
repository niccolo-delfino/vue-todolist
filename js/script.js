var app = new Vue({
  el: `#app`,
  data: {
    todos:[
      'Shingeki no Kyojin',
      'Uzaki-chan Wants To Hang Out',
      'Natsume Yuujinchou',
      'Angel Beats',
      'Dorohedoro',
      'Pandora Hearts'
    ],
    todosCancellati: [],
    todosNuovo: '',

  },

  methods: {
    aggiungiTodo(){
      if (this.todosNuovo.length <5) {
        alert('Devi scrivere almeno 5 caratteri')
      }else {
        this.todos.push(this.todosNuovo);
        this.todosNuovo = '';
      }
    },
    cancellaTodo(index){
      this.todosCancellati.push(this.todos[index]);
      this.todos.splice(index,1);
    },
    ripristinaTodo(index){
      this.todos.push(this.todosCancellati[index]);
      this.todosCancellati.splice(index,1);
    },
    cancellaDefinitivamente(index){
      this.todosCancellati.splice(index,1);
    },
    cancellaTutto(){
    this.todosCancellati.splice(0,this.todosCancellati.length);
    }
  }
});
