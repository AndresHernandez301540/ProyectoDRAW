const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = Schema({
  _projectId:{type: Schema.Types.ObjectId,ref:'Project'},
  _bien: String,
  _mal:String,
  _mejorar:String
});

class Retro {
  constructor(projectId,bien,mal,mejorar) {
    _projectId=projectId
    _bien=bien;
    _mal=mal;
    _mejorar=mejorar;
  }
  get projectId(){
    return this._projectId;
  }
  set projectId(v){
    this._projectId=v;
  }
  get bien(){
    return this._bien;
  }
  set bien(v){
    this._bien=v;
  }
  get mal(){
    return this._mal;
  }
  set mal(v){
    this._mal=v;
  }
  get mejorar(){
    return this._mejorar;
  }
  set mejorar(v){
    this._mejorar=v;
  }

}
schema.plugin(mongoosePaginate);
schema.loadClass(Retro);
module.exports=mongoose.model('Retro', schema);
