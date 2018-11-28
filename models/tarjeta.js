const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = Schema({
  _projectId:{type: Schema.Types.ObjectId,ref:'Project'},
  _nombre: String,
  _como:String,
  _quiero:String,
  _manera:String,
  _prioridad:String,
  _tamaño:Number,
  _unidad:String,
  _dado:String,
  _cuando:String,
  _entonces:String,
  _hrsTrab:Number,
  _backlog:String,
  _terminado:Boolean
});

class Tarjeta {
  constructor(projectId,como,quiero,manera,prioridad,tamaño) {
    _projectId=projectId;
    _nombre=nombre;
    _como=como;
    _quiero=quiero;
    _manera=manera;
    _prioridad=prioridad;
    _tamaño=tamaño;
    _unidad=unidad;

    _dado=dado;
    _cuando=cuando;
    _entonces=entonces;

    _hrsTrab=hrsTrab;
    _backlog=backlog;
    _terminado=terminado;
  }
  get projectId(){
    return this._projectId;
  }
  set projectId(v){
    this._projectId=v;
  }
  get nombre(){
    return this._nombre;
  }
  set nombre(v){
    this._nombre=v;
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
  get unidad(){
    return this._unidad;
  }
  set unidad(v){
    this._unidad=v;
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

  get hrsTrab(){
    return this._hrsTrab;
  }
  set hrsTrab(v){
    this._hrsTrab=v;
  }
  get backlog(){
    return this._backlog;
  }
  set backlog(v){
    this._backlog=v;
  }
  get terminado(){
    return this._terminado;
  }
  set terminado(v){
    this._terminado=v;
  }

}
schema.plugin(mongoosePaginate);
schema.loadClass(Tarjeta);
module.exports=mongoose.model('Tarjeta', schema);
