const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = Schema({
  _fullName:String,
  _birthdayDate:Date,
  _curp:String,
  _rfc:String,
  _home:String,
  _abilities:String
});

class Member{
 constructor(fullName,birthdayDate,curp,rfc,home,abilities){
   _fullName=fullName;
   _birthdayDate=birthdayDate;
   _curp=curp;
   _rfc=rfc;
   _home=home;
   _abilities=abilities;
 }

  get fullName(){
    return this._name;
  }
  set fullName(v){
    this._name=v;
  }
  get birthdayDate(){
    return this._birthdayDate;
  }
  set birthdayDate(v){
    this._birthdayDate=v;
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
  get abilities(){
    return this._abilities;
  }
  set abilities(v){
    this._abilities=v;
  }

}
schema.plugin(mongoosePaginate);
schema.loadClass(Member);
module.exports=mongoose.model('Member', schema);
