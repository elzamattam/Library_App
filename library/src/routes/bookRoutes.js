const express = require('express');
//2nd method of route handler commonly used
const booksRouter = express.Router();
const Bookdata=require('../model/bookdata');
function router(nav)
{
   /* var books = [{
        title: "Tom and Jerry",
        Author: "Joseph Barbara",
        Genre: "Cartoon",
        img: "tom.jpg"
    },
    {
        title: "Harry Potter",
        Author: "J.K.Rowling",
        Genre: "Fantasy",
        img: "hp.jpg"
    },
    {
        title: "One Hundred Years Of Solitude",
        Author: "Gabriel Garcia Marquez",
        Genre: "Fiction",
        img: "sol.jpg"
    }
]*/

booksRouter.get(`/`, function(req, res) {
    Bookdata.find()
    .then(function(books){
        res.render("books", {
            nav,
            title: 'Library App',
            books
    });
    

    })
});
booksRouter.get(`:/id`, function(req, res) {

    const id = req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render('book', {
            nav,
            title: 'Library App',
            book
    
    });
    
    })
});
return booksRouter;
}

module.exports =router;