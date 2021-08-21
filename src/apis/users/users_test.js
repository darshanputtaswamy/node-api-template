
/**
 * @jest-environment node
 */
 jest.setTimeout(6000);
 global.console = {
     log: jest.fn(),
     error: jest.fn()
 }

 const axios = require('axios');
 const {to} = require('await-to-js');
 
 
 describe("Users API test",  () => {
     const app = require('../../../app');
     const service = axios.create({
         auth: {
           username: global.conf.authentication.admin.username,
           password: global.conf.authentication.admin.password
         }
       });
     const path = "http://localhost:"+ global.conf.listenPort +"/api/v1.0/lobs";
     let users_id = "";
    const users = {
        name: "john doe",
        email: "john.doe@email.com",
         age: 34
     };
     
     afterAll( done => {
         app.express_server.close();
         done();
     });
 
     test("POST /users", async done => {
         const [err, result] = await to(service.post(path, users));   
         
         expect(err).toBeNull();
         expect(result.status).toBe(200);
         expect(result.data.status).toBe("created");
         expect(result.data.entity).toBe("users");
         expect(result.data.id).not.toBeNull();
         users_id = result.data.id;
         done();
     });
 

     test("GET /users:id", async done => {        
         const [err, result] = await to(service.get(`${ path }/${users_id}`));        
         expect(err).toBeNull();
         expect(result.status).toBe(200);
         expect(result.data).not.toBeNull();
         expect(result.data.id).toBe(users_id)
         done();
     });
 
     test("PUT /users:id", async done => {
        users.name = "jane doe";
         users.email = "jane.doe@email.com";
        users.age = 32;
         
 
         const [err, result] = await to(service.put(`${path}/${users_id}`, users));   
         expect(err).toBeNull();
         expect(result.status).toBe(200);
         expect(result.data).not.toBeNull();
         expect(result.data.entity).toBe("lobs");
         expect(result.data.id).toBe(lobs_id);
         expect(result.data.status).toBe("updated");
         done();
     });
 
     test("DELETE /users:id", async done => {
         const [err, result] = await to(service.delete(`${path}/${users_id}`));
         expect(err).toBeNull();
         expect(result.status).toBe(200);
         expect(result.data).not.toBeNull();
         expect(result.data.entity).toBe("users");
         expect(result.data.id).toBe(users_id);
         expect(result.data.status).toBe("deleted");
         done();
     });
 });
 