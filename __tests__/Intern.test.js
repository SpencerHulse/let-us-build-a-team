const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Spencer", "1234", "adc123@gmail.com", "UTC");

  expect(intern.name).toBe("Spencer");
  expect(intern.id).toBe("1234");
  expect(intern.email).toBe("adc123@gmail.com");
  expect(intern.school).toBe("UTC");
});

test("gets an intern's name", () => {
  const intern = new Intern("Spencer", "1234", "adc123@gmail.com", "UTC");

  expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test("gets an intern's id", () => {
  const intern = new Intern("Spencer", "1234", "adc123@gmail.com", "UTC");

  expect(intern.getId()).toEqual(expect.stringContaining(intern.id));
});

test("gets an intern's email", () => {
  const intern = new Intern("Spencer", "1234", "adc123@gmail.com", "UTC");

  expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test("gets an intern's role", () => {
  const intern = new Intern("Spencer", "1234", "adc123@gmail.com", "UTC");

  expect(intern.getRole()).toBe("Intern");
});

test("gets an intern's school", () => {
  const intern = new Intern("Spencer", "1234", "adc123@gmail.com", "UTC");

  expect(intern.getSchool()).toBe("UTC");
});
