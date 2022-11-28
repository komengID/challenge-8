const request = require('supertest');
const app = require('../app')
const baseURL = "http://localhost:8000"
const dotenv = require("dotenv");
dotenv.config();

describe("API get all cars", () => {
    it("success get all data cars", async () => {
        const response = await request(app).get('/v1/cars')
        expect(response.statusCode).toBe(200);
    });
});

describe("API get car By ID", () => {
    it("success get data car", async () => {
        const response = await request(app).get('/v1/cars/20')
        expect(response.statusCode).toBe(200);
    });

    it("not success get data car", async () => {
        const response = await request(app).get('/v1/car/')
        expect(response.statusCode).toBe(404);
    });
});

describe("API create Car", () => {
    
    it('succes create cars', async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkZpa3JpIiwiZW1haWwiOiJmaWtyaUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQ1VTVE9NRVIifSwiaWF0IjoxNjY4NzY4MTQwfQ.XOQpMCBl4qRXwKv3J1pcECkgt2__4g6383v8z2Q0FaA';
        const cars = {
            name : "Galardo",
            price : 2000,
            size : "big",
            image : "image.jpg"
        };
        const response = await request(app).post('/v1/cars').set('Authorization', `Bearer ${token}`).send(cars);
        expect(response.statusCode).toBe(401);
      });

    it("Authentication JWT data car", async () => {
        const carData = {
            name : "Galardo",
            price : "2000",
            size : "big",
            image : "image.jpg"
        }
        const response = await request(app).post('/v1/cars')
        .send(carData)
        expect(response.statusCode).toBe(401);
    });
});