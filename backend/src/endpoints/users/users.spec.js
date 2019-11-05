const handles = require("./index");

describe("Ennpoints", () => {
  describe("Users", () => {
    describe("get users", () => {
      it("should return to user json ", async () => {
        const axios = {
          get: jest.fn().mockResolvedValue({ data: 1 })
        };

        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        };

        await handles({ axios }).get({}, res);

        expect(res.status.mock.calls).toEqual([[200]]);
        expect(res.send.mock.calls).toEqual([[1]]);
      });
    });
    describe("post users", () => {
      it("creates a resource ", async () => {
        const axios = {
          post: jest.fn().mockResolvedValue({ data: 1 })
        };

        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        };

        const req = {
          body: "puerquesito"
        };
        await handles({ axios }).post(req, res);

        expect(res.status.mock.calls).toEqual([[201]]);
        expect(res.send.mock.calls).toEqual([[1]]);
        expect(axios.post.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users", "puerquesito"]
        ]);
      });
    });
    describe("put users", () => {
      it("updates resource ", async () => {
        const axios = {
          put: jest.fn().mockResolvedValue({ data: 1 })
        };

        const res = {
          sendStatus: jest.fn()
        };

        const req = {
          body: "puerquesito",
          params: {
            id: 12
          }
        };
        await handles({ axios }).put(req, res);
        expect(res.sendStatus.mock.calls).toEqual([[204]]);
        expect(axios.put.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users/12", "puerquesito"]
        ]);
      });
    });
    describe("delete users", () => {
      it("delete resource ", async () => {
        const axios = {
          delete: jest.fn()
        };

        const res = {
          sendStatus: jest.fn()
        };

        const req = {
          params: {
            id: 12
          }
        };
        await handles({ axios }).delete(req, res);
        expect(res.sendStatus.mock.calls).toEqual([[204]]);
        expect(axios.delete.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users/12"]
        ]);
      });
    });
  });
});
