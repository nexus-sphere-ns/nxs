const mongoose = require("mongoose");
const connect = mongoose.connect(
  "mongodb+srv://nexusspherens:IUQKFfWwX02zrysZ@cluster0.aa3ict5.mongodb.net/nxs"
);

// Check database connected or not
connect
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch(() => {
    console.log("Database cannot be Connected");
  });

// Create Schema
const LoginSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// collection part
const newCollection = new mongoose.model("users", LoginSchema);

module.exports = newCollection;
