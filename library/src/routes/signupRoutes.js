const express = require('express');
//2nd method of route handler commonly used
const signupRouter = express.Router();
function router(nav){

signupRouter.get(`/`, function(req, res) {
    res.render("signup", {
        nav,
        title: 'signup page'
    });
});
return signupRouter;
}

module.exports = router;