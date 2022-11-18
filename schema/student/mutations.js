
const { GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql');
const models = require('../../models');
const { StudentType } = require('../types');
const { student: studentResolver } = require('../student/resolvers');

const mutations = {
    addStudent: {
        type: StudentType,
        args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            lastName: { type: GraphQLNonNull(GraphQLString) },
            email: { type: GraphQLNonNull(GraphQLString) },
            dateOfBirth: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: async (parent, { name, lastName, email, dateOfBirth }) => {
            return await models.Student.create({
                name,
                lastName,
                email,
                dateOfBirth
            });
        }
    },
    deleteStudent: {
        type: StudentType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve: async (parent, { id }) => {
            const student =  await models.Student.findByPk(id);
            if(student) {
                await models.StudentBook.destroy({
                    where: {
                        studentId: id
                    }
                });
                await student.destroy();
                return student;
            }
        }
    },
    relateBook: {
        type: StudentType,
        args: {
            studentId: { type: GraphQLNonNull(GraphQLID) },
            bookId: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve: async (parent, { studentId, bookId }) => {
            const student = await models.Student.findByPk(studentId);
            if(student) {
                student.addBook(bookId);
            }
            return await studentResolver.resolve(null,{ id: studentId });
        }
    }
};

module.exports = mutations;