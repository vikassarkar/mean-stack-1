'use strict';

module.exports = function(app, route) {

    var componentSchema = app.models.component;

    app.get('/component', function(req, res) {
        console.log("GET COMPONENT SERVICE CALL");
        componentSchema.find(function(err, componentList) {
            if (err) {
                console.log("error to get DB")
                res.send(err);
            } else {
                console.log("Sucess to get DB")
                res.json(componentList);
            }

        });
    });

    app.post('/component', function(req, res) {
        console.log("POST COMPONENT SERVICE CALL" + req.params.name);
        var componentNewSchema = new componentSchema({
            item: req.params.item,
            quantity: req.params.quantity
        })
        contactListNewSchema.save(function(err, componentList) {
            if (err) {
                console.log("error to post DB")
                res.send(err);
            } else {
                console.log("Sucess to post DB")
                res.json(componentList);
            }

        });
    });


    /*
     **Return middleware.
     */
    return function(req, res, next) {
        next();
    };
}
