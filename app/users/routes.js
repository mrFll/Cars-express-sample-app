const controllers = require('./controller.js');
const router = require('express').Router();

router.get('/', controllers.getUsers);
router.get('/:id', controllers.getUser);
router.post('/', controllers.createUser);
router.put('/:id', controllers.updateUser);
router.delete('/:id', controllers.deleteUser);

module.exports = router;
