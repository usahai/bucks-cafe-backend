import type { Request, Response } from 'express'
import { AllEmployees } from '@/models/employee'
import { GET_ALL_EMPLOYEES, GET_ALL_EMPLOYEES_BY_CAFE, GET_EMPLOYEE_BY_ID } from '@/constants/queries'
import { conn } from '@/configs/db'

export const getAllEmployees = async (req: Request<any, any, any, AllEmployees>, res: Response) => {
  try {
    const { cafe_id, emp_id } = req.query

    if (cafe_id) {
      const [data, _] = await conn.promise().query(GET_ALL_EMPLOYEES_BY_CAFE, [cafe_id])
      res.status(200).send(data)
      return
    } else if (emp_id) {
      const [data, _] = await conn.promise().query(GET_EMPLOYEE_BY_ID, [emp_id])
      res.status(200).send(data)
      return
    }

    const [data, _] = await conn.promise().query(GET_ALL_EMPLOYEES)
    res.status(200).send(data)
  } catch (error) {
    console.error('[API]', error)
    res.status(404).send(error)
  }
}
