'use strict';

const Sequelize = require('sequelize')
const db = require('../index.js')

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageCaption: {
    type: Sequelize.STRING,
  },
  imageAlt: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.DOUBLE)
  }
}, {
  scopes: {
    populated: () => ({
      include: [{ model: db.model('student') }]
    })
  }
});
