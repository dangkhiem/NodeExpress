const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/app1', {
            useNewUrlParser: true,
            useUnifiedTopology : true
        });
        console.log('Connect successfully!!');
    } catch (err) {
        console.log('Connect failed!!');
    }
}

module.exports = { connect };