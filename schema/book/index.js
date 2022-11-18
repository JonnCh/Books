
const { BookType } = require('../types');
const resolvers = require('./resolvers');
const mutations = require('./mutations');

module.exports = { BookType, resolvers, mutations };