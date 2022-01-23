const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://root:roti9599@cluster0.iqekj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/sim'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose;
