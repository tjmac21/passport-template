const request = require("supertest");
const app = require("../../app");

describe("companies", () => {
  describe("GET /api/companies/:companyId/sessions", () => {
    it("should return a 200 status code", async () => {
      const res = await request(app).get("/api/companies/1/sessions").send();
      expect(res.statusCode).toEqual(200);
    });
  });

  describe("GET /api/companies/:companyId/sessions/:sessionId", () => {
    it("should return a 200 status code", async () => {
      const res = await request(app).get("/api/companies/1/sessions/1").send();
      expect(res.statusCode).toEqual(200);
    });
  });

  describe("POST /api/companies/:companyId/sessions", () => {
    it("should return a 200 status code", async () => {
      const res = await request(app).post("/api/companies/1/sessions").send();
      expect(res.statusCode).toEqual(200);
    });
  });

  describe("PUT /api/companies/:companyId/sessions/:sessionId", () => {
    it("should return a 200 status code", async () => {
      const res = await request(app).put("/api/companies/1/sessions/1").send();
      expect(res.statusCode).toEqual(200);
    });
  });

  describe("DELETE /api/companies/:companyId/sessions/:sessionId", () => {
    it("should return a 200 status code", async () => {
      const res = await request(app)
        .delete("/api/companies/1/sessions/1")
        .send();
      expect(res.statusCode).toEqual(200);
    });
  });
});

describe("profile", () => {
  describe("GET /api/profile/:id", () => {
    it("should return a 200 status code", async () => {
      const res = await request(app).get("/api/profile/1").send();
      expect(res.statusCode).toEqual(200);
    });
  });

  describe("POST /api/profile/:id", () => {
    it("should return a 200 status code", async () => {
      const res = await request(app).post("/api/profile/1").send();
      expect(res.statusCode).toEqual(200);
    });
  });

  describe("PUT /api/profile/:id", () => {
    it("should return a 200 status code", async () => {
      const res = await request(app).put("/api/profile/1").send();
      expect(res.statusCode).toEqual(200);
    });
  });

  describe("DELETE /api/profile/:id", () => {
    it("should return a 200 status code", async () => {
      const res = await request(app).delete("/api/profile/1").send();
      expect(res.statusCode).toEqual(200);
    });
  });
});

describe("sessions", () => {
  describe("GET /api/sessions/:sessionId", () => {
    it("should return a 200 status code", async () => {
      const res = await request(app).get("/api/sessions/1").send();
      expect(res.statusCode).toEqual(200);
    });
  });

  describe("POST /api/sessions", () => {
    it("should return a 200 status code", async () => {
      const res = await request(app).post("/api/sessions").send();
      expect(res.statusCode).toEqual(200);
    });
  });

  
});
