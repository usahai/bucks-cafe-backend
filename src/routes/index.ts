import Express from "express"
import CafesRouter from './cafes'
import CafeRouter from './cafe'
import EmployeesRouter from './employees'
import EmployeeRouter from './employee'

const router = Express.Router()

router.use('/cafes', CafesRouter)
router.use('/cafe', CafeRouter)
router.use('/employees', EmployeesRouter)
router.use('/employee', EmployeeRouter)

export default router