var request = require('supertest');
request = request('http://localhost:1337/api/'); //root url

describe("Mocha Unit Test", function () {
    describe("simple crud operations test", function () {
        it("should return failed response if no records found", function (done) {
            request.get("student/get")
                .set("Accept", "application/json")
                .expect(200, {
                    "success": false,
                    "message": "No records found in DB"
                } ,done);
        });
        it("should create student and return success", function (done) {
            request.post("student/create")
                .set("Accept", "application/json")
                .send({name: "Sailsit", email: "developer@sailsit.com", phone: "9999999999", department: "sailsjs", student_id: 1})
                .expect(200)
                .end(function (err, res) {
                    if(res.body.data.email === "developer@sailsit.com") {
                        done();
                    }
                });
        });
        it("should update name and return success", function (done) {
            request.post("student/update/1")
                .set("Accept", "application/json")
                .send({name: "SailsitUpdated", email: "developer@sailsit.com", phone: "9999999999", department: "sailsjs", student_id: 1})
                .expect(200)
                .end(function (err, res) {
                    if(res.body.success) {
                        done();
                    } else {
                        throw ({msg: "not created"});
                    }
                });
        });
        it("should return student list", function (done) {
            request.get("student/get")
                .set("Accept", "application/json")
                .expect(200)
                .end(function (err, res) {
                    if(res.body.data instanceof Array && res.body.data.length > 0) {
                        done();
                    }
                });
        });
        it("should delete the student with id 1", function (done) {
            request.delete("student/delete/1")
                .set("Accept", "application/json")
                .expect(200)
                .end(function (err, res) {
                    if(res.body.success) {
                        done();
                    }
                });
        })
    });
});