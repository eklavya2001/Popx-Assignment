const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://eklavyamishra6:Ekchua%40123@cluster0.e2gln.mongodb.net/instagramData?retryWrites=true&w=majority"
    )

    .then(() => console.log("MongoDb connected"))
    .catch((err) => console.log("error", err));
}

module.exports = connectToDb;
