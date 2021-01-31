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
    editTodo(index){
      const modifica = prompt('Modifica il Nome');
      this.todos.splice(index,1,modifica);
    },
    cancellaTodo(index){
      this.todosCancellati.push(this.todos[index]);
      this.todos.splice(index,1);
    },
    ripristinaTodo(index){
      this.todos.push(this.todosCancellati[index]);
      this.todosCancellati.splice(index,1);
    },
    ripristinaTutto(){
      for (var i = 0; i < this.todosCancellati.length; i++) {
        this.todos.push(this.todosCancellati[i]);
      };
      this.todosCancellati.splice(0,this.todosCancellati.length);
    },
    cancellaDefinitivamente(index){
      this.todosCancellati.splice(index,1);
    },
    cancellaNuovo(){
      for (var i = 0; i < this.todos.length; i++) {
        this.todosCancellati.push(this.todos[i]);
      }
      this.todos.splice(0,this.todos.length);
    },
    cancellaTutto(){
    this.todosCancellati.splice(0,this.todosCancellati.length);
    }
  }
});
