export interface AllEmployees {
  cafe_id?: string
  emp_id?: string
}

type Gender = 'Male' | 'Female'

interface AddEmployeeBase {
  id: string
  name: string
  email_address: string
  phone_number: string
  gender: Gender
}

export interface AddEmployee extends AddEmployeeBase {
  cafe_id?: string
}

export interface UpdateEmployee extends Partial<AddEmployeeBase> {
  cafe_id?: string
}

export interface DeleteEmployee {
  id: string
}
