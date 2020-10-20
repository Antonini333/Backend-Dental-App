const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.get('/', UserController.getAll); //CHECKED
router.get('/:id', UserController.getById); //CHECKED
router.get('/email/:email', UserController.getByEmail); //CHECKED

router.post('/register', UserController.register); //CHECKED 
router.post('/login', UserController.login); //CHECKED 
router.post('/logout', UserController.logout); //CHECKED 

router.put('/:id', UserController.update); // CHECKED 

router.delete('/:id', UserController.deleteById); //CHECKED
router.delete('/email/:email', UserController.deleteByEmail); //CHECKED



module.exports = router;
