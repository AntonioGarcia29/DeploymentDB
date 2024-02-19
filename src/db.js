const mongoose = require('mongoose');

// MongoDB connection URL
 const mongoURI = 'mongodb://mongo.mondongo.svc.cluster.local:27017/mydatabase';
    
    // Connect to MongoDB
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    
    // Check for successful connection
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });
    