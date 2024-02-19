const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo.mondongo.svc.cluster.local:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Mondongo is connected to ', db.connection.host))
    .catch(error => console.error('Error connecting to Mondongo:', error));

    