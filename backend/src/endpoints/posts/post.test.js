const request = require("supertest");
const app = require("../../server");

describe("server", () => {
  describe("Endpoints", () => {
    describe("post POST", () => {
      beforeAll(async done => {
        server = app.listen(4000, () => {
          global.agent = request.agent(server);
          done();
        });
      });

      afterAll(async () => {
        await server.close();
      });

      it("should create new post", async () => {
        const response = await request(server)
          .post("/")
          .send({ userId: 5 })
          .set("user_id", "1")
          .set("Content-type", "application/json");
        expect(response.status).toEqual(201);
        expect(response.body.userId).toEqual(5);
      });
    });
  });
});
