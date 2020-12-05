const { body } = require('express-validator/check');

exports.validate = (method) => {
  switch (method) {
    case 'createUser': {
      console.log(body);
      return [
        body('username', 'Please enter a valid username').exists(),
        body('email', 'Please enter a valid email').exists().isEmail(),
        body('password', 'Please enter a valid password').notEmpty().isLength({
          min: 6,
        }),
      ];
    }
    case 'loginUser': {
      return [
        body('email', 'Please enter a valid email').exists().isEmail(),
        body('password', 'Please enter a valid password').notEmpty().isLength({
          min: 6,
        }),
      ];
    }
  }
};
