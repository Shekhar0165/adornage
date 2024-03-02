const express = require("express");
const cors = require("cors");
require("./conection/Db");
require("./module/orphanage");

const app = express();
app.use(express.json());
app.use(cors());




app.use("/api/", require("./routes/addorphanage"));


app.listen(5000);