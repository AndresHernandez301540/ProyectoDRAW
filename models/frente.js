const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = Schema({
  _como:String,
  _quiero:String,
  _manera:String,
  _prioridad:String,
  _tamaño:String
});

class Frente {
  constructor(como,quiero,manera,prioridad,tamaño) {
    _como=como;
    _quiero=quiero;
    _manera=manera;
    _prioridad=prioridad;
    _tamaño=tamaño;
  }

  get como(){
    return this._como;
  }
  set como(v){
    this._como=v;
  }
  get quiero(){
    return this._quiero;
  }
  set quiero(v){
    this._quiero=v;
  }
  get manera(){
    return this._manera;
  }
  set manera(v){
    this._manera=v;
  }
  get prioridad(){
    return this._prioridad;
  }
  set prioridad(v){
    this._prioridad=v;
  }
  get tamaño(){
    return this._tamaño;
  }
  set tamaño(v){
    this._tamaño=v;
  }

}
schema.plugin(mongoosePaginate);
schema.loadClass(Frente);
module.exports=mongoose.model('Frente', schema);
