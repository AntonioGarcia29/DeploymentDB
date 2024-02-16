const { Router } = require('express');
const router = Router();
const mongoose = require('mongoose')

const Animal = mongoose.model('Animal', new mongoose.Schema({
    tipo: String,
    estado: String,
  }))

router.get('/', async (_req, res) => {
    console.log('listando... chanchitos...')
    const animales = await Animal.find();
    return res.send(animales)
  })

router.get('/crear', async (_req, res) => {
    console.log('creando...')
    await Animal.create({ tipo: 'Chanchito', estado: 'Feliz' })
    return res.send('ok')
  })
  



module.exports = router;
