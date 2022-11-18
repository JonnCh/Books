
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const StudentSchema = require('./student');
const BookSchema = require('./book');

const query = new GraphQLObjectType({ 
    name: 'RootQueryType',
    fields: {
        ...StudentSchema.resolvers,
        ...BookSchema.resolvers,
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...StudentSchema.mutations,
        ...BookSchema.mutations,
    }
});

module.exports = new GraphQLSchema({
    query,
    mutation,
})