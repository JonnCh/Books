
const { GraphQLID, GraphQLList } = require('graphql');
const models = require('../../models');
const { BookType } = require('../types');

const resolvers = {
    books: {
        type: new GraphQLList(BookType),
        resolve: async () => {
            return await models.Books.findAll();
        }
    },
    book: {
        type: BookType,
        args: { id: { type: GraphQLID } },
        resolve: async (parent, { id }) => {
            const book =  await models.Book.findByPk(id);
            if(book) {
                const students = await book.getStudents();
                return { ...book.dataValues, students }
            }
        }
    }
};


module.exports = resolvers;