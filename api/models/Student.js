/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    tableName: "student",
    attributes: {
        id: {
            type: 'integer',
            primaryKey: true
        },
        student_id: {
            type: 'integer',
            autoIncrement: true
        },
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        phone: {
            type: 'integer'
        },
        department: {
            type: 'string'
        }
    }
};

