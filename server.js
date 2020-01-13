const Hapi = require("hapi");
const jsonReturningController = require("./controllers/jsonReturningController");

const server = new Hapi.Server({
  host: "localhost",
  port: 3000
});

server.route({
  method: "GET",
  path: "/",
  handler: jsonReturningController.returnJson
});

exports.serverInit = async () => {
  await server.initialize();
  return server;
};

exports.serverStart = async () => {
  await server.start();
  return server;
};
