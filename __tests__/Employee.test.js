const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Spencer", "1234", "adc123@gmail.com");

  expect(employee.name).toBe("Spencer");
  expect(employee.id).toBe("1234");
  expect(employee.email).toBe("adc123@gmail.com");
});

test("gets an employee's name", () => {
  const employee = new Employee("Spencer", "1234", "adc123@gmail.com");

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("gets an employee's id", () => {
  const employee = new Employee("Spencer", "1234", "adc123@gmail.com");

  expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test("gets an employee's email", () => {
  const employee = new Employee("Spencer", "1234", "adc123@gmail.com");

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("gets an employee's role", () => {
  const employee = new Employee("Spencer", "1234", "adc123@gmail.com");

  expect(employee.getRole()).toBe("Employee");
});
