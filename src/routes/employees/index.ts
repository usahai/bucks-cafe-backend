import express from 'express'
import { getAllEmployees } from '../../controllers/employees'

const EmployeesRouter = express.Router()

EmployeesRouter.get('/', getAllEmployees)

export default EmployeesRouter
