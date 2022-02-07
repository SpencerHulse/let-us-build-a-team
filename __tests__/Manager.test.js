const Manager = require("../lib/Manager");

test("creates an manager object", () => {
  const manager = new Manager("Spencer", "1234", "adc123@gmail.com", "100");

  expect(manager.name).toBe("Spencer");
  expect(manager.id).toBe("1234");
  expect(manager.email).toBe("adc123@gmail.com");
  expect(manager.officeNumber).toBe("100");
});

test("gets an manager's name", () => {
  const manager = new Manager("Spencer", "1234", "adc123@gmail.com", "100");

  expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test("gets an manager's id", () => {
  const manager = new Manager("Spencer", "1234", "adc123@gmail.com", "100");

  expect(manager.getId()).toEqual(expect.stringContaining(manager.id));
});

test("gets an manager's email", () => {
  const manager = new Manager("Spencer", "1234", "adc123@gmail.com", "100");

  expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test("gets an manager's role", () => {
  const manager = new Manager("Spencer", "1234", "adc123@gmail.com", "100");

  expect(manager.getRole()).toBe("Manager");
});
