
const { GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt } = require('graphql');
const models = require('../../models');
const { BookType } = require('../types');

const mutations = {
    addBook: {
        type: BookType,
        args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            description: { type: GraphQLNonNull(GraphQLString) },
            numberOfPages: { type: GraphQLNonNull(GraphQLInt) },
            publishedAt: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: async(parent, { name, description, numberOfPages, publishedAt }) => {
            return await models.Book.create({
                name,
                description,
                numberOfPages,
                publishedAt
            });
        }
    },
    deleteBook: {
        type: BookType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve: async (parent, { id }) => {
            const book =  await models.Book.findByPk(id);
            if(book) {
                await models.StudentBook.destroy({
                    where: {
                        bookId: id
                    }
                });
                await book.destroy();
                return book;
            }
        }
    }
};

module.exports = mutations;