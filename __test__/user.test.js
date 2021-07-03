const request = require("supertest");
const app = require("../server");

describe("User API test:", () => {
  it("should return one user", async () => {
    const { body } = await request(app)
      .get("/user")
      .expect(body)
      .toEqual([
        expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            email: expect.any(String),
            gender: expect.any(String),
            role: expect.any(Array),
          }),
        ]),
      ]);
  });

  //   it("should post user", () => {});

  //   it("should delete user", () => {});
});
