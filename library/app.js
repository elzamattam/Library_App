const express = require('express');
var app = new express();
const nav = [{
        link: '/',
        name: 'Home'

    },
    {
        link: '/books',
        name: 'Books'
    },
    {
        link: '/authors',
        name: 'Authors'
    },
    {
        link: '/login',
        name: 'Login'
    },
    {
        link: '/signup',
        name: 'Sign Up'
    }

];


const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);


app.get(`/`, function (req, res) {
    res.render("index", {
        nav,
        title: 'Library'

    });
});


app.listen(5000, () => {
    console.log('Server is running at port 5000')
});
//1st method of applying router
/*app.get('/books', function(req, res) {
    res.render("books", {
        nav: [{ link: '/books', name: 'Books' },
            { link: '/authors', name: 'Authors' }
        ],
        title: 'library App'
    });
});*/