const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = Schema({

});

class Dashboard{
 constructor(){

 }

}
schema.plugin(mongoosePaginate);
schema.loadClass(Dashboard);
module.exports=mongoose.model('Dashboard', schema);
