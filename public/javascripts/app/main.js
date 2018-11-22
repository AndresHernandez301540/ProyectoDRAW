const app = new Vue({
  el:'#app',
  data:{
    //Objetos que contengan informacion de la app (modelos)
    users:[],
    products:[]
  },
  methods:{
    // Todas las funciones comunes de la aplicacion
    sum: function(event){
      this.operators.res= this.operators.n1+this.operators.n2;
    },
    updateUser: function(id,name,lastName,age){
      const datos ={
        id:id,
        name:name,
        lastName:lastName,
        age:age
      };
      const options={
        method:'PUT',
        body:JSON.stringify(datos),
        headers:{
          'Content-Type': 'application/json'
        }
      };
      fetch("/users/edit/"+id,options)
      .then(response => response.json())
      .then(json => {
        this.users = json.data.docs;
        document.location.replace('/products/blank');

      });
    },
    deleteUser:function(id){
      const options={
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
      };
      fetch("/users/delete/"+id,options)
      .then(response => response.json())
      .then(json => {
        this.users = json.data.docs;

      });
    }
  },
  computed:{
    // Funciones que podran ser desplegables en las vistas
    // solo si regresan un resultado
    result(){
      return this.operators.n1+this.operators.n2;
    }
  },
  created(){
    // Aqui se ejecuta codigo al inicializar la aplicacion, como si fuera el constructor
    fetch('/users/get/') //el fetch es un get
    .then(response => response.json())
    .then(json => {
      this.users = json.data.docs
    });
    fetch('/products/get/')
    .then(response => response.json())
    .then(json =>{
      this.products=json.data.docs
    });
  }
});
