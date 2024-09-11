import express from 'express'

import type { Request, Response } from 'express'
import type { AddCafe, DeleteCafe, UpdateCafe } from '../../models/cafe'
import { conn, promiseConn } from '../../configs/db'
import { conditionals } from '../../utils/query'
import { generateRandomId } from '../../utils/random'

const CafeRouter = express.Router()

async function addNewCafe(req: Request<any, any, AddCafe>, res: Response) {
  try {
    const { name, location, description } = req.body

    const sql = 'INSERT INTO `Cafes`(`id`,`name`,`location`,`description`) VALUES (?,?,?,?)'
    const values = [generateRandomId(), name, location, description]

    const resp = await conn.execute(sql, values)

    res.status(200).send()
  } catch (error) {
    console.error(error)
    res.status(404).send(error)
  }
}

async function updateCafe(req: Request<any, any, UpdateCafe>, res: Response) {
  try {
    const { id, ...rest } = req.body
    const valuesToUpdate = conditionals<Omit<UpdateCafe, 'id'>>(rest)

    const sql = `UPDATE \`Cafes\` SET ${valuesToUpdate.keys.map(item => item + '=?').join(',')} WHERE id=?`
    const values = [...valuesToUpdate.values, id]

    const resp = await conn.execute(sql, values)

    res.status(204).send('Successfully updated')
  } catch (error) {
    console.error(error)
    res.status(404).send(error)
  }
}

// TODO: Might need to support ON DELETE CASCADE to force deleting of employees as well
async function deleteCafe(req: Request<any, any, DeleteCafe>, res: Response) {
  try {
    const { id } = req.body
    // Create connection
    await (await promiseConn).beginTransaction

    // Transactions
    await (await promiseConn).execute('DELETE FROM `CafeEmployees` WHERE id = ?', [id])
    const resp = await (await promiseConn).execute('DELETE FROM `Cafes` WHERE id = ?', [id])

    // Release connection
    await (await promiseConn).commit

    res.status(200).send('Successfully deleted')
  } catch (error) {

    await (await promiseConn).rollback
    console.error(error)
    res.status(404).send(error)
  }
}

CafeRouter.post('/', addNewCafe)
CafeRouter.put('/', updateCafe)
CafeRouter.delete('/', deleteCafe)

export default CafeRouter