
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        numberOfPages: { type: GraphQLInt },
        publishedAt: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        students: { type: new GraphQLList(StudentType) }
    })
});

const StudentType = new GraphQLObjectType({
    name: 'Student',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        dateOfBirth: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        books: { type: new GraphQLList(BookType) }
    })
});

module.exports = { BookType, StudentType };