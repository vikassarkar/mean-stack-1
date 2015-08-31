'use strict';

module.exports = function(app, route) {

    //var contactListSchema = require('../../models/home/contactList');
    var contactListSchema = app.models.contactList;

    app.get('/contactList', function(req, res) {
        console.log("GET CONTACTLIST SERVICE CALL");
        contactListSchema.find(function(err, contactList) {
            if (err) {
                console.log("error to get DB")
                res.send(err);
            } else {
                console.log("Sucess to get DB")
                res.json(contactList);
            }

        });
    });

    app.post('/contactList', function(req, res) {
        console.log("POST CONTACTLIST SERVICE CALL" + req.params.name);
        var contactListNewSchema = new contactListSchema({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number
        })
        contactListNewSchema.save(function(err, contactList) {
            if (err) {
                console.log("error to post DB")
                res.send(err);
            } else {
                console.log("Sucess to post DB")
                res.json(contactList);
            }

        });
    });

    /*app.delete('/contactList', function(req, res) {
        console.log("DELETE ALL CONTACTLIST SCHEMA DATA SERVICE CALL");
        contactListSchema.remove(function(err) {
            if (err) {
                console.log("error to delete by id DB")
                res.send(err);
            } else {
                console.log("Sucess to delete by id DB")
                res.json('');
            }
        });
    });*/

    app.delete('/contactList/:id', function(req, res) {
        console.log(req.params);
        console.log("DELETE CONTACTLIST BY ID SERVICE CALL" + req.params.id);

        contactListSchema.remove({
            _id: req.params.id
        }, function(err) {
            if (err) {
                console.log("error to delete by id DB")
                res.send(err);
            } else {
                console.log("Sucess to delete by id DB")
                res.json('');
            }
        });

        /*contactListSchema.findById(req.params.id, function(err, contact) {
            contact.remove(function(err) {
                if (err) {
                    console.log("error to delete by id DB")
                    res.send(err);
                } else {
                    console.log("Sucess to delete by id DB")
                    res.json('');
                }
            })

        });*/
    });

    app.put('/contactList/:id', function(req, res) {
        /*console.log( req);
        console.log(req.params.name);*/
        console.log(req.body);
        console.log("EDIT CONTACTLIST BY ID SERVICE CALL" + req.params.id);
        contactListSchema.findById(req.params.id, function(err, contact) {
            contact.name = req.body.name;
            contact.email = req.body.email;
            contact.number = req.body.number;

            contact.save(function(err) {
                if (err) {
                    console.log("error to update by id DB")
                    res.send(err);
                } else {
                    console.log("Sucess to update by id DB")
                    res.json('');
                }
            })

        });
    });

    /*
     **Return middleware.
     */
    return function(req, res, next) {
        next();
    };
}