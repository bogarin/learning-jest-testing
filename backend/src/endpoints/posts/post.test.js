const supertest = require("supertest");
const app = require("../../server");
const http = require("http");
let server;
let request;

describe("server", () => {
  describe("Endpoints", () => {
    describe("post POST", () => {
      beforeAll(done => {
        server = http.createServer(app);
        console.log(server);
        server.listen(done);
        request = supertest(server);
      });

      it("should create new post", async () => {
        const response = await request(app)
          .post("/")
          .send({ userId: 5 })
          .set("user_id", "1")
          .set("Content-type", "application/json");
        expect(response.status).toEqual(201);
        expect(response.body.userId).toEqual(5);
      });
      afterAll(done => {
        server.close(done);
      });
    });
  });
});
