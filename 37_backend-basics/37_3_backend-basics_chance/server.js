import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((request, response) => {
  // inside server for randomly create new Persona on reload
  const randomPersona = {
    name: chance.name(),
    age: chance.age(),
    profession: chance.profession(),
  };

  if (request.url === "/") {
    response.statusCode = 200;
    response.end(
      `Hello, my name is ${randomPersona.name} and I am ${randomPersona.age} years old. I am a ${randomPersona.profession}.`
    );
  } else {
    response.statusCode = 404;
    response.end("Not found");
  }
});
