const assert = require("assert");
const { serverInit } = require("../NodeJsExercise2/server");

describe("endpoints", function() {
  let server;

  before(async () => {
    server = await serverInit();
  });

  after(async () => {
    await server.stop();
  });

  it('returns proper json response for "/" get request', async () => {
    const res = await server.inject({
      method: "GET",
      url: "/"
    });

    assert.deepStrictEqual(
      {
        author: "WB",
        message: "Have a nice day!"
      },
      res.result
    );
  });
});
