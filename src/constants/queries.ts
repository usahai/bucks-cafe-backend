// Cafe-related queries
export const GET_ALL_CAFES = `SELECT 
  c.id as cafe_id,
  c.name as cafe_name,
  c.location,
  c.description,
  e.id as emp_id,
  e.name as emp_name,
  e.email_address,
  e.phone_number,
  ce.start_date
FROM bucks_cafe.Cafes c
LEFT JOIN bucks_cafe.CafeEmployees ce ON c.id = ce.cafe_id
LEFT JOIN bucks_cafe.Employees e ON ce.emp_id = e.id
`

export const GET_ALL_CAFES_WITH_LOCATION = `SELECT *
FROM bucks_cafe.Cafes c
INNER JOIN bucks_cafe.CafeEmployees ce ON c.id = ce.cafe_id
INNER JOIN bucks_cafe.Employees e ON ce.emp_id = e.id
WHERE c.location = ?
`

export const GET_ALL_CAFES_BY_ID = `SELECT
  c.id as cafe_id,
  c.name as cafe_name,
  c.location,
  c.description
FROM bucks_cafe.Cafes c
WHERE c.id = ?
`

// Employee-related queries
export const GET_ALL_EMPLOYEES = `SELECT
	e.id as emp_id,
  e.name as emp_name,
  e.email_address,
  e.phone_number,
  c.name as cafe_name,
  DATEDIFF(CURDATE(), DATE(ce.start_date)) as days_worked
FROM bucks_cafe.Employees e
INNER JOIN bucks_cafe.CafeEmployees ce ON e.id = ce.emp_id
INNER JOIN bucks_cafe.Cafes c ON ce.cafe_id = c.id
ORDER BY days_worked DESC
;
`

export const GET_ALL_EMPLOYEES_BY_CAFE = `SELECT
	e.id as emp_id,
  e.name as emp_name,
  e.email_address,
  e.phone_number,
  c.name as cafe_name,
  ce.id as cafe_emp_id,
  DATEDIFF(CURDATE(), DATE(ce.start_date)) as days_worked
FROM bucks_cafe.Employees e
INNER JOIN bucks_cafe.CafeEmployees ce ON e.id = ce.emp_id
INNER JOIN bucks_cafe.Cafes c ON ce.cafe_id = c.id
WHERE c.id = ?
ORDER BY days_worked DESC
;
`

export const GET_EMPLOYEE_BY_ID = `SELECT
	e.id as emp_id,
  e.name as emp_name,
  e.email_address,
  e.phone_number,
  e.gender,
  c.name as cafe_name,
  c.id as cafe_id,
  DATEDIFF(CURDATE(), DATE(ce.start_date)) as days_worked
FROM bucks_cafe.Employees e
INNER JOIN bucks_cafe.CafeEmployees ce ON e.id = ce.emp_id
INNER JOIN bucks_cafe.Cafes c ON ce.cafe_id = c.id
WHERE e.id = ?
;
`

export const DELETE_FROM_CAFE_EMPLOYEES = `DELETE
  e, ce 
FROM bucks_cafe.Employees e
LEFT JOIN bucks_cafe.CafeEmployees ce ON e.id = ce.emp_id 
WHERE e.id = ?
`