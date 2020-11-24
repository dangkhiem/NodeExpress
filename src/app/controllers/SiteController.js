const User = require('../models/User.js');


class SiteController {

    home(req, res) {

        User.find({}, function (err, docs) {
            if (!err) {
                res.json(docs);
            } else {
                res.status(400).json({ error: 'toang vcd ra!!' });
            }
        });
    }

    search(req, res) {
        res.send('Search');
    }
}

module.exports = new SiteController;