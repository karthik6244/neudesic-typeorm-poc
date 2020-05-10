// import "reflect-metadata";
// import { GraphQLServer } from "graphql-yoga";
// import { createConnection } from "typeorm";

// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: (_: any, { name }: any) => `hhello ${name || "World"}`,
//   },
// };

// const server = new GraphQLServer({ typeDefs, resolvers });
// createConnection().then(() => {
//   server.start(() => console.log("Server is running on localhost:4000"));
// });
import app from "./app";
const PORT = 3000;
app.listen(PORT, () => {
  console.info("Express server listening on http://localhost:3000");
});
