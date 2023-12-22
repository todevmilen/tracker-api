import supertest from "supertest";
import app from "../app";

describe("healthCheck", () => {
  describe("Check if server starts ok", () => {
    it("should return status 200", async () => {
      await supertest(app).get("/api/health").expect(200);
    });
  });
});
