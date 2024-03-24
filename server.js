const express = require('express')
const app = express()
const logger = require('./middleware/logger')
const PORT = process.env.PORT || 8900

app.use(express.json())
app.use(logger)

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Welcome to our Page')
})

app.use('/author', require('./routes/authorRoute'))

app.all('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
