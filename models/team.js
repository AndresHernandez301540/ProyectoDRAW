const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = Schema({
  _teamName:String,
  _members:String
});

class Team{
 constructor(teamName, members){
   _teamName=teamName;
   _members=members;
 }

 get teamName(){
   return this._teamName;
 }
 set teamName(v){
   this._teamName=v;
 }
 get members(){
   return this._members;
 }
 set members(v){
   this._members=v;
 }

}
schema.plugin(mongoosePaginate);
schema.loadClass(Team);
module.exports=mongoose.model('Team', schema);
