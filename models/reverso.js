const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = Schema({
  _nombre:String,
  _dado:String,
  _cuando:String,
  _entonces:String,
});

class Reverso {
  constructor(dado,cuando,entonces) {
    _nombre=nombre;
    _dado=dado;
    _cuando=cuando;
    _entonces=entonces;
  }
  get nombre(){
    return this._nombre;
  }
  set nombre(v){
    this._nombre=v;
  }
  get dado(){
    return this._dado;
  }
  set dado(v){
    this._dado=v;
  }
  get cuando(){
    return this._cuando;
  }
  set cuando(v){
    this._cuando=v;
  }
  get entonces(){
    return this._entonces;
  }
  set entonces(v){
    this._entonces=v;
  }

}
schema.plugin(mongoosePaginate);
schema.loadClass(Reverso);
module.exports=mongoose.model('Reverso', schema);
