const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = Schema({
  _fullName:String,
  _birthdayDate:Date,
  _role:String,
  _socialId:String,
  _thumbnail:String,
  _curp:String,
  _rfc:String,
  _home:String,
  _completeprof:String,
  _abilities:String
});

class User{
 constructor(fullName,birthdayDate,role,socialId,thumbnail,curp,rfc,home,completeprof,abilities){
   _fullName=fullName;
   _birthdayDate=birthdayDate;
   _role=role;
   _socialId:socialId;
   _thumbnail:thumbnail;
   _curp=curp;
   _rfc=rfc;
   _home=home;
   _completeprof=completeprof
   _abilities=abilities;
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
 get curp(){
   return this._curp;
 }
 set curp(v){
   this._curp=v;
 }
 get rfc(){
   return this._rfc;
 }
 set rfc(v){
   this._rfc=v;
 }
 get home(){
   return this ._home;
 }
 set home(v){
   this._home=v;
 }
 get completeprof(){
   return this ._completeprof;
 }
 set completeprof(v){
   this._completeprof=v;
 }
 get abilities(){
   return this._abilities;
 }
 set abilities(v){
   this._abilities=v;
 }
}
schema.plugin(mongoosePaginate);
schema.loadClass(User);
module.exports=mongoose.model('User', schema);
