import express from 'express'
import { addNewEmployee, deleteEmployee, updateEmployee } from '../../controllers/employee'

const EmployeeRouter = express.Router()

EmployeeRouter.post('/', addNewEmployee)
EmployeeRouter.put('/', updateEmployee)
EmployeeRouter.delete('/', deleteEmployee)

export default EmployeeRouter 