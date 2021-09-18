const express = require('express')
const mongoose = require('mongoose')
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const exphbs = require('express-handlebars')
const AutoDataRoutes = require('./routes/autodata')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()

app.engine(
    "hbs",
    exphbs({
      extname: "hbs",
      defaultLayout: 'main',
      handlebars: allowInsecurePrototypeAccess(Handlebars)
    })
  )
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(AutoDataRoutes)

async function start() {
    try {
        await mongoose.connect('mongodb+srv://ayan:ficken042099@cluster0.yt4w4.mongodb.net/myFirstDatabase', {
            useNewUrlParser: true
        })
        app.listen(PORT, () => {
            console.log('Server has been working...')
        })
    } catch (e) {
        console.log(e)
    }
}

start()
