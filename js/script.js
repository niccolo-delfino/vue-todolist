var app = new Vue({
  el: `#app`,
  data: {
    todos:[
      'prova0',
      'prova1',
      'prova2',
      'prova3',
      'prova4',
      'prova5'
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
    }
  }
});
