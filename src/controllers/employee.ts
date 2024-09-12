import type { Request, Response } from 'express'
import { conn, promiseConn } from '../configs/db'
import { generateRandomId } from '../utils/random'
import { RANDOM_TYPE } from '../constants/random'
import { getTodaysDate } from '../utils/date'
import { RESPONSE_MESSAGES } from '../constants/messages'
import { AddEmployee, DeleteEmployee, UpdateEmployee } from '../models/employee'
import { conditionals } from '../utils/query'
import { DELETE_FROM_CAFE_EMPLOYEES } from '../constants/queries'

export async function addNewEmployee(req: Request<unknown, unknown, AddEmployee>, res: Response) {
  try {
    console.log('[EMP] body:', req.body)
    // Create connection
    await (await promiseConn).beginTransaction

    // Process data
    const { name, email_address, phone_number, gender, cafe_id } = req.body

    // Insert statements for Employee table
    const id_emp = 'UI' + generateRandomId(RANDOM_TYPE.SHORT).replace("-", '').substring(0, 7)
    const sql_emp = 'INSERT INTO `Employees`(`id`,`name`,`email_address`,`phone_number`,`gender`) VALUES (?,?,?,?,?)'
    const values_emp = [id_emp, name, email_address, phone_number, gender]

    // Insert statements for Employee table
    const id_cafe_emp = generateRandomId()
    const start_date = getTodaysDate()
    const sql_cafe_emp = 'INSERT INTO `CafeEmployees`(`id`,`emp_id`,`cafe_id`,`start_date`) VALUES (?,?,?,?)'
    const values_cafe_emp = [id_cafe_emp, id_emp, cafe_id, start_date]

    // Transactions
    const resp_emp = await conn.execute(sql_emp, values_emp)
    console.log(resp_emp)
    if (cafe_id) {
      const resp_cafe_emp = await conn.execute(sql_cafe_emp, values_cafe_emp)
      console.log(resp_cafe_emp)
    }

    // Release connection
    await (await promiseConn).commit
    res.status(200).send(RESPONSE_MESSAGES.SUCCESS.ADD)
  } catch (error) {
    console.error('[API]', error)
    res.status(404).send(error)
  }
}

export async function updateEmployee(req: Request<unknown, unknown, UpdateEmployee>, res: Response) {
  try {
    console.log('[EMP] body:', req.body)
    // Create connection
    await (await promiseConn).beginTransaction

    // Process data
    const { id, cafe_id, ...rest } = req.body
    const valuesToUpdate = conditionals<Omit<UpdateEmployee, 'id' | 'cafe_emp'>>(rest)

    // Insert statements for Employee table
    const sql_emp = `UPDATE \`Employees\` SET ${valuesToUpdate.keys.map(item => item + '=?').join(',')} WHERE id=?`
    const values_emp = [...valuesToUpdate.values, id]
    const sql_cafe_emp = `UPDATE \`CafeEmployees\` ce SET ce.cafe_id=? WHERE ce.emp_id=?`
    const values_cafe_emp = [cafe_id, id]

    // Transactions
    const resp_emp = await conn.execute(sql_emp, values_emp)
    console.log(resp_emp)
    if (cafe_id) {
      const resp_cafe_emp = await conn.execute(sql_cafe_emp, values_cafe_emp)
      console.log(resp_cafe_emp)
    }

    // Release connection
    await (await promiseConn).commit

    res.status(204).send(RESPONSE_MESSAGES.SUCCESS.UDPATE)
  } catch (error) {
    console.error('[API]', error)
    res.status(404).send(error)
  }
}

export async function deleteEmployee(req: Request<unknown, unknown, DeleteEmployee>, res: Response) {
  try {
    console.log('[EMP] req.body:', req.body)
    const { id } = req.body

    const sql = DELETE_FROM_CAFE_EMPLOYEES
    const resp = await conn.execute(sql, [id])

    console.log(resp)

    res.status(200).send(RESPONSE_MESSAGES.SUCCESS.DELETE)
  } catch (error) {
    console.error('[API]', error)
    res.status(404).send(error)
  }
}