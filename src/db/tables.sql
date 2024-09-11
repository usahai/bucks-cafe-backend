-- SET DATABASE
USE bucks_cafe;

-- Clear database
DROP TABLE IF EXISTS CafeEmployees;
DROP TABLE IF EXISTS Employees;
DROP TABLE IF Exists Cafes;

-- INIT database
CREATE TABLE Cafes (
  id VARCHAR(40) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  location VARCHAR(255) NOT NULL,
  description VARCHAR(256) NOT NULL
);

CREATE TABLE Employees (
  id VARCHAR(9) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email_address VARCHAR(255) NOT NULL,
  phone_number VARCHAR(9) NOT NULL,
  gender ENUM('Male', 'Female') NOT NULL
);

CREATE TABLE CafeEmployees (
  id VARCHAR(36) PRIMARY KEY,
  emp_id VARCHAR(9) NOT NULL UNIQUE,
  cafe_id VARCHAR(40),
  start_date DATE NULL,
  FOREIGN KEY (emp_id) REFERENCES Employees(id),
  FOREIGN KEY (cafe_id) REFERENCES Cafes(id) ON DELETE CASCADE
);