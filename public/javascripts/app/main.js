const app = new Vue({
  el:'#app',
  data:{
    //Objetos que contengan informacion de la app (modelos)
    projects:[],
    members:[],
    memberedit:[],
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
        var iconos=indextabla.getElementsByClassName("glyphicon-pencil");
        document.getElementById("btneditar"+getIDRow).classList.add('glyphicon-ok');
        document.getElementById("btneditar"+getIDRow).classList.remove('glyphicon-pencil');

      }else if(this.check=='1'){

        this.check='0';
        var getIDRow=$(event.target).closest('tr').data('id');
        var indextabla=document.querySelector("#row"+getIDRow);
        document.getElementById("btneditar"+getIDRow).classList.add('glyphicon-pencil');
        document.getElementById("btneditar"+getIDRow).classList.remove('glyphicon-ok');
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
        fetch("/team/update/"+id,options)
        .then(response => response.json())
        .then(json => {
          this.members = json.data.docs;
          document.location.replace("/team/id/"+id);
        });
    },

    updatemiembro(){
      id=document.getElementById("edid").value;
      fullName=document.getElementById("edfullName").value;
      console.log(fullName);
      birthdayDate=document.getElementById("edbirthdayDate").value;
      curp=document.getElementById("edcurp").value;
      rfc=document.getElementById("edrfc").value;
      home=document.getElementById("edhome").value;
      abilities=document.getElementById("edabilities").value;
      const datos ={
        id:id,
        _fullName:fullName,
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
      fetch("/team/update/"+id,options)
      .then(response => response.json())
      .then(json => {
        this.members = json.data.docs;
        document.location.replace("/team/id/"+id);
      });
    },
    buscar:function(id){
      const idmiembro=id;
      fetch("/team/buscar/"+idmiembro)
      .then((response) => {return response.json()})
      .then((data) => {
        this.memberedit = data;
        document.getElementById("edid").value=new String(this.memberedit.data._id);
        document.getElementById("edfullName").value=new String(this.memberedit.data._fullName);
      //  document.getElementById("edbirthdayDate").value=fechanueva;
        document.getElementById("edcurp").value=new String(this.memberedit.data._curp);
        document.getElementById("edrfc").value=new String(this.memberedit.data._rfc);
        document.getElementById("edhome").value=new String(this.memberedit.data._home);
        document.getElementById("edabilities").value=new String(this.memberedit.data._abilities);
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
    fetch('/team/obtener/')
    .then(response => response.json())
    .then(json =>{
      this.members=json.data.docs
    });
  }
});
