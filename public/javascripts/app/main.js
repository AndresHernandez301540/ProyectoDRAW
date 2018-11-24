const app = new Vue({
  el:'#app',
  data:{
    //Objetos que contengan informacion de la app (modelos)
    projects:[],
    members:[],
    selected: '',
    check:'0'
  },
  methods:{
    // Todas las funciones comunes de la aplicacion
    sum: function(event){
      this.operators.res= this.operators.n1+this.operators.n2;
    },
    valor(){
      document.getElementById("rank").value=this.selected;
      return this.selected;
    },
    cambiarpropiedad(){

      if(this.check=='0'){
        this.check='1';
        var getIDRow=$(event.target).closest('tr').data('id');
        var indextabla=document.querySelector("#row"+getIDRow);
        var editableElements = indextabla.querySelectorAll("[contentEditable=false]");
        var iconos=indextabla.getElementsByClassName("glyphicon-pencil");
        document.getElementById("btneditar"+getIDRow).classList.add('glyphicon-ok');
        document.getElementById("btneditar"+getIDRow).classList.remove('glyphicon-pencil');

        document.getElementById("edfullName").value=document.getElementById("tblnombre"+getIDRow).innerHTML;
        document.getElementById("edbirthdayDate").value=document.getElementById("tblbirthday"+getIDRow).innerHTML;
        console.log(document.getElementById("tblbirthday"+getIDRow).innerHTML);
        document.getElementById("edcurp").value=document.getElementById("tblcurp"+getIDRow).innerHTML;
        document.getElementById("edrfc").value=document.getElementById("tblrfc"+getIDRow).innerHTML;
        document.getElementById("edhome").value=document.getElementById("tblhome"+getIDRow).innerHTML;
        document.getElementById("edabilities").value=document.getElementById("tblabilities"+getIDRow).innerHTML;

        for (var i = 0; i < editableElements.length; ++i) {
            editableElements[i].setAttribute("contentEditable", true);
        }
      }else if(this.check=='1'){

        this.check='0';
        var getIDRow=$(event.target).closest('tr').data('id');
        var indextabla=document.querySelector("#row"+getIDRow);
        var editableElements = indextabla.querySelectorAll("[contentEditable=true]");
        document.getElementById("btneditar"+getIDRow).classList.add('glyphicon-pencil');
        document.getElementById("btneditar"+getIDRow).classList.remove('glyphicon-ok');
        for (var i = 0; i < editableElements.length; ++i) {
            editableElements[i].setAttribute("contentEditable", false);
        }
      }
    },
    editarUsuario(){
      if(this.check=='0'){
        this.check='1';
        var editableElements = document.querySelectorAll("[contentEditable=false]");
        var iconos=document.getElementsByClassName("glyphicon-pencil");
        document.getElementById("btneditar").classList.add('glyphicon-ok');
        document.getElementById("btneditar").classList.remove('glyphicon-pencil');
        for (var i = 0; i < editableElements.length; ++i) {
            editableElements[i].setAttribute("contentEditable", true);
        }
      }else if(this.check=='1'){
        this.check='0';
        var editableElements = document.querySelectorAll("[contentEditable=true]");
        var iconos=document.getElementsByClassName("glyphicon-ok");
        document.getElementById("btneditar").classList.add('glyphicon-pencil');
        document.getElementById("btneditar").classList.remove('glyphicon-ok');
        for (var i = 0; i < editableElements.length; ++i) {
            editableElements[i].setAttribute("contentEditable", false);
        }

      }
    },
    updateUser: function(id,fullName,birthdayDate,curp,rfc,home,abilities){
        const datos ={
          id:id,
          fullName:fullName,
          birthdayDate:birthdayDate,
          curp:curp,
          rfc:rfc,
          home:home,
          abilities:abilities
        };
        const options={
          method:'PUT',
          body:JSON.stringify(datos),
          headers:{
            'Content-Type': 'application/json'
          }
        };
        fetch("/team/update/id/"+id,options)
        .then(response => response.json())
        .then(json => {
          this.members = json.data.docs;
          document.location.replace("/team/id/"+id);
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
    fetch('/team/list/')
    .then(response => response.json())
    .then(json =>{
      this.members=json.data.docs
    });
  }
});
