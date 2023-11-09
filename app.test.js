const request = require("supertest");
const { app, server } = require("./app");

describe("GET /health-check", () => {
    it("response 200 with JSON containing message", async () => {
        const response = await request(app).get("/health-check");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: "Hello, world" });
        server.close();
    });
});