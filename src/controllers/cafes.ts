import type { NextFunction, Request, Response } from 'express'
import { AllCafesRequest } from '../models/cafe'
import { fetchAllCafes, fetchCafesById, fetchCafesByLocation } from "../api/cafes"
import { processCafesData } from "../views/cafes.views"

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
    console.error(error)
    res.status(404).send(error)
  }
}
