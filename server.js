const express = require("express")
const path = require("path")

const app = express()

// Serve static files from the React app

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")))
// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Server listening on ${port}`)
