import express from 'express'
import { getAllCafes } from '../../controllers/cafes'
const CafesRouter = express.Router()

CafesRouter.get('/', getAllCafes)

export default CafesRouter
