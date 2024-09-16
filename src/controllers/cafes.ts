import type { NextFunction, Request, Response } from 'express'
import { AddCafe, AllCafesRequest, DeleteCafe, UpdateCafe } from '@/models/cafe'
import { fetchAllCafes, fetchCafesById, fetchCafesByLocation } from "@/api/cafes"
import { processCafesData } from "@/views/cafes.views"
import { conn, promiseConn } from '@/configs/db'
import { generateRandomId } from '@/utils/random'
import { conditionals } from '@/utils/query'

export const getAllCafes = async (req: Request<any, any, any, AllCafesRequest>, res: Response) => {
  const { id, location } = req.query

  if (id && location) {
    res.status(404).send({
      message: 'Invalid query parameters'
    })
    return
  }

  try {
    const data = await (location
      ? fetchCafesByLocation([location])
      : id
        ? fetchCafesById([id])
        : fetchAllCafes()
    )

    if (!data) res.status(404).send({
      message: 'Cannot find cafes'
    })

    const processedData = id ? data[0] : processCafesData(data)

    res.status(200).send(processedData)
  } catch (error) {
    console.error('[API]', error)
    res.status(404).send(error)
  }
}

export async function addNewCafe(req: Request<any, any, AddCafe>, res: Response) {
  try {
    const { name, location, description } = req.body

    const sql = 'INSERT INTO `Cafes`(`id`,`name`,`location`,`description`) VALUES (?,?,?,?)'
    const values = [generateRandomId(), name, location, description]

    const resp = await conn.execute(sql, values)

    res.status(200).send()
  } catch (error) {
    console.error('[API]', error)
    res.status(404).send(error)
  }
}

export async function updateCafe(req: Request<any, any, UpdateCafe>, res: Response) {
  try {
    const { id, ...rest } = req.body
    const valuesToUpdate = conditionals<Omit<UpdateCafe, 'id'>>(rest)

    const sql = `UPDATE \`Cafes\` SET ${valuesToUpdate.keys.map(item => item + '=?').join(',')} WHERE id=?`
    const values = [...valuesToUpdate.values, id]

    const resp = await conn.execute(sql, values)

    res.status(204).send('Successfully updated')
  } catch (error) {
    console.error('[API]', error)
    res.status(404).send(error)
  }
}

export async function deleteCafe(req: Request<any, any, DeleteCafe>, res: Response) {
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
    console.error('[API]', error)
    res.status(404).send(error)
  }
}
