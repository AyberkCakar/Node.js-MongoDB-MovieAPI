const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
   title:{
       type: String,
       required: [true, '`{PATH}` alanı zorunludur.'],
       maxlength: 20,
       minlength: 2,
   },
    category: {
      type: String,
      maxlength: 30,
      minlength: 2,
    },
    country: {
        type: String,
        maxlength: 30,
        minlength: 2,
    },
    year: {
        type: Number,
        max: 2040,
        min: 1900
    },
    imdb_score: {
       type: Number,
        max: 10,
        min: 0,
    },
    director_id: Schema.Types.ObjectId,
    createdAt:{
       type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('movie', MovieSchema);