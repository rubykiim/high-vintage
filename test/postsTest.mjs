import chai from "chai";
import chaiHttp from "chai-http";
import router from "../back-end/routes/posts.mjs";

chai.use(chaiHttp);
const expect = chai.expect;

// describe("POST /api/posts/create", () => {
//   it("should create a new post", async () => {
//     const res = await chai.request(router).post("/api/posts/create").send({
//       author: "user1",
//       user: "user1",
//       location: "nyc thrift",
//       content: "Thrift is cool",
//       style: "Streetwear",
//       files: "",
//     });
//     expect(res).to.have.status(201);
//     expect(res.body).to.have.property("newPost");
//   });
// });

// describe("POST /api/posts/:postID/like", () => {
//   it("should update the number of likes for a post", async () => {
//     const res = await chai.request(router).post("/api/posts/123/like").send({
//       userID: "user1",
//       postID: "123",
//       liked: true,
//       postLikes: 4,
//     });
//     expect(res).to.have.status(200);
//     expect(res.body).to.have.property("numLikes");
//   });
// });
