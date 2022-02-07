const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer(
    "Spencer",
    "1234",
    "adc123@gmail.com",
    "SpencerHulse"
  );

  expect(engineer.name).toBe("Spencer");
  expect(engineer.id).toBe("1234");
  expect(engineer.email).toBe("adc123@gmail.com");
  expect(engineer.github).toBe("SpencerHulse");
});

test("gets an engineer's name", () => {
  const engineer = new Engineer(
    "Spencer",
    "1234",
    "adc123@gmail.com",
    "SpencerHulse"
  );

  expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test("gets an engineer's id", () => {
  const engineer = new Engineer(
    "Spencer",
    "1234",
    "adc123@gmail.com",
    "SpencerHulse"
  );

  expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id));
});

test("gets an engineer's email", () => {
  const engineer = new Engineer(
    "Spencer",
    "1234",
    "adc123@gmail.com",
    "SpencerHulse"
  );

  expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("gets an engineer's role", () => {
  const engineer = new Engineer(
    "Spencer",
    "1234",
    "adc123@gmail.com",
    "SpencerHulse"
  );

  expect(engineer.getRole()).toBe("Engineer");
});

test("gets an engineer's GitHub", () => {
  const engineer = new Engineer(
    "Spencer",
    "1234",
    "adc@gmail.com",
    "SpencerHulse"
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(`https://github.com/${engineer.github}`)
  );
});
