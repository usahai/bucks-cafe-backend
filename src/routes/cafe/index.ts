import express from 'express'
import { addNewCafe, updateCafe, deleteCafe } from '../../controllers/cafes'

const CafeRouter = express.Router()

CafeRouter.post('/', addNewCafe)
CafeRouter.put('/', updateCafe)
CafeRouter.delete('/', deleteCafe)

export default CafeRouter