const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = Schema({
  _developmentTeam:String,
  _memberTeam:String
});

class Team{
 constructor(developmentTeam, memberTeam){
   _developmentTeam=developmentTeam;
   _memberTeam=memberTeam;
 }

 get developmentTeam(){
   return this._teamName;
 }
 set developmentTeam(v){
   this._teamName=v;
 }
 get memberTeam(){
   return this._memberTeam;
 }
 set memberTeam(v){
   this._memberTeam=v;
 }

}
schema.plugin(mongoosePaginate);
schema.loadClass(Team);
module.exports=mongoose.model('Team', schema);
