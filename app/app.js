import express from 'express'
const app = express()
app.use(express.json())

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// CREATE
app.post('/cadastro', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
      }
    })

    res.status(201).json(user)
  }
  catch(err) {
    console.error(`Erro ao criar usuário: ${err}`)
  }
})

// READ
app.get('/cadastro', async (req, res) => {
  try {
    const listUsers = await prisma.user.findMany()
    res.status(200).json(listUsers)
  }
  catch(err) {
    console.error(err)
  }
})

// Cp3KrVbKmOSlM0uC

export default app