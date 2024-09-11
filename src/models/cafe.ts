export interface AllCafesRequest {
  id?: string
  location?: string
}

export interface AllCafesResponse {
  cafe_id: string
  cafe_name: string
  description: string
  email_address: string
  emp_id: string
  emp_name: string
  location: string
  phone_number: string
  start_date: string
}

export interface AddCafe {
  name: string
  location: string
  description: string
}

export interface UpdateCafe extends Partial<AddCafe> {
  id: string
}

export interface DeleteCafe {
  id: string
}
