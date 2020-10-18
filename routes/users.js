const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.get('/', UserController.getAll); // admin rol //http://localhost:3000/users/
router.get('/:id', UserController.getById); //http://localhost:3000/users/INSERT-ID
router.get('/email/:email', UserController.getByEmail); //http://localhost:3000/users/email/INSERT-EMAIL

router.post('/', UserController.register);

router.put('/:id', UserController.update);


module.exports = router;
