const express = require("express")
const cors = require("cors")
var bodyParser = require("body-parser")
var app = express()

var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({ extended: false})
)

var User = require("./routes/user")

app.use("/router",User)

app.listen(port, function () {
    console.log(`Server is up and running on port ${port}`)
})