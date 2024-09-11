
import { conn } from "../configs/db";
import { AllCafesResponse } from "../models/cafe";
import { GET_ALL_CAFES, GET_ALL_CAFES_BY_ID, GET_ALL_CAFES_WITH_LOCATION } from "../constants/queries";

export function fetchAllCafes(): Promise<AllCafesResponse[]> {
  return new Promise((resolve, reject) => {
    conn.query(GET_ALL_CAFES, (error, res) => {
      if (error) reject(error)
      resolve(res as AllCafesResponse[])
    })
  })
}

export function fetchCafesByLocation(values: string[]): Promise<AllCafesResponse[]> {
  return new Promise((resolve, reject) => {
    conn.query(GET_ALL_CAFES_WITH_LOCATION, values, (error, res, fields) => {
      if (error) reject(error)
      resolve(res as AllCafesResponse[])
    })
  })
}

export function fetchCafesById(values: string[]): Promise<AllCafesResponse[]> {
  return new Promise((resolve, reject) => {
    conn.query(GET_ALL_CAFES_BY_ID, values, (error, res, fields) => {
      if (error) reject(error)
      resolve(res as AllCafesResponse[])
    })
  })
}