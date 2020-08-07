const express = require('express');
//2nd method of route handler commonly used
const authorRouter = express.Router();
function router(nav){
var Authors = [{
        name: "Tom and Jerry",
        book: "Joseph Barbara",
        Genre: "Cartoon",
        Image: "tom.jpg"
    },
    {
        name: "Harry Potter",
        book: "J.K.Rowling",
        Genre: "Fantasy",
        Image: "hp.jpg"
    },
    {
        name: "One Hundred Years Of Solitude",
        book: "Gabriel Garcia Marquez",
        Genre: "Fiction",
        Image: "sol.jpg"
    }
]
authorRouter.get(`/`, function(req, res) {
    res.render("Authors", {
        nav: [{ link: '/books', name: 'Books' },
            { link: '/Authors', name: 'Authors' }
        ],
        title: 'Authors Page',
        Authors

    });
});
authorRouter.get('/:id', function(req, res) {

    const id = req.params.id
    res.render('Author', {
        nav,
        name: 'Author Bio',
        Author: Authors[id]

    });
    
});
return authorRouter;
}
module.exports =router; 