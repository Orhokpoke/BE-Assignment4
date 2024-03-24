const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log(`request from ${req.url} route with ${req.method} method`)
  next()
})

router.get('/', (req, res) => {
  res.json({ id: 1, name: 'Emmanuel Orhokpoke' })
})

router.post('/', (req, res) => {
  res.json({ message: 'Author created', author: req.body })
})

router.put('/', (req, res) => {
  res.json({ message: 'Author updated', author: req.body })
})

router.delete('/', (req, res) => {
  res.json({ message: 'Author deleted' })
})

router.get('/:id', (req, res) => {
  console.log(req.params)
  res.json({ id: req.params.id, name: 'Emmanuel Orhokpoke' })
})

module.exports = router
