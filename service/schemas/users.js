const { Schema, model } = require("mongoose");

const user = new Schema(
    {
        name: {
          type: String,
          required: [true, 'Set name for contact'],
        },
        email: {
          type: String,
        },
        phone: {
          type: String,
        },
        favorite: {
          type: Boolean,
          default: false,
        },
      }
);

const User = model('user', user);

module.exports = User;