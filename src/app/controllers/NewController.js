
class NewController {

    index(req, res) {
        res.send('News!!');
    }

    show(req, res) {
        res.send('Details !!');
    }
}

module.exports = new NewController;