import { createServer } from "node:http";

const userName = "Denise";

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.statusCode = 200;
    response.end(`Hello, ${userName}!`);
  } else {
    response.statusCode = 404;
    response.end("Not Found!");
  }
});
