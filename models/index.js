const mongoose = require('mongoose');
const Schema = mongoose.Schema; // MODELO ES5 DE MONGOOSE
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = Schema({

});

class Index{
 constructor(){

 }

}
schema.plugin(mongoosePaginate);
schema.loadClass(Index);
module.exports=mongoose.model('Index', schema);
