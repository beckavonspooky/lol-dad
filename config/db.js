const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/loldad';

mongoose.connect(connectionString, { useNewUrlParser: true,
                                     useUnifiedTopology: true,
                                     useCreateIndex: true,
                                     useFindAndModify: false
                                    });
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
