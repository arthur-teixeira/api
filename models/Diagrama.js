const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const DiagramaSchema = new Schema({}, {strict: false});

module.exports = mongoose.model("processo", DiagramaSchema, "processo")