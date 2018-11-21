const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = Schema({
  _fullName:String,
  _birthdayDate:Date,
  _role:String,
  _socialId:String,
  _thumbnail:String
});

class User{
 constructor(fullName, birthdayDate, role,socialId,thumbnail){
   _fullName=fullName;
   _birthdayDate=birthdayDate;
   _role=role;
   _socialId:socialId;
   _thumbnail:thumbnail;
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
 get socialId(){
   return this._socialId;
 }
 set socialId(v){
   this._socialId=v;
 }
 get thumbnail(){
   return this._thumbnail;
 }
 set thumbnail(v){
   this._thumbnail=v;
 }

}
schema.plugin(mongoosePaginate);
schema.loadClass(User);
module.exports=mongoose.model('User', schema);
