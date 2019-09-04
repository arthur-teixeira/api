const app = require("express")();
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

app.use(cors())
app.use(morgan("tiny"))
app.use("/diagramas", require("./routes/routes"))

app.use((err, req, res, next) => {
   res.json(err)
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("api na porta " + PORT));