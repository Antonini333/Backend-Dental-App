const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.get('/', UserController.getAll); // admin rol
router.get('/:id', UserController.getById);
router.get('/email/:email', UserController.getByEmail);

router.post('/', UserController.register);


module.exports = router;
