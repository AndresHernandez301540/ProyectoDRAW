const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');
// type: Schema.Types.ObjectId,ref:'User'
const schema = Schema({
  _name:String,
  _dueDate:String,
  _startDate:String,
  _description:String,
  _open:Boolean,
  _scrumMaster:{type: Schema.Types.ObjectId,ref:'User'},
  _scrumMastername:String,
  _owner:{type:Schema.Types.ObjectId,ref:'User'},
  _ownerName:String,
  _team:[],
  _teamNames:[]
});

class Project{
 constructor(name,dueDate,startDate,description,open,scrumMaster,scrumMastername,owner,ownerName,team,teamNames){
   _name=name;
   _dueDate=dueDate;
   _startDate=startDate;
   _description=description;
   _open=open
   _scrumMaster=scrumMaster;
   _scrumMastername=scrumMastername;
   _owner=owner;
   _ownerName=ownerName;
   _team=team;
   _teamNames=teamNames;
 }

  get name(){
    return this._name;
  }
  set name(v){
    this._name=v;
  }
  get dueDate(){
    return this._dueDate;
  }
  set dueDate(v){
    this._dueDate=v;
  }
  get startDate(){
    return this._startDate;
  }
  set startDate(v){
    this._startDate=v;
  }
  get description(){
    return this._description;
  }
  set description(v){
    this._description=v;
  }
  get open(){
    return this._open;
  }
  set open(v){
    this._open=v;
  }
  get scrumMaster(){
    return this ._scrumMaster;
  }
  set scrumMaster(v){
    this._scrumMaster=v;
  }
  get scrumMastername(){
    return this ._scrumMastername;
  }
  set scrumMastername(v){
    this._scrumMastername=v;
  }
  get owner(){
    return this._owner;
  }
  set owner(v){
    this._owner=v;
  }
  get ownerName(){
    return this._ownerName;
  }
  set ownerName(v){
    this._ownerName=v;
  }
   get team(){
     return this._team;
   }
   set team(v){
     this._team=v;
   }
   get teamNames(){
     return this._teamNames;
   }
   set teamNames(v){
     this._teamNames=v;
   }
}
schema.plugin(mongoosePaginate);
schema.loadClass(Project);
module.exports=mongoose.model('Project', schema);
