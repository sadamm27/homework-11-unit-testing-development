const app = require("../app");
const request  = require ('supertest');

describe("GET /todo", () => {
    
    it("test get /todo", (done) => {
        request (app)
        .get("/todo")
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            console.log(response.body)
            const firstData = response.body[0]
            expect(firstData.id).toBe(1)
            expect(firstData.name).toBe('Mengerjakan homework')
            expect(firstData.status).toBe('active')
            done();
        })
        .catch(done)
    })

    it("test get /todo/:id", (done) => {
       
        request (app)
        .get("/todo/2")
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            console.log(response.body)
            const data = response.body;
            expect(data.id).toBe(2)
            expect(data.name).toBe('Mengerjakan exam')
            expect(data.status).toBe('inactive')
            done();
        })
        .catch(done)
    })

    it("test post /todo", (done) => {
        
        request (app)
        .post("/todo")
        .send({ name: "Bermain Game", status: "active"})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .then(response => {
            const data = response.body;
            expect(data.name).toBe("Bermain Game")
            expect(data.status).toBe("active")
            done();
        })
        .catch(done)
    })

    it("delete post /todo/:id", (done) => {

        request(app)
            .delete("/todo/46")
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                const data = response.body;
                expect(data.message).toBe("Delete Successfully")
                done();
            })
            .catch(done)
    })

})