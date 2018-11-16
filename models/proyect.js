const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = Schema({
  _name:String,
  _dueDate:Date,
  _startDate:Date,
  _description:String,
  _scrumMaster:String,
  _owner:String,
  _team:Number
});

class Proyect{
 constructor(name,dueDate,startDate,description,scrumMaster,owner,team){
   _fullName=fullName;
   _name=name;
   _dueDate=dueDate;
   _startDate=startDate;
   _description=description;
   _scrumMaster=scrumMaster;
   _owner=owner;
   _team=team;
 }

 get fullName(){
   return this._fullName;
 }
 set fullName(v){
   this._fullName=v;
 }
 get birthdayDate(){
   return this._birthdayDate;
 }
 set birthdayDate(v){
   this._birthdayDate=v;
 }
 get role(){
   return this._role;
 }
 set role(v){
   this._role=v;
 }

}
schema.plugin(mongoosePaginate);
schema.loadClass(Proyect);
module.exports=mongoose.model('Proyect', schema);
