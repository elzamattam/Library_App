const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
/*const url = 'mongodb://localhost:27017/library';
mongoose.connect(
    url, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);*/
const Schema=mongoose.Schema;
const BookSchema=new Schema(
    {
        title:String,
        Author:String,
        Genre:String,
        Image:String
    }
);
var Bookdata=mongoose.model('BookData',BookSchema);
module.exports=Bookdata;