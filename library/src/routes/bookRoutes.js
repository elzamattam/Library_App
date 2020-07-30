const express = require('express');
//2nd method of route handler commonly used
const booksRouter = express.Router();
function router(nav)
{
    var books = [{
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
]

booksRouter.get(`/`, function(req, res) {
    res.render("books", {
        nav,
        title: 'Library App',
        books

    });
});
booksRouter.get('/:id', function(req, res) {

    const id = req.params.id
    res.render('book', {
        nav,
        title: 'Library App',
        book: books[id]

    });
});
return booksRouter;
}

module.exports =router;