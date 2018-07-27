const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

const Schema = mongoose.Schema;
/**
 * Adopt Schema
 */
const AdoptSchema = new mongoose.Schema({
  pet: {
    type: Schema.Types.ObjectId,
    ref: 'Pet',
    required: true
  },
  message: {
    type: String
  },
  contact: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
AdoptSchema.method({});

/**
 * Statics
 */
AdoptSchema.statics = {
  /**
   * Get pet
   * @param {ObjectId} id - The objectId of pet.
   * @returns {Promise<Adopt, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((pet) => {
        if (pet) {
          return pet;
        }
        const err = new APIError('No such pet exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List pets in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of pets to be skipped.
   * @param {number} limit - Limit number of pets to be returned.
   * @returns {Promise<Adopt[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Adopt
 */
module.exports = mongoose.model('Adopt', AdoptSchema);
