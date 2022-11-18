
const { GraphQLID, GraphQLList } = require('graphql');
const models = require('../../models');
const { StudentType } = require('../types');

const resolvers = {
    students: {
        type: new GraphQLList(StudentType),
        resolve: async () => {
            return await models.Student.findAll();
        }
    },
    student: {
        type: StudentType,
        args: { id: { type: GraphQLID } },
        resolve: async (parent, { id }) => {
           const student =  await models.Student.findByPk(id);
           if(student) {
            const books = await student.getBooks();
            return { ...student.dataValues, books }
           }
        }
    }
};


module.exports = resolvers;