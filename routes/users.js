const express = require('express');
const router = express.Router();
// chained route function!!!
// router.route('/:id').get((req, res) => {
//     res.send(`get user with id ${req.params.id}`)
    
//  }).put((req, res) => {
//     res.send(`put user with id ${req.params.id}`)
// }).delete((req, res) => {
//     res.send(`delete user with id ${req.params.id}`)
// })











// seperated router methods functions
router.get('/', (req, res) => {
    res.send('user list')
})
router.get('/new', (req, res) => {
    res.render('users/new', {firstName: 'Test'})
})

router.post('/', (req, res) => {
   alert(req.body.firstName)
})
router.get('/:id', (req, res) => {
    console.log(req.user)
    res.send(`get user with id ${req.params.id}`)
})
router.put('/:id', (req, res) => {
    res.send(`get user with id ${req.params.id}`)
})
router.delete('/:id', (req, res) => {
    res.send(`get user with id ${req.params.id}`)
})



const users = [{name: "Kyle"}, {name: 'Sally'}]
router.param('id', (req, res, next, id)=>{
    req.user = users[id]
    next()
})


module.exports = router;