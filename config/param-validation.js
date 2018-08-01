const Joi = require('joi');

module.exports = {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string()
        .regex(/^[1-9][0-9]{9}$/)
        .required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string()
        .regex(/^[1-9][0-9]{9}$/)
        .required()
    },
    params: {
      userId: Joi.string()
        .hex()
        .required()
    }
  },

  // POST /api/pets
  createPet: {
    body: {
      name: Joi.string().required()
    }
  },

  // UPDATE /api/pets/:userId
  updatePet: {
    body: {
      name: Joi.string().required()
    },
    params: {
      petId: Joi.string()
        .hex()
        .required()
    }
  },

  // POST /api/adopt
  createAdopt: {
    body: {
      contact: Joi.string().required()
    }
  },

  // UPDATE /api/adopt/:userId
  updateAdopt: {
    params: {
      adoptId: Joi.string()
        .hex()
        .required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
