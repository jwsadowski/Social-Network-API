const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/blogDB', {
    //useNewURLParser: true,
    //useUnifiedTopology: true,
})
.then(() => console.log("Database connected!"))
  .catch(err => console.log(err));


module.exports = mongoose.connection;