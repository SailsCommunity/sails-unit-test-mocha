/**
 * StudentController
 *
 * @description :: Server-side logic for managing Students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    create: function (req, res) {

        //Reading input from request object
        let name = req.param("name");
        let email = req.param("email");
        let phone = req.param("phone");
        let department = req.param("department");
        let studentId = req.param("student_id");

        //Inserting record in mongoDB
        Student.create({
            name: name,
            email: email,
            phone: phone,
            department: department,
            student_id: studentId
        }).then(function (student) {
            //Returning success response
            return res.send({
                "success": true,
                "message": "Record created successfully",
                "data": student
            });
        }).catch(function (err) {
            sails.log.debug(err);
            //Returning failure response
            return res.send({
                "success": false,
                "message": "Unable to create record"
            });
        });
    },

    get: function (req, res) {

        Student.find()
            .then(function (students) {
                if(!students || students.length == 0) {
                    return res.send({
                        "success": false,
                        "message": "No records found in DB"
                    });
                }

                return res.send({
                    "success": true,
                    "message": "Records fetched",
                    "data": students
                });
            })
            .catch(function (err) {
                sails.log.debug(err);
                return res.send({
                    "success": false,
                    "message": "Unable to fetch records"
                });
            });
    },

    update: function (req, res) {

        let studentId = req.param("student_id");
        let name = req.param("name");
        let email = req.param("email");
        let phone = req.param("phone");
        let department = req.param("department");

        //Update function takes two object input,
        //1. key:value pair for searching the record
        //2. key:value pairs for updating the records
        Student.update({student_id: studentId}, {name: name, email: email, phone: phone, department: department})
            .then(function (student) {
                return res.send({
                    "success": true,
                    "message": "Record updated",
                    "data": student
                });
            })
            .catch(function (err) {
                sails.log.debug(err);
                return res.send({
                    "success": false,
                    "message": "Unable to update record"
                });
            });
    },

    delete: function (req, res) {

        let studentId = req.param("student_id");

        //Delete function takes key:value pair by which it will search and delete the record
        Student.destroy({student_id: studentId})
            .then(function (student) {
                return res.send({
                    "success": true,
                    "message": "Record deleted successfully",
                    "data": student
                });
            })
            .catch(function (err) {
                sails.log.debug(err);
                return res.send({
                    "success": false,
                    "message": "Unable to delete record"
                });
            });
    }

};

