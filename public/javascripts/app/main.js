Vue.component('vue-multiselect', window.VueMultiselect.default)
const app = new Vue({
    el:'#app',
    data:{
      //Objetos que contengan informacion de la app (modelos)
      projects:[],
      users:[],
      usersoptions:[],
      useredit:[],
      usereditprof:[],
      usuariosseleccionados: [],
      ownerseleccionados:[],
      stories:[],
      mostrar:[],
      valorhabilidades:[],
      retrospectivas:[],
      habilidades:[
          {name:'Android - Junior',code:'Android'},
          {name:'Android - Senior',code:'Android'},
          {name:'Android - Master',code:'Android'},
          {name:'Java - Junior',code:'Java'},
          {name:'Java - Senior',code:'Java'},
          {name:'Java - Master',code:'Java'},
          {name:'Ruby - Junior',code:'Ruby'},
          {name:'Ruby - Senior',code:'Ruby'},
          {name:'Ruby - Master',code:'Ruby'},
          {name:'Python - Junior',code:'Python'},
          {name:'Python - Senior',code:'Python'},
          {name:'Python - Master',code:'Python'},
          {name:'Javascript - Junior',code:'Javascript'},
          {name:'Javascript - Senior',code:'Javascript'},
          {name:'Javascript - Master',code:'Javascript'},
          {name:'CSS - Junior',code:'CSS'},
          {name:'CSS - Senior',code:'CSS'},
          {name:'CSS - Master',code:'CSS'},
          {name:'PHP - Junior',code:'PHP'},
          {name:'PHP - Senior',code:'PHP'},
          {name:'PHP - Master',code:'PHP'}
      ],
      selected: '',
      prioridad:'',
      backlog:'',
      terminada:'',
      miembro:'',
      estadoproyecto:true,
      validarTarjeta:true,
      check:'0'
    },
    methods:{
      addTag (newTag) {
        const tag = {
          _fullName: this.usersoptions.fullName,
          _id: this.usersoptions.id
        }
        this.usersoptions.push(tag)
        this.usuariosseleccionados.push(tag)
      },
      agregarhabilidades (newTag) {
        const tag = {
          name: newTag,
          code: newTag.substring(0, 2)
        }
        this.habilidades.push(tag)
        this.valorhabilidades.push(tag)
      },
      valor(){
        document.getElementById("rank").value=this.selected;
        return this.selected;
      },
      valormember(){
        document.getElementById("memberTeam").value=this.miembro;
        return this.miembro;
      },
      updatemiembro(){
        id=document.getElementById("edid").value;
        fullName=document.getElementById("edfullName").value;
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
        fetch("/users/update/"+id,options)
        .then(response => response.json())
        .then(json => {
          this.users = json.data.docs;
        });
        (window.location="/team/list")
      },
      buscar:function(id){
        const idmiembro=id;
        fetch("/users/buscar/"+idmiembro)
        .then((response) => {return response.json()})
        .then((data) => {
          this.useredit = data;
          document.getElementById("edid").value=new String(this.useredit.data._id);
          document.getElementById("edfullName").value=new String(this.useredit.data._fullName);
          document.getElementById("edbirthdayDate").value=new String(this.useredit.data._birthdayDate);
          document.getElementById("edcurp").value=new String(this.useredit.data._curp);
          document.getElementById("edrfc").value=new String(this.useredit.data._rfc);
          document.getElementById("edhome").value=new String(this.useredit.data._home);
          document.getElementById("edabilities").value=new String(this.useredit.data._abilities);
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
        (window.location="/team/list")
      },

      buscarproyecto:function(id){
        fetch("/projects/buscar/"+id)
        .then((response) => {return response.json()})
        .then((data) =>{
          this.projectedit=data;
          document.getElementById("edid").value=new String(this.projectedit.data._id);
          document.getElementById("eddueDate").value=new String(this.projectedit.data._startDate);
          document.getElementById("edstartDate").value=new String(this.projectedit.data._dueDate);
          document.getElementById("edname").value=new String(this.projectedit.data._name);
          document.getElementById("eddescription").value=new String(this.projectedit.data._description);
          document.getElementById("edscrumMaster").value=new String(this.projectedit.data._scrumMaster);
          document.getElementById("edscrumMastername").value=new String(this.projectedit.data._scrumMastername);
          document.getElementById("edowner").value=new String(this.projectedit.data._owner);
          document.getElementById("edownerName").value=new String(this.projectedit.data._ownerName);
        });

      },
      updateproyecto(){
        id=document.getElementById("edid").value;
        name=document.getElementById("edname").value;
        dueDate=document.getElementById("eddueDate").value;
        startDate=document.getElementById("edstartDate").value;
        description=document.getElementById("eddescription").value;
        scrumMaster=document.getElementById("edscrumMaster").value;
        scrumMasterName=document.getElementById("edscrumMastername").value;
        owner=document.getElementById("edowner").value;
        ownerName=document.getElementById("edownerName").value;
        const datos ={
          id:id,
          name:name,
          dueDate:dueDate,
          startDate:startDate,
          description:description,
          scrumMaster:scrumMaster,
          scrumMastername:scrumMasterName,
          owner:owner,
          ownerName:ownerName,
        };
        console.log(datos);
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
        (window.location="/")
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

      buscarhistoria:function(id){
        fetch("/projects/storie/"+id)
        .then((response) => {return response.json()})
        .then((data) =>{
          this.storyedit=data;
          console.log(this.storyedit.data._nombre);
          document.getElementById("storieid").value=new String(this.storyedit.data._id);
          document.getElementById("nameid").value=new String(this.storyedit.data._nombre);
          document.getElementById("howid").value=new String(this.storyedit.data._como);
          document.getElementById("wantid").value=new String(this.storyedit.data._quiero);
          document.getElementById("thatid").value=new String(this.storyedit.data._manera);
          document.getElementById("givenid").value=new String(this.storyedit.data._dado);
          document.getElementById("whenid").value=new String(this.storyedit.data._cuando);
          document.getElementById("thenid").value=new String(this.storyedit.data._entonces);
          document.getElementById("backlogid").value=new String(this.storyedit.data._backlog);
          document.getElementById("finishedid").value=new String(this.storyedit.data._terminado);
          document.getElementById("hrsTrabid").value=new String(this.storyedit.data._hrsTrab);

        });

      },
      updatehistoria(){
        idproyecto=document.getElementById("proyectoid").value;
        id=document.getElementById("storieid").value;
        nombre=document.getElementById("nameid").value;
        como=document.getElementById("howid").value;
        quiero=document.getElementById("wantid").value;
        manera=document.getElementById("thatid").value;
        dado=document.getElementById("givenid").value;
        cuando=document.getElementById("whenid").value;
        entonces=document.getElementById("thenid").value;
        prioridad=this.prioridad;
        hrsTrab=document.getElementById("hrsTrab").value;
        backlog=this.backlog;
        terminado=this.terminada;
        const datos ={
          id:id,
          nombre:nombre,
          como:como,
          quiero:quiero,
          manera:manera,
          prioridad:prioridad,
          dado:dado,
          cuando:cuando,
          entonces:entonces,
          hrsTrab:hrsTrab,
          backlog:backlog,
          terminado:terminado
        };
        const options={
          method:'PUT',
          body:JSON.stringify(datos),
          headers:{
            'Content-Type': 'application/json'
          }
        };
        fetch("/projects/updatestorie/"+id,options)
        .then(response => response.json())
        .then(json => {
          this.stories = json.data.docs;
        });
        (window.location="/projects/dashboard/"+idproyecto);
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
          abilities:this.valorhabilidades
        }
        const options={
          method:'PUT',
          body:JSON.stringify(datos),
          headers:{
            'Content-Type': 'application/json'
          }
        };
        fetch("/users/update/"+idprofile,options)
        .then(response => response.json())
        .then(json => {
          this.users = json.data.docs;
        });
        (window.location="/")
      },

      cambiarEstado(){
        if(this.estadoproyecto){
          this.estadoproyecto=false;
        }else{
          this.estadoproyecto=true;
        }
        id=document.getElementById("proyectoid").value;
        const datos ={
          id:id,
          open:this.estadoproyecto
        };
        console.log(datos);
        const options={
          method:'PUT',
          body:JSON.stringify(datos),
          headers:{
            'Content-Type': 'application/json'
          }
        }
        fetch("/projects/updatestate/"+id,options)
        .then(response => response.json())
        .then(json => {
          this.projects = json.data.docs;
        });
        (window.location="/");

      },

      validTarjeta(){

        id=document.getElementById("storieId").value;
        idproyect=document.getElementById("proyectoid").value;
        const datos ={
          id:id,
          status:this.validarTarjeta
        };
        console.log(datos);
        const options={
          method:'PUT',
          body:JSON.stringify(datos),
          headers:{
            'Content-Type': 'application/json'
          }
        }
        fetch("/projects/estado/"+id,options)
        .then(response => response.json())
        .then(json => {
          this.stories = json.data.docs;
        });
        (window.location="/projects/dashboard/"+idproyecto);
      },

      rechazarTarjeta(){
        id=document.getElementById("storieId").value;
        idproyecto=document.getElementById("proyectoid").value;
        const options={
          method:'DELETE',
          headers:{
            'Content-Type': 'application/json'
          }
        };
        fetch("/projects/delete/"+id,options)
        .then(response => response.json())
        .then(json => {
          this.stories = json.data.docs;
        });
        (window.location="/projects/dashboard/"+idproyecto);
      }

    },
    computed:{
      // Funciones que podran ser desplegables en las vistas
      // solo si regresan un resultado
      result(){

      }
    },
    ready(){
      $( ".droppable-area1, .droppable-area2, .dropabble-area3, .droppable-area4" ).sortable({
            connectWith: ".connected-sortable",
            stack: '.connected-sortable ul'
          }).disableSelection();
    },
    created(){
      // Aqui se ejecuta codigo al inicializar la aplicacion, como si fuera el constructor
      fetch('/users/obtener/')
      .then(response => response.json())
      .then(json =>{
        this.users=json.data.docs
      });
      fetch('/projects/obtener/')
      .then(response => response.json())
      .then(json =>{
        this.projects=json.data.docs
      });
      fetch('/projects/stoall')
      .then(response => response.json())
      .then(json =>{
        this.stories=json.data.docs
      });
      fetch('/users/nombres/')
      .then(response => response.json())
      .then(json =>{
        this.usersoptions=json.data.docs
      });
      fetch('/projects/retroall/')
      .then(response => response.json())
      .then(json =>{
        this.retrospectivas=json.data.docs
      })
    }
  });
