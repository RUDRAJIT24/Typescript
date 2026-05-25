import express from 'express'
import { createTodo } from '../controllers/todoController.js'

export const todoRouter = express.Router()

todoRouter.post('/createTodo', createTodo)
