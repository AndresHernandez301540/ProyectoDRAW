const app = new Vue({
    el:'#app',
    data:{
      //Objetos que contengan informacion de la app (modelos)
      projects:[],
      members:[],
      memberedit:[],
      membereditprof:[],
      selected: '',
      check:'0'
    },
    methods:{
      // Todas las funciones comunes de la aplicacion
      valor(){
        document.getElementById("rank").value=this.selected;
        return this.selected;
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
        });
        (window.location="/team/list")
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
        fetch("/team/delete/"+id,options)
        .then(response => response.json())
        .then(json => {
          this.members = json.data.docs;
        });
        (window.location="/team/list")
      },

      buscarproyecto:function(id){
        fetch("/projects/buscar/"+id)
        .then((response) => {return response.json()})
        .then((data) =>{
          this.projectedit=data;
          document.getElementById("edid").value=new String(this.projectedit.data._id);
          document.getElementById("edname").value=new String(this.projectedit.data._name);
          document.getElementById("eddescription").value=new String(this.projectedit.data._description);
          document.getElementById("edscrumMaster").value=new String(this.projectedit.data._scrumMaster);
          document.getElementById("edowner").value=new String(this.projectedit.data._owner);
          document.getElementById("edteam").value=new String(this.projectedit.data._team);
        });
      },
      updateproyecto(){
        id=document.getElementById("edid").value;
        name=document.getElementById("edname").value;
        dueDate=document.getElementById("eddueDate").value;
        startDate=document.getElementById("edstartDate").value;
        description=document.getElementById("eddescription").value;
        master=document.getElementById("edscrumMaster").value;
        owner=document.getElementById("edowner").value;
        team=document.getElementById("edteam").value;
        const datos ={
          id:id,
          name:name,
          dueDate:dueDate,
          startDate:startDate,
          description:description,
          master:master,
          owner:owner,
          team:team
        };
        const options={
          method:'PUT',
          body:JSON.stringify(datos),
          headers:{
            'Content-Type': 'application/json'
          }
        };
        fetch("/projects/update/"+id,options)
        .then(response => response.json())
        .then(json => {
          this.projects = json.data.docs;
        });
        (window.location="/projects/list")
      },
      deleteproyecto:function(id){
        const options={
          method:'DELETE',
          headers:{
            'Content-Type': 'application/json'
          }
        };
        fetch("/projects/delete/"+id,options)
        .then(response => response.json())
        .then(json => {
          this.projects = json.data.docs;
        });
        (window.location="/projects/list")
      },

      profile(){
        var idprofile=document.getElementById("id").value;
        const datos={
          id:document.getElementById("id").value,
          _fullName:document.getElementById("fullName").value,
          birthdayDate:document.getElementById("birthdayDate").value,
          curp:document.getElementById("curp").value,
          rfc:document.getElementById("rfc").value,
          home:document.getElementById("home").value,
          abilities:document.getElementById("abilities").value
        }
        const options={
          method:'PUT',
          body:JSON.stringify(datos),
          headers:{
            'Content-Type': 'application/json'
          }
        };
        fetch("/team/update/"+idprofile,options)
        .then(response => response.json())
        .then(json => {
          this.members = json.data.docs;
        });
        (window.location="/team/list")
      }

    },
    computed:{
      // Funciones que podran ser desplegables en las vistas
      // solo si regresan un resultado
      result(){
      }
    },
    created(){
      // Aqui se ejecuta codigo al inicializar la aplicacion, como si fuera el constructor
      fetch('/team/obtener/')
      .then(response => response.json())
      .then(json =>{
        this.members=json.data.docs
      });
      fetch('/projects/obtener/')
      .then(response => response.json())
      .then(json =>{
        this.projects=json.data.docs
      });
    }
  });
