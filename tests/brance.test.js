
const request = require('supertest')
const app = require('../server')


//...........POST test...........//
describe("POST /brance", () => {

    //201
    test("Brance created.", async () => {
        const response = await request(app)
            .post("/api/brance")
            .send({
                brance_id: 6,
                brance_name: "test",
                brance_phone: "55555555"
            })
        expect(response.statusCode).toBe(201);
    });

    //404
    test("Brance not created.", async () => {
        const response = await request(app)
            .post("/api/brance")
            .send({
                brance_id: 22,
                brance_name: "test",
                brance_phone: "55555555"
            })
        expect(response.statusCode).toBe(404);
    });
})


//...........PUT..............//
describe("PUT /brance", () => {

    //200
    test("Brance updated.", async () => {
        const response = await request(app)
            .put("/api/brance")
            .send({
                brance_id: 22,
                brance_name: "test",
                brance_phone: "55555555"
            })
        expect(response.statusCode).toBe(404);
    });

    //404
    test("Brance not updated.", async () => {
        const response = await request(app)
            .put("/api/brance")
            .send({
                brance_id: 100,
                brance_name: "test",
                brance_phone: "55555555"
            })
        expect(response.statusCode).toBe(404);
    });
    //400
    test("Brance err for update.", async () => {
        const response = await request(app)
            .put("/api/brance")
            .send({
                brance_name: "test",
                brance_phone: "55555555"
            })
        expect(response.statusCode).toBe(400);
    });
})

//.............DELETE...............//
describe("DELETE /brance", () => {

    //200
    test("Brance DELETED.", async () => {
        const response = await request(app)
            .put("/api/brance/22")
        expect(response.statusCode).toBe(200);
    });

    //404
    test("Brance NOT DELETED.", async () => {
        const response = await request(app)
            .delete("/api/brance/100")
        expect(response.statusCode).toBe(404);
    });

})


//.........GET.................//
describe("GET /brance", () => {

    //200
    test("RETURN list of brance", async () => {
        const response = await request(app)
            .get("/api/brance")
        expect(response.statusCode).toBe(200);
    });

})