const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get('/local-user', userController.getUsers);
router.post('/local-user', userController.addUsers);
router.get(
  '/json-placeholder-user',
  userController.getUsersFromJsonPlaceholder
);

module.exports = router;
