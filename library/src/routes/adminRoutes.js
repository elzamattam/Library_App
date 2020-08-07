const express=require('express');
const adminRouter=express.Router();
const Bookdata=require('../model/bookdata');

function router(nav){
adminRouter.get('/',function(req,res)
{
    res.render('addbook',{
        nav,
        title:'Library'
    })
})
adminRouter.post('/add',function(req,res){
    var item={
        title: req.body.title,
        Author:req.body.author,
        Genre:req.body.genre,
        Image:req.body.image
    }
    var book=Bookdata(item);
    book.save();//saving to database
    res.redirect('/books');

    });

return adminRouter;
}
module.exports=router;
