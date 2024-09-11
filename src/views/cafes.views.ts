import { AllCafesResponse } from "../models/cafe";

export function processCafesData(data: AllCafesResponse[]) {
  const mapOfCafes: Map<string, Object> = new Map()
  const arrayOfCafeWithEmployees = []

  data.forEach(({ cafe_id, cafe_name, description, location }) => {
    mapOfCafes.set(cafe_id, { cafe_id, cafe_name, description, location })
  })

  for (const cafe of mapOfCafes.keys()) {
    const listOfEmployees = data
      .filter(rec => rec.cafe_id === cafe)
      .map(rec => ({
        emp_id: rec.emp_id,
        emp_name: rec.emp_name,
        email_address: rec.email_address,
        phone_number: rec.phone_number,
        // gender: rec.gender,
        start_date: rec.start_date
      }))

    arrayOfCafeWithEmployees.push({
      cafe: mapOfCafes.get(cafe),
      employees: listOfEmployees
    })
  }

  return arrayOfCafeWithEmployees
}