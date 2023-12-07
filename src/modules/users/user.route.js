import express from 'express'
import { getHistory, login, singUp } from './user.controller.js'

export const router = express.Router()

router.post('/sing-up', singUp)

router.post('/login', login)

router.get('/:id/history', getHistory)