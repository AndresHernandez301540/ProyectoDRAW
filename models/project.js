const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');
// type: Schema.Types.ObjectId,ref:'User'
const schema = Schema({
  _name:String,
  _dueDate:String,
  _startDate:String,
  _description:String,
  _scrumMaster:{type: Schema.Types.ObjectId,ref:'User'},
  _scrumMastername:String,
  _owner:String,
  _team:String
});

class Project{
 constructor(name,dueDate,startDate,description,scrumMaster,scrumMastername,owner,team){
   _name=name;
   _dueDate=dueDate;
   _startDate=startDate;
   _description=description;
   _scrumMaster=scrumMaster;
   _scrumMastername=scrumMastername;
   _owner=owner;
   _team=team;
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
   get team(){
     return this._team;
   }
   set team(v){
     this._team=v;
   }

}
schema.plugin(mongoosePaginate);
schema.loadClass(Project);
module.exports=mongoose.model('Project', schema);
