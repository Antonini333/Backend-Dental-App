const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.get('/', UserController.getAll); //CHECK
router.get('/:id', UserController.getById); //CHECK
router.get('/email/:email', UserController.getByEmail); //CHECK

router.post('/register', UserController.register); //CHECK
router.post('/login', UserController.login); //CHECK (devuelve token firmado)
router.post('/logout', UserController.logout);

router.put('/:id', UserController.update); // CHECK

router.delete('/:id', UserController.deleteById); //CHECK
router.delete('/email/:email', UserController.deleteByEmail); //CHECK



module.exports = router;
