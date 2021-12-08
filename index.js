const express = require("express")
const app = express()
const port = 5000

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => { 
    res.render ('home')
 })

app.post('/', (req, res) => {
    console.log(req.body)
  })

  app.listen(port, () => {
    console.log(`Server is running on ${port}`)
  })
