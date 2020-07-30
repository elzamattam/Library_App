const express = require('express');
//2nd method of route handler commonly used
const authorRouter = express.Router();
function router(nav){
var authors = [{
        name: "Tom and Jerry",
        book: "Joseph Barbara",
        Genre: "Cartoon",
        img: "tom.jpg"
    },
    {
        name: "Harry Potter",
        book: "J.K.Rowling",
        Genre: "Fantasy",
        img: "hp.jpg"
    },
    {
        name: "One Hundred Years Of Solitude",
        book: "Gabriel Garcia Marquez",
        Genre: "Fiction",
        img: "sol.jpg"
    }
]
authorRouter.get(`/`, function(req, res) {
    res.render("authors", {
        nav: [{ link: '/books', name: 'Books' },
            { link: '/authors', name: 'Authors' }
        ],
        title: 'Authors Page',
        authors

    });
});
authorRouter.get('/:id', function(req, res) {

    const id = req.params.id
    res.render('author', {
        nav,
        name: 'Author Bio',
        author: authors[id]

    });
    
});
return authorRouter;
}
module.exports =router; 