const express = require('express');
//2nd method of route handler commonly used
const loginRouter = express.Router();

function router(nav) {
    loginRouter.get(`/`, function (req, res) {
        res.render("login", {
            nav,
            title: 'Login Page'


        });
    });
    return loginRouter;

}

module.exports = router;