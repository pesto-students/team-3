const express = require('express');
const router = express.Router();
const userSchema = require('../schemas/User');
const userController = require('../controllers/user');

router.post(
  '/signup',
  userSchema.validate('createUser'),
  userController().userCreate,
);

router.post(
  '/login',
  userSchema.validate('loginUser'),
  userController().userLogin,
);

module.exports = router;
